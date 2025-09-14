import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../context/authContext";

const marriageDesigns: Record<string, { title: string; image: string }> = {
  "1": {
    title: "Classic Minimalist",
    image: "/images/marriage1.jpg",
  },
  "2": {
    title: "Floral Harmony",
    image: "/images/marriage2.jpg",
  },
  "3": {
    title: "Rustic Charm",
    image: "/images/marriage3.jpg",
  },
};

const MarriageForm = () => {
  const { id } = useParams<{ id: string }>();
  const design = id ? marriageDesigns[id] : null;

  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    date: "",
    time: "",
    venue: "",
    rsvp: "",
    extraNotes: "",
  });

  if (!design) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Design not found</p>
      </div>
    );
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    // TODO: replace with CartContext / API call
    console.log("🛒 Added to cart:", { design, formData });
    alert("✅ Design added to cart successfully!");
    navigate("/cart");
  };

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-16 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={design.image}
              alt={design.title}
              className="w-48 h-48 object-cover rounded-xl shadow"
            />
            <h2 className="text-3xl font-bold text-[#3e2f22] mt-4">
              {design.title}
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in the wedding details to customize this design.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Checking login status...</p>
          ) : !user ? (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                You need to <span className="font-semibold">login/signup</span>{" "}
                to customize and add this design to your cart.
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
                <label className="block text-sm font-medium">Bride’s Name</label>
                <input
                  type="text"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter bride’s name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Groom’s Name</label>
                <input
                  type="text"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter groom’s name"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Date</label>
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
                  <label className="block text-sm font-medium">Time</label>
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
                <label className="block text-sm font-medium">Venue</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter venue details"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">RSVP Contact</label>
                <input
                  type="text"
                  name="rsvp"
                  value={formData.rsvp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter RSVP contact"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Extra Notes / Customization
                </label>
                <textarea
                  rows={4}
                  name="extraNotes"
                  value={formData.extraNotes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter additional details or requests"
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

export default MarriageForm;
