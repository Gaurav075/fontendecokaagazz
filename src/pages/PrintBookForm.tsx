import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authContext";

const PrintBookForm = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookType: "",
    size: "",
    pages: "",
    coverType: "",
    customTitle: "",
    notes: "",
    file: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, file }));
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

    if (!formData.file) {
      alert("Please upload your book file before proceeding.");
      return;
    }

    // TODO: integrate with CartContext / API
    console.log("📖 Print Book Order:", formData);

    alert("Book added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen font-serif">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#3e2f22] mb-6">
            Customize Your Print Book
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Provide the details and upload your book file for printing.
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
              {/* Book Type */}
              <div>
                <label className="block text-sm font-medium">Book Type *</label>
                <select
                  name="bookType"
                  value={formData.bookType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Photo Album">Photo Album</option>
                  <option value="Travel Journal">Travel Journal</option>
                  <option value="Story Book">Story Book</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium">Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                  <option value="Square">Square</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Number of Pages */}
              <div>
                <label className="block text-sm font-medium">Number of Pages *</label>
                <input
                  type="number"
                  name="pages"
                  value={formData.pages}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="e.g., 50"
                  required
                />
              </div>

              {/* Cover Type */}
              <div>
                <label className="block text-sm font-medium">Cover Type *</label>
                <select
                  name="coverType"
                  value={formData.coverType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Hardcover">Hardcover</option>
                  <option value="Softcover">Softcover</option>
                </select>
              </div>

              {/* Custom Title */}
              <div>
                <label className="block text-sm font-medium">Custom Title (optional)</label>
                <input
                  type="text"
                  name="customTitle"
                  value={formData.customTitle}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder='e.g., "Our Wedding Story"'
                />
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

              {/* Upload Book */}
              <div>
                <label className="block text-sm font-medium">Upload Book File *</label>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX
                </p>
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

export default PrintBookForm;
