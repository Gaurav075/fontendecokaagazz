import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authContext";

const QuickPrintForm = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    paperSize: "",
    printSide: "",
    colorType: "",
    quantity: "",
    notes: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    console.log("⚡ Quick Print Bulk Order:", formData, file);

    alert("Bulk print order added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen font-serif">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#3e2f22] mb-6">
            Quick Print (Bulk Orders)
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Upload your file and place a bulk print order (minimum 50 copies).
          </p>

          {loading ? (
            <p className="text-center text-gray-500">Checking login status…</p>
          ) : !user ? (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Please <span className="font-semibold">login/signup</span> to place an order.
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
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium">Upload File *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full mt-2"
                  required
                />
                {file && <p className="text-sm text-gray-500 mt-1">Selected: {file.name}</p>}
              </div>

              {/* Print Options */}
              <div>
                <label className="block text-sm font-medium">Paper Size *</label>
                <select
                  name="paperSize"
                  value={formData.paperSize}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                  <option value="Letter">Letter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Print Side *</label>
                <select
                  name="printSide"
                  value={formData.printSide}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Single-Sided">Single-Sided</option>
                  <option value="Double-Sided">Double-Sided</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Color Type *</label>
                <select
                  name="colorType"
                  value={formData.colorType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Black & White">Black & White</option>
                  <option value="Color">Color</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Quantity (min. 50) *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="e.g., 100"
                  min={50}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Special Instructions (optional)</label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Any extra requests (e.g., stapling, binding)"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
              >
                Add Bulk Order to Cart
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QuickPrintForm;
