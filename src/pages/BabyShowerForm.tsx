import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../context/authContext";

const babyShowerThemes: Record<string, { title: string; image: string }> = {
  "1": { title: "Sweet Pastels", image: "/images/baby1.jpg" },
  "2": { title: "Floral Baby Bliss", image: "/images/baby2.jpg" },
  "3": { title: "Modern Minimal", image: "/images/baby3.jpg" },
};

const BabyShowerForm = () => {
  const { id } = useParams<{ id: string }>();
  const theme = id ? babyShowerThemes[id] : null;
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    parentsToBe: "",     // e.g., "Ananya & Rohan"
    date: "",
    time: "",
    venue: "",
    rsvp: "",
    themeColors: "",     // optional
    hostedBy: "",        // optional
    notes: "",           // optional
  });

  if (!theme) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Theme not found</p>
      </div>
    );
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleAddToCart = (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }

    // TODO: integrate with CartContext/API
    console.log("🛒 Add to Cart payload:", {
      productType: "BabyShowerInvite",
      themeId: id,
      themeTitle: theme.title,
      ...formData,
    });

    alert("Added to cart!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen font-serif">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={theme.image}
              alt={theme.title}
              className="w-48 h-48 object-cover rounded-xl shadow"
            />
            <h2 className="text-3xl font-bold text-[#3e2f22] mt-4">{theme.title}</h2>
            <p className="text-gray-600 mt-2">
              Customize your baby shower invitation with the details below.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Checking login status…</p>
          ) : !user ? (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Please <span className="font-semibold">login/signup</span> to add this theme to your cart.
              </p>
              <Link
                to="/login"
                className="inline-block px-6 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3e2f22] transition-all"
              >
                Login / Signup
              </Link>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleAddToCart}>
              <div>
                <label className="block text-sm font-medium">Parent(s)-to-be *</label>
                <input
                  type="text"
                  name="parentsToBe"
                  value={formData.parentsToBe}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder='e.g., "Ananya & Rohan"'
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Venue *</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Event address / location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">RSVP Contact *</label>
                <input
                  type="text"
                  name="rsvp"
                  value={formData.rsvp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Phone or email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Theme / Color Palette (optional)</label>
                <input
                  type="text"
                  name="themeColors"
                  value={formData.themeColors}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder='e.g., "Pastels, Clouds & Stars"'
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Hosted By (optional)</label>
                <input
                  type="text"
                  name="hostedBy"
                  value={formData.hostedBy}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Organizer’s name(s)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Special Notes (optional)</label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Dress code, parking info, surprises, etc."
                />
              </div>

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

export default BabyShowerForm;
