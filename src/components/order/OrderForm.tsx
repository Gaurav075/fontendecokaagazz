import React, { useEffect, useState, useContext, CSSProperties } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { AuthContext } from "../../context/authContext";

const override: CSSProperties = { display: "block", margin: "0 auto" };

interface CartItem {
  id: number | string;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

const OrderForm: React.FC = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentData, setPaymentData] = useState<
    { productId: string; quantity: number; price: number }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  // Pre-fill form with user data
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullname || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        setCartItems(parsedCart);
        setPaymentData(
          parsedCart.map((item) => ({
            productId: String(item.id),
            quantity: item.quantity,
            price: item.price,
          }))
        );
      } catch (error) {
        console.error("Error parsing cart items:", error);
        localStorage.removeItem("cartItems");
      }
    }
  }, []);

  // Show loading screen while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ClipLoader color="#3C2F2F" loading={true} size={35} />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Authentication Required
          </h2>
          <p className="text-gray-600 mb-6">
            Please login to access the checkout page.
          </p>
          <div className="space-y-3">
            <Link to="/login">
              <button className="w-full bg-[#3C2F2F] hover:bg-[#2D2323] text-white py-3 rounded-full font-medium transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="w-full border border-[#3C2F2F] text-[#3C2F2F] hover:bg-[#3C2F2F] hover:text-white py-3 rounded-full font-medium transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit Indian phone number";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (!validateForm()) {
      alert("Please fix the form errors.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is empty.");
      return;
    }

    setLoading(true);

    try {
      // Load Razorpay script
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res || !(window as any).Razorpay) {
        throw new Error("Razorpay SDK failed to load");
      }
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ products: paymentData }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const orderData = await response.json();

      if (!orderData.success || !orderData.order?.id) {
        throw new Error(orderData.message || "Order creation failed");
      }

      // Rest of your existing Razorpay code...
      // Initialize Razorpay
      const rzp = new (window as any).Razorpay({
        key: "rzp_live_HKAnIKAM9R6I8j", // test ket => rzp_test_R5JkggbR5ns0eu
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "EcoKaagazz Store",
        description: "Eco-friendly Product Purchase",
        image: "/logo.png",
        order_id: orderData.order.id,

        handler: async function (response: any) {

          try {
            const token = localStorage.getItem("token");

            const verifyRes = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/payment/verify-order`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`, 
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  user: formData,
                  products: paymentData,
                  totalAmount: totalAmount,
                }),
              }
            );

            if (!verifyRes.ok) {
              throw new Error(
                `Verification HTTP error! status: ${verifyRes.status}`
              );
            }

            const verifyData = await verifyRes.json();


            if (verifyData.success) {
              alert(
                `Payment successful! Order ${verifyData.orderNumber} confirmed.`
              );

              // Clear cart and form
              localStorage.removeItem("cartItems");
              setCartItems([]);
              setPaymentData([]);
              setFormData({ name: "", address: "", email: "", phone: "" });

              // Redirect to success page
              setTimeout(() => {
                window.location.href = "/order/completed";
              }, 2000);
            } else {
              console.error("Payment verification failed:", verifyData);
              alert(`Payment verification failed: ${verifyData.message}`);
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert(
              "Payment verification error. Please contact support with your payment details."
            );
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
          total_items: cartItems.length,
          user_id: user._id,
        },
        theme: { color: "#27ae60" },
        modal: {
          ondismiss: () => {

            setLoading(false);
          },
        },
      });

      // Handle payment failures
      rzp.on("payment.failed", (resp: any) => {
        console.error("Payment failed:", resp.error);
        alert(`Payment failed: ${resp.error?.description || "Unknown error"}`);
        setLoading(false);
      });

      // Open Razorpay checkout
      rzp.open();
    } catch (err) {
      console.error("Payment initialization error:", err);
      alert(
        `Payment initialization failed: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Rest of your existing JSX remains the same...
  return (
    <section className="py-16 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Checkout
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className={`border rounded-xl px-4 py-6 bg-[#fcfcfc] focus:ring-2 focus:ring-green-500 ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {formErrors.name && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
              className={`border rounded-xl px-4 py-6 bg-[#fcfcfc] focus:ring-2 focus:ring-green-500 ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter 10-digit phone number"
            />
            {formErrors.phone && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className={`border rounded-xl px-4 py-6 bg-[#fcfcfc] focus:ring-2 focus:ring-green-500 ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Shipping Address *
            </Label>
            <Textarea
              name="address"
              value={formData.address}
              required
              onChange={handleChange}
              className={`border rounded-xl px-4 py-3 bg-[#fcfcfc] focus:ring-2 focus:ring-green-500 min-h-[100px] ${
                formErrors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your complete shipping address"
            />
            {formErrors.address && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.address}
              </span>
            )}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary ({cartItems.length} items)
            </h3>
            {cartItems.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border p-4 rounded-xl bg-gray-50"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity} × ₹{item.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 italic">Your cart is empty.</p>
                <button
                  type="button"
                  onClick={() => (window.location.href = "/products")}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    Total Amount: ₹{totalAmount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    (Inclusive of all taxes)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="button"
              onClick={displayRazorpay}
              disabled={loading || cartItems.length === 0}
              className={`relative flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 w-full max-w-md mx-auto ${
                loading || cartItems.length === 0
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 hover:shadow-xl"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader color="#fff" loading={loading} size={20} />
                  <span>Processing Payment...</span>
                </div>
              ) : (
                <>
                  <span>Place Order - ₹{totalAmount.toLocaleString()}</span>
                  <span className="text-lg">🛒</span>
                </>
              )}
            </button>

            {cartItems.length > 0 && (
              <p className="text-xs text-gray-500 mt-3">
                * By placing this order, you agree to our terms and conditions
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
