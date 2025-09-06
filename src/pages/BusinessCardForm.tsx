import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authContext";

const BusinessCardForm = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Card Content
    fullName: "",
    jobTitle: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    tagline: "",

    // Print Specs
    cardType: "",
    paperType: "",
    quantity: "",
    logoFile: null as File | null,
    notes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, logoFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    // TODO: integrate with CartContext / API
    console.log("💼 Business Card Order:", formData);

    alert("Business card order added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen font-serif">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#3e2f22] mb-6">
            Customize Your Business Card
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your details and printing preferences for your professional business cards.
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Card Content */}
              <h3 className="text-xl font-semibold text-[#3e2f22]">Card Information</h3>
              <div>
                <label className="block text-sm font-medium">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Phone Number *</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Website (optional)</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address (optional)</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Tagline / Slogan (optional)</label>
                <input
                  type="text"
                  name="tagline"
                  value={formData.tagline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                />
              </div>

              {/* Print Specs */}
              <h3 className="text-xl font-semibold text-[#3e2f22] mt-8">Printing Preferences</h3>
              <div>
                <label className="block text-sm font-medium">Card Type *</label>
                <select
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                  <option value="Matte">Matte</option>
                  <option value="Glossy">Glossy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Paper Type *</label>
                <select
                  name="paperType"
                  value={formData.paperType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  required
                >
                  <option value="">Select</option>
                  <option value="300 GSM">300 GSM</option>
                  <option value="400 GSM">400 GSM</option>
                  <option value="Recycled">Recycled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Quantity *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="e.g., 100"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Upload Logo / Design (optional)</label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
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
                  placeholder="Any specific layout, color scheme, or details"
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

export default BusinessCardForm;
