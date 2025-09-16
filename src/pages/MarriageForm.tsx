import React, { useEffect, useRef, useState, useCallback } from "react";
import * as fabric from "fabric";
(fabric as any).Text.prototype.fontFamily = "Arial";
(fabric as any).Textbox.prototype.fontFamily = "Arial";
(fabric as any).IText.prototype.fontFamily = "Arial";

// Optional global default to ensure fontFamily is never undefined
// (helps avoid getFontCache -> toLowerCase crashes)
if ((fabric as any).Textbox?.ownDefaults) {
  (fabric as any).Textbox.ownDefaults.fontFamily = "Arial";
}
if ((fabric as any).IText?.ownDefaults) {
  (fabric as any).IText.ownDefaults.fontFamily = "Arial";
}

const marriageDesigns = [
  "/templates/marriage1.png",
  "/templates/marriage2.jpg",
  "/templates/marriage3.jpg",
];

const DEFAULT_W = 500;
const DEFAULT_H = 700;

type FormDataT = {
  bride: string;
  groom: string;
  date: string;
  venue: string;
  hostedBy: string;
  rsvp: string;
  notes: string;
};

type TextKeys = "title" | "hostedBy" | "dateVenue" | "rsvp" | "notes";

const MarriageCardEditor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  // keep background object and form-driven text layers out of React state
  const bgRef = useRef<fabric.Object | null>(null);
  const textMapRef = useRef<Record<TextKeys, fabric.Textbox | undefined>>({} as any);

  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Textbox | null>(null);

  const [formData, setFormData] = useState<FormDataT>({
    bride: "",
    groom: "",
    date: "",
    venue: "",
    hostedBy: "",
    rsvp: "",
    notes: "",
  });

  // init canvas (v6: cast element and options; don't return Promise from cleanup)
  useEffect(() => {
    if (!canvasRef.current) return;

    const c = new fabric.Canvas(
      canvasRef.current as HTMLCanvasElement,
      {
        width: DEFAULT_W,
        height: DEFAULT_H,
        backgroundColor: "#fdf6f0",
        selection: true,
        preserveObjectStacking: true,
      } as Partial<fabric.CanvasOptions>
    );

    // double‑click to edit
    c.on("mouse:dblclick", (e: any) => {
      const target = e?.target;
      if (target && target instanceof fabric.Textbox) {
        target.enterEditing();
        c.requestRenderAll();
      }
    });

    // selection tracking
    c.on("selection:created", (e: any) => {
      const t = e?.selected?.[0];
      setSelectedObject(t instanceof fabric.Textbox ? t : null);
    });
    c.on("selection:updated", (e: any) => {
      const t = e?.selected?.[0];
      setSelectedObject(t instanceof fabric.Textbox ? t : null);
    });
    c.on("selection:cleared", () => setSelectedObject(null));

    setCanvas(c);

    // IMPORTANT: dispose() returns a Promise in v6; do not return it from cleanup
    return () => {
      void c.dispose();
    };
  }, []);

  // helper: add or update a named textbox
  type SimpleTextOpts = {
    top: number;
    left: number;
    width?: number;
    fontSize?: number;
    fill?: string;
    fontStyle?: "normal" | "italic";
    textAlign?: "left" | "center" | "right" | "justify";
  };

  const upsertTextbox = useCallback(
    (key: TextKeys, text: string, options: SimpleTextOpts) => {
      if (!canvas) return;
      const existing = textMapRef.current[key];

      if (!existing) {
        const tb = new fabric.Textbox(text, {
          left: options.left,
          top: options.top,
          width: options.width ?? canvas.getWidth() - 100,
          fontSize: options.fontSize ?? 18,
          fill: options.fill ?? "#555",
          fontStyle: options.fontStyle,
          textAlign: options.textAlign,
          fontFamily: "Arial", // safe default to avoid undefined
          editable: true,
          selectable: true,
        });
        textMapRef.current[key] = tb;
        canvas.add(tb);
      } else {
        existing.set({
          text,
          left: options.left,
          top: options.top,
          width: options.width ?? existing.width,
          fontSize: options.fontSize ?? existing.fontSize,
          fill: options.fill ?? (existing.fill as string),
          fontStyle: options.fontStyle ?? existing.fontStyle,
          textAlign: options.textAlign ?? (existing.textAlign as any),
        } as any);
      }
      canvas.requestRenderAll();
    },
    [canvas]
  );

  // keep form text layers synced without wiping user-added content
  useEffect(() => {
    if (!canvas) return;

    const title = `${formData.bride || "Bride"} 💍 ${formData.groom || "Groom"}`;
    upsertTextbox("title", title, { top: 50, left: 50, width: canvas.getWidth() - 100, fontSize: 28, fill: "#3e2f22" });

    if (formData.hostedBy) {
      upsertTextbox("hostedBy", `Hosted By: ${formData.hostedBy}`, { top: 120, left: 50, width: canvas.getWidth() - 100, fontSize: 18, fill: "#555" });
    }

    if (formData.date || formData.venue) {
      upsertTextbox(
        "dateVenue",
        `Date: ${formData.date || "Date"} | Venue: ${formData.venue || "Venue"}`,
        { top: 160, left: 50, width: canvas.getWidth() - 100, fontSize: 18, fill: "#555" }
      );
    }

    if (formData.rsvp) {
      upsertTextbox("rsvp", `RSVP: ${formData.rsvp}`, { top: 200, left: 50, width: canvas.getWidth() - 100, fontSize: 18, fill: "#555" });
    }

    if (formData.notes) {
      upsertTextbox("notes", formData.notes, { top: 240, left: 50, width: canvas.getWidth() - 100, fontSize: 16, fill: "#777", fontStyle: "italic" });
    }

    canvas.requestRenderAll();
  }, [canvas, formData, upsertTextbox]);

  // set raster background (jpg/png) as a true background layer
  const setRasterBackground = useCallback(async (url: string) => {
    if (!canvas) return;
    const img = await fabric.Image.fromURL(url, { crossOrigin: "anonymous" });
    img.scaleToWidth(canvas.getWidth());
    img.set({ left: 0, top: 0 });
    canvas.backgroundImage = img; // always behind other objects
    bgRef.current = img;
    canvas.requestRenderAll();
  }, [canvas]);

  // import svg and convert text nodes to editable Textbox (with font fallback)
  const importSVG = useCallback(async (url: string) => {
    if (!canvas) return;
    const parsed = await fabric.loadSVGFromURL(url);
    const objects = (parsed as any).objects ?? parsed;

    objects.forEach((obj: fabric.Object) => {
      const anyObj = obj as any;
      if (typeof anyObj.text === "string") {
        const tb = new fabric.Textbox(anyObj.text || "", {
          left: obj.left ?? 0,
          top: obj.top ?? 0,
          fill: anyObj.fill,
          fontSize: anyObj.fontSize,
          fontFamily: typeof anyObj.fontFamily === "string" && anyObj.fontFamily ? anyObj.fontFamily : "Arial", // fallback
          textAlign: anyObj.textAlign,
          editable: true,
          selectable: true,
        });
        canvas.add(tb);
        obj.dispose?.();
      } else {
        if ("text" in obj) {
          obj.set({
            selectable: true,
            fontFamily: (obj as any).fontFamily || "Arial", // ensure fallback
          });
        } else {
          obj.set({ selectable: true });
        }
        canvas.add(obj);
      }
    });

    canvas.requestRenderAll();
  }, [canvas]);

  const handleTemplateSelect = (tpl: string) => {
    setSelectedTemplate(tpl);
    void setRasterBackground(tpl);
  };

  const handleTemplateUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSelectedTemplate(url);
    if (file.type === "image/svg+xml" || /\.svg$/i.test(file.name)) {
      await importSVG(url);
    } else {
      await setRasterBackground(url);
    }
  };

  const handleAddText = () => {
    if (!canvas) return;
    const tb = new fabric.Textbox("Double click to edit", {
      left: 50,
      top: 320,
      width: canvas.getWidth() - 100,
      fill: "#222",
      fontSize: 20,
      fontFamily: "Arial", // safe default
      editable: true,
      selectable: true,
    });
    canvas.add(tb);
    canvas.setActiveObject(tb);
    setSelectedObject(tb);
    canvas.requestRenderAll();
  };

  const handleDeleteSelected = () => {
    if (!canvas) return;
    const active = canvas.getActiveObject();
    if (active && active !== bgRef.current) {
      canvas.remove(active);
      setSelectedObject(null);
      canvas.requestRenderAll();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Card updated!");
  };

  // inspector helpers
  type TextPatch = Partial<fabric.TextboxProps & fabric.ITextProps> & { text?: string };

  const updateSelectedText = (patch: TextPatch) => {
    if (!canvas || !selectedObject) return;
    selectedObject.set({ fontFamily: selectedObject.fontFamily || "Arial", ...patch });
    canvas.requestRenderAll();
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 p-6">
      {/* Left Form */}
      <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-3">
        <h2 className="text-xl font-bold">Marriage Card Details</h2>
        <input type="text" name="bride" placeholder="Bride's Name" value={formData.bride} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <input type="text" name="groom" placeholder="Groom's Name" value={formData.groom} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <input type="text" name="venue" placeholder="Venue" value={formData.venue} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <input type="text" name="hostedBy" placeholder="Hosted By" value={formData.hostedBy} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <input type="text" name="rsvp" placeholder="RSVP Contact" value={formData.rsvp} onChange={handleInputChange} className="w-full border p-2 rounded" />
        <textarea name="notes" placeholder="Extra Notes" value={formData.notes} onChange={handleInputChange} rows={3} className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">Update Card</button>
        <div className="pt-4 flex gap-2">
          <button type="button" onClick={handleAddText} className="flex-1 bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">Add Text</button>
          <button type="button" onClick={handleDeleteSelected} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">Delete Selected</button>
        </div>
      </form>

      {/* Center Canvas */}
      <div className="flex justify-center items-center bg-gray-50 rounded-xl shadow-lg">
        <canvas ref={canvasRef} />
      </div>

      {/* Right Templates + Inspector */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold">Templates</h2>
        <div className="space-y-2">
          {marriageDesigns.map((tpl, i) => (
            <img
              key={i}
              src={tpl}
              alt={`Template ${i + 1}`}
              className={`w-full rounded-lg cursor-pointer border-2 ${selectedTemplate === tpl ? "border-pink-500" : "border-transparent"}`}
              onClick={() => handleTemplateSelect(tpl)}
            />
          ))}
        </div>
        <div className="mt-4">
          <label className="block mb-2">Upload Your Template (SVG/PNG/JPG)</label>
          <input type="file" accept="image/*,.svg" onChange={handleTemplateUpload} className="w-full border p-2 rounded" />
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="font-semibold">Selected Text Properties</h3>
          {selectedObject ? (
            <div className="space-y-2">
              <input
                type="text"
                value={selectedObject.text || ""}
                onChange={(e) => updateSelectedText({ text: e.target.value })}
                className="w-full border p-2 rounded"
                placeholder="Edit text"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  min={8}
                  max={96}
                  value={Number(selectedObject.fontSize) || 18}
                  onChange={(e) => updateSelectedText({ fontSize: Number(e.target.value) })}
                  className="w-1/2 border p-2 rounded"
                  placeholder="Font size"
                />
                <input
                  type="color"
                  value={(selectedObject.fill as string) || "#000000"}
                  onChange={(e) => updateSelectedText({ fill: e.target.value })}
                  className="w-1/2 border p-2 rounded"
                  title="Color"
                />
              </div>
              <select
                value={(selectedObject.textAlign as string) || "left"}
                onChange={(e) => updateSelectedText({ textAlign: e.target.value as any })}
                className="w-full border p-2 rounded"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-gray-100 py-2 rounded"
                  onClick={() => updateSelectedText({ fontWeight: selectedObject.fontWeight === "bold" ? "normal" : "bold" })}
                >
                  Bold
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-100 py-2 rounded"
                  onClick={() => updateSelectedText({ fontStyle: selectedObject.fontStyle === "italic" ? "normal" : "italic" })}
                >
                  Italic
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">Select a text layer to edit</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarriageCardEditor;
