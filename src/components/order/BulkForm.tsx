import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const BulkOrderForm = () => {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useContext(AuthContext);

  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(10);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`);
        const data = await res.json();
        console.log('data ' , data)
        setProduct(data?.product || null);
      } catch (err) {
        console.error("Failed to load product", err);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(10, prev + delta));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bulk-order/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productId: id,
          quantity,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("✅ Bulk order request sent successfully.");
      setFormData({ name: "", email: "", phone: "", notes: "" });
      setQuantity(10);
    } catch (err) {
      console.error("Bulk order error", err);
      setStatus("❌ Failed to send request. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#faf9f7] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-neutral-200">
        <h2 className="text-3xl font-serif font-semibold text-neutral-900 text-center mb-8 tracking-tight">
          Bulk Order
        </h2>

        {product && (
          <div className="flex gap-6 items-center mb-8">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="w-32 h-32 object-contain rounded-xl border"
            />
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">{product?.title}</h3>
              <p className="text-sm text-neutral-600">{product?.description}</p>
              <p className="text-green-600 font-semibold mt-2">₹{product.originalPrice*(1-product.discountPercent/100)}</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">
            <p>Loading...</p>
          </div>
        ) : user ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 px-3 py-2 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 px-3 py-2 rounded"
              >
                +
              </button>
            </div>
            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="border rounded-lg p-3 col-span-full"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 col-span-full"
            >
              {isSubmitting ? "Submitting..." : "Send Bulk Order Request"}
            </button>
          </form>
        ) : (
          <div className="space-y-6 text-center">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-700">
                Please login to submit bulk order requests
              </p>
            </div>
            <Link 
              to="/login" 
              className="inline-block w-full bg-[#3C2F2F] hover:bg-[#2D2323] text-white py-3 px-6 rounded-lg text-sm font-medium tracking-wide shadow-lg transition"
            >
              Login to Continue
            </Link>
            <p className="text-sm text-neutral-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#3C2F2F] hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        )}

        {status && <p className="mt-6 text-center">{status}</p>}
      </div>
    </section>
  );
};

export default BulkOrderForm;