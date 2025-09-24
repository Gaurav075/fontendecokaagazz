// AnniversaryForm.tsx
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import * as fabric from "fabric";
import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Download,
  Trash2,
  Plus
} from "lucide-react";

// Anniversary templates (similar structure to marriageDesigns)
const anniversaryDesigns: Record<
  string,
  {
    title: string;
    image: string | null;
    template: {
      backgroundColor: string;
      elements: Array<{
        type: "text";
        text: string;
        top: number;
        left: number;
        fontSize: number;
        fontFamily: string;
        fontWeight?: string;
        color?: string;
        binding?: string;
      }>;
    };
  }
> = {
  "1": {
    title: "Elegant Roses",
    image: "/templates/anniversary1.png",
    template: {
      backgroundColor: "#fff5f7",
      elements: [
        {
          type: "text",
          text: "[Couple Names]",
          top: 120,
          left: 120,
          fontSize: 34,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#7b3f00",
          binding: "coupleNames"
        },
        {
          type: "text",
          text: "[Anniversary Year]",
          top: 165,
          left: 120,
          fontSize: 20,
          fontFamily: "serif",
          color: "#7b3f00",
          binding: "anniversaryYear"
        },
        {
          type: "text",
          text: "[Date]",
          top: 210,
          left: 120,
          fontSize: 16,
          fontFamily: "serif",
          binding: "date"
        },
        {
          type: "text",
          text: "[Time]",
          top: 210,
          left: 260,
          fontSize: 16,
          fontFamily: "serif",
          binding: "time"
        },
        {
          type: "text",
          text: "[Venue]",
          top: 250,
          left: 160,
          fontSize: 16,
          fontFamily: "serif",
          binding: "venue"
        },
        {
          type: "text",
          text: "[Contact]",
          top: 290,
          left: 160,
          fontSize: 14,
          fontFamily: "serif",
          binding: "rsvp"
        }
      ]
    }
  },
  "2": {
    title: "Silver Jubilee",
    image: "/templates/anniversary2.png",
    template: {
      backgroundColor: "#f7f7f7",
      elements: [
        {
          type: "text",
          text: "[Couple Names]",
          top: 120,
          left: 120,
          fontSize: 34,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#4d4d4d",
          binding: "coupleNames"
        },
        {
          type: "text",
          text: "[Anniversary Year]",
          top: 165,
          left: 120,
          fontSize: 20,
          fontFamily: "serif",
          color: "#4d4d4d",
          binding: "anniversaryYear"
        },
        {
          type: "text",
          text: "[Date]",
          top: 210,
          left: 120,
          fontSize: 16,
          fontFamily: "serif",
          binding: "date"
        },
        {
          type: "text",
          text: "[Time]",
          top: 210,
          left: 260,
          fontSize: 16,
          fontFamily: "serif",
          binding: "time"
        },
        {
          type: "text",
          text: "[Venue]",
          top: 250,
          left: 160,
          fontSize: 16,
          fontFamily: "serif",
          binding: "venue"
        },
        {
          type: "text",
          text: "[Contact]",
          top: 290,
          left: 160,
          fontSize: 14,
          fontFamily: "serif",
          binding: "rsvp"
        }
      ]
    }
  },
  "3": {
    title: "Golden Celebration",
    image: "/templates/anniversary3.png",
    template: {
      backgroundColor: "#fffaf0",
      elements: [
        {
          type: "text",
          text: "[Couple Names]",
          top: 120,
          left: 120,
          fontSize: 34,
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#8b6b00",
          binding: "coupleNames"
        },
        {
          type: "text",
          text: "[Anniversary Year]",
          top: 165,
          left: 120,
          fontSize: 20,
          fontFamily: "serif",
          color: "#8b6b00",
          binding: "anniversaryYear"
        },
        {
          type: "text",
          text: "[Date]",
          top: 210,
          left: 120,
          fontSize: 16,
          fontFamily: "serif",
          binding: "date"
        },
        {
          type: "text",
          text: "[Time]",
          top: 210,
          left: 260,
          fontSize: 16,
          fontFamily: "serif",
          binding: "time"
        },
        {
          type: "text",
          text: "[Venue]",
          top: 250,
          left: 160,
          fontSize: 16,
          fontFamily: "serif",
          binding: "venue"
        },
        {
          type: "text",
          text: "[Contact]",
          top: 290,
          left: 160,
          fontSize: 14,
          fontFamily: "serif",
          binding: "rsvp"
        }
      ]
    }
  }
};

const AnniversaryForm = () => {
  const [activeTemplateId, setActiveTemplateId] = useState("1");
  const [customUpload, setCustomUpload] = useState<string | null>(null);

  const design =
    activeTemplateId === "upload"
      ? {
          title: "Custom Upload",
          image: customUpload,
          template: { backgroundColor: "#ffffff", elements: [] as any[] }
        }
      : anniversaryDesigns[activeTemplateId];

  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // map form field -> fabric.Text object
  const boundObjectsRef = useRef<Record<string, fabric.Text>>({});

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [selectedObject, setSelectedObject] = useState<any>(null);

  const [formData, setFormData] = useState({
    coupleNames: "",
    anniversaryYear: "",
    date: "",
    time: "",
    venue: "",
    rsvp: "",
    extraNotes: ""
  });

  // Text editor state
  const [textProperties, setTextProperties] = useState({
    fontSize: 16,
    fontFamily: "serif",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "",
    textAlign: "left",
    fill: "#000000",
    text: ""
  });

  useEffect(() => {
    if (!design) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current as HTMLCanvasElement, {
      width: 400,
      height: 600,
      backgroundColor: design.template.backgroundColor || "#ffffff"
    });

    const loadCanvasContent = async () => {
      fabricCanvas.backgroundImage = null;

      if (design.image) {
        try {
          const img = await fabric.Image.fromURL(design.image);
          img.scaleToWidth(fabricCanvas.width!);
          img.scaleToHeight(fabricCanvas.height!);
          fabricCanvas.backgroundImage = img;
        } catch (err) {
          console.error("Error loading image:", err);
        }
      }

      boundObjectsRef.current = {};

      design.template.elements.forEach((el) => {
        if (el.type === "text") {
          const textObj = new fabric.Text(el.text, {
            left: el.left,
            top: el.top,
            fontSize: el.fontSize,
            fontFamily: el.fontFamily,
            fontWeight: el.fontWeight || "normal",
            fill: el.color || "#000000"
          });

          if (el.binding) {
            (textObj as any).binding = el.binding;
            boundObjectsRef.current[el.binding] = textObj;
          }

          fabricCanvas.add(textObj);
        }
      });

      fabricCanvas.renderAll();
    };

    loadCanvasContent();

    const updateTextProps = (obj: any) => {
      if (obj && obj.type === "text") {
        setTextProperties({
          fontSize: obj.fontSize,
          fontFamily: obj.fontFamily,
          fontWeight: obj.fontWeight,
          fontStyle: obj.fontStyle,
          textDecoration: obj.textDecoration || "",
          textAlign: obj.textAlign,
          fill: obj.fill,
          text: obj.text
        });
      }
    };

    const handleSelectionCreated = (e: any) => {
      setSelectedObject(e.selected[0]);
      updateTextProps(e.selected[0]);
    };
    const handleSelectionUpdated = (e: any) => {
      setSelectedObject(e.selected[0]);
      updateTextProps(e.selected[0]);
    };
    const handleSelectionCleared = () => setSelectedObject(null);

    fabricCanvas.on("selection:created", handleSelectionCreated);
    fabricCanvas.on("selection:updated", handleSelectionUpdated);
    fabricCanvas.on("selection:cleared", handleSelectionCleared);

    setCanvas(fabricCanvas);

    fabricCanvas.on("text:changed", (e: any) => {
      const obj = e.target as fabric.Text & { binding?: string };
      if (obj && obj.type === "text" && (obj as any).binding) {
        const key = (obj as any).binding!;
        setFormData((prev) => ({
          ...prev,
          [key]: obj.text || ""
        }));
      }
    });

    return () => {
      fabricCanvas.dispose();
      setCanvas(null);
    };
  }, [activeTemplateId, customUpload, design]);

  const updateSelectedText = (property: string, value: string | number) => {
    if (selectedObject && selectedObject.type === "text" && canvas) {
      selectedObject.set(property, value);
      canvas.renderAll();
      setTextProperties((prev) => ({ ...prev, [property]: value }));

      const bindingKey = (selectedObject as any).binding;
      if (property === "text" && bindingKey) {
        setFormData((prev) => ({
          ...prev,
          [bindingKey]: value as string
        }));
      }
    }
  };

  const addNewText = () => {
    if (!canvas) return;
    const textObj = new fabric.Text("New Text", {
      left: 100,
      top: 100,
      fontSize: 16,
      fontFamily: "serif",
      fill: "#000000"
    });
    canvas.add(textObj);
    canvas.setActiveObject(textObj);
    canvas.renderAll();
  };

  const replaceTemplateText = () => {
    if (!canvas) return;
    canvas.getObjects().forEach((obj) => {
      if (obj.type === "text") {
        let newText = (obj as fabric.Text).text || "";
        newText = newText.replace(/\[Couple Names\]/g, formData.coupleNames || "[Couple Names]");
        newText = newText.replace(/\[Anniversary Year\]/g, formData.anniversaryYear || "[Anniversary Year]");
        newText = newText.replace(/\[Date\]/g, formData.date || "[Date]");
        newText = newText.replace(/\[Time\]/g, formData.time || "[Time]");
        newText = newText.replace(/\[Venue\]/g, formData.venue || "[Venue]");
        newText = newText.replace(/\[Contact\]/g, formData.rsvp || "[Contact]");
        obj.set("text", newText);
      }
    });
    canvas.renderAll();
  };

  const deleteSelected = () => {
    if (selectedObject && canvas) {
      canvas.remove(selectedObject);
      canvas.renderAll();
    }
  };

  const downloadDesign = () => {
    if (!canvas) return;
    const imageSrc = canvas.toDataURL({
      multiplier: 1,
      format: "png",
      quality: 1
    });
    const a = document.createElement("a");
    a.href = imageSrc;
    a.download = `${design?.title.replace(/\s+/g, "_")}_invitation.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const obj = boundObjectsRef.current[name];
    if (obj && canvas) {
      obj.set("text", value || "");
      canvas.setActiveObject(obj);
      canvas.renderAll();

      setSelectedObject(obj);
      setTextProperties((prev) => ({
        ...prev,
        text: value || ""
      }));
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }
    if (!canvas || !design) return;

    const canvasData = canvas.toJSON();
    const designData = {
      template: design,
      formData,
      canvasData,
      preview: canvas.toDataURL()
    };

    console.log("🛒 Added to cart:", designData);
    alert("✅ Design added to cart successfully!");
    navigate("/cart");
  };

  if (!design) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Design not found</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="bg-[#f6f4ef] min-h-screen">
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-[#3e2f22]">Customize: {design.title}</h1>
          <p className="text-gray-600 mt-2">Design an elegant anniversary invitation</p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Checking login status...</p>
        ) : !user ? (
          <div className="text-center py-16">
            <p className="text-lg text-gray-700 mb-4">
              Login or signup is required to customize and add this design to the cart.
            </p>
            <Link
              to="/login"
              className="inline-block px-6 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
            >
              Login / Signup
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 px-6 pb-16">
            {/* Left: Form */}
            <div className="lg:w-1/4 bg-white rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-lg font-semibold mb-4 text-[#3e2f22]">Invitation Details</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Couple Names</label>
                  <input
                    type="text"
                    name="coupleNames"
                    value={formData.coupleNames}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="e.g., Riya & Kunal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Anniversary Year</label>
                  <input
                    type="text"
                    name="anniversaryYear"
                    value={formData.anniversaryYear}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="e.g., 25th Anniversary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Venue</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter venue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">RSVP Contact</label>
                  <input
                    type="text"
                    name="rsvp"
                    value={formData.rsvp}
                    onChange={handleFormChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter contact"
                  />
                </div>
              </div>

              {selectedObject && selectedObject.type === "text" && (
                <>
                  <hr className="my-4" />
                  <h4 className="text-md font-semibold mb-3 text-[#3e2f22]">Text Editor</h4>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Text Content</label>
                      <textarea
                        value={textProperties.text}
                        onChange={(e) => updateSelectedText("text", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-sm font-medium mb-1">Font Size</label>
                        <input
                          type="number"
                          value={textProperties.fontSize}
                          onChange={(e) => updateSelectedText("fontSize", parseInt(e.target.value))}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          min={8}
                          max={72}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Color</label>
                        <input
                          type="color"
                          value={textProperties.fill}
                          onChange={(e) => updateSelectedText("fill", e.target.value)}
                          className="w-full border border-gray-300 h-10 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Font Family</label>
                      <select
                        value={textProperties.fontFamily}
                        onChange={(e) => updateSelectedText("fontFamily", e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="serif">Serif</option>
                        <option value="sans-serif">Sans Serif</option>
                        <option value="cursive">Cursive</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="monospace">Monospace</option>
                      </select>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateSelectedText(
                            "fontWeight",
                            textProperties.fontWeight === "bold" ? "normal" : "bold"
                          )
                        }
                        className={`flex-1 px-3 py-2 border rounded-lg text-sm flex items-center justify-center gap-1 ${
                          textProperties.fontWeight === "bold"
                            ? "bg-[#5D4037] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <Bold size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          updateSelectedText(
                            "fontStyle",
                            textProperties.fontStyle === "italic" ? "normal" : "italic"
                          )
                        }
                        className={`flex-1 px-3 py-2 border rounded-lg text-sm flex items-center justify-center gap-1 ${
                          textProperties.fontStyle === "italic"
                            ? "bg-[#5D4037] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <Italic size={16} />
                      </button>
                    </div>

                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => updateSelectedText("textAlign", "left")}
                        className={`flex-1 px-2 py-2 border rounded-lg text-sm flex items-center justify-center ${
                          textProperties.textAlign === "left"
                            ? "bg-[#5D4037] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <AlignLeft size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() => updateSelectedText("textAlign", "center")}
                        className={`flex-1 px-2 py-2 border rounded-lg text-sm flex items-center justify-center ${
                          textProperties.textAlign === "center"
                            ? "bg-[#5D4037] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <AlignCenter size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() => updateSelectedText("textAlign", "right")}
                        className={`flex-1 px-2 py-2 border rounded-lg text-sm flex items-center justify-center ${
                          textProperties.textAlign === "right"
                            ? "bg-[#5D4037] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <AlignRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Center: Canvas */}
            <div className="lg:w-1/2 bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#3e2f22]">Design Canvas</h3>

                <div className="flex gap-2">
                  <button
                    onClick={addNewText}
                    className="px-3 py-2 bg-[#5D4037] text-white rounded-lg text-sm flex items-center gap-1 hover:bg-[#3e2f22] transition-all"
                  >
                    <Plus size={16} />
                    Add Text
                  </button>

                  <button
                    onClick={deleteSelected}
                    disabled={!selectedObject}
                    className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Trash2 size={16} />
                  </button>

                  <button
                    onClick={downloadDesign}
                    className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm flex items-center gap-1 hover:bg-green-700 transition-all"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <canvas ref={canvasRef} />
                </div>
              </div>
            </div>

            {/* Right: Other Templates + Upload */}
            <div className="lg:w-1/4 bg-white rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-lg font-semibold mb-4 text-[#3e2f22]">Other Templates</h3>

              <div className="space-y-4">
                {Object.entries(anniversaryDesigns).map(([templateId, template]) => (
                  <button
                    key={templateId}
                    onClick={() => setActiveTemplateId(templateId)}
                    className={`block w-full border-2 rounded-lg p-3 transition-all text-left ${
                      templateId === activeTemplateId
                        ? "border-[#5D4037] bg-[#5D4037]/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={template.image || ""}
                      alt={template.title}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <h4 className="text-sm font-medium text-center">{template.title}</h4>
                  </button>
                ))}

                <label className="mb-10 p-2 border rounded cursor-pointer border-gray-300">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          if (typeof reader.result === "string") {
                            setCustomUpload(reader.result);
                            setActiveTemplateId("upload");
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <textarea
                  name="extraNotes"
                  value={formData.extraNotes}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  rows={4}
                  placeholder="Additional notes or customization requests..."
                />

                <button
                  onClick={handleAddToCart}
                  className="w-full mt-4 px-4 py-3 bg-[#5D4037] text-white rounded-lg font-medium hover:bg-[#3e2f22] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default AnniversaryForm;
