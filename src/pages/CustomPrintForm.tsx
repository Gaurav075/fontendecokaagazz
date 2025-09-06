import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authContext";

const CustomPrintForm = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    printType: "",
    quantity: "",
    material: "",
    size: "",
    customText: "",
    notes: "",
    file: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    console.log("🖨️ Custom Print Order:", formData);

    alert("Custom print added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen font-serif">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#3e2f22] mb-6">
            Customize Your Print
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Provide details for your personalized custom print order.
          </p>

          {loading ? (
            <p className="text-center text-gray-500">Checking login status…</p>
          ) : !user ? (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Please <span className="font-semibold">login/signup</span> to
                place an order.
              </p>
              <Link
                to="/login"
                className="inline-block px-6 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
              >
                Login / Signup
              </Link>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Print Type */}
              <div>
                <label className="block text-sm font-medium">Print Type *</label>
                <select
                  name="printType"
                  value={formData.printType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Poster">Poster</option>
                  <option value="Mug">Mug</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Banner">Banner</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium">Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="e.g., 10"
                  required
                />
              </div>

              {/* Material */}
              <div>
                <label className="block text-sm font-medium">Material (optional)</label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder='e.g., "Glossy Paper, Cotton, Ceramic"'
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium">Size (optional)</label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder='e.g., "A3, XL, 12x18 inches"'
                />
              </div>

              {/* Custom Text */}
              <div>
                <label className="block text-sm font-medium">Custom Text (optional)</label>
                <input
                  type="text"
                  name="customText"
                  value={formData.customText}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Any text you want printed"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium">Upload Design (optional)</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  name="file"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                />
                {formData.file && (
                  <p className="text-sm text-green-600 mt-1">
                    File uploaded: {formData.file.name}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium">Special Instructions (optional)</label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Any additional requests"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
              >
                Add to Cart
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomPrintForm;
