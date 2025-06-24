import React, { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      const parsedCart: CartItem[] = JSON.parse(storedCart);
      setCartItems(parsedCart);
      const total = parsedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalAmount(total);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createOrder = async () => {
    try {
      const response = await fetch("https://kaagazzbackend.onrender.com/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Order creation failed", error);
      return null;
    }
  };

  const openRazorpay = async () => {
    const orderData = await createOrder();
    if (!orderData) return;

    const options = {
      key: "rzp_live_HKAnIKAM9R6I8j", // Replace with your Razorpay key_id
      amount: orderData.amount,
      currency: orderData.currency,
      name: "EcoKaagazz Store",
      description: "Product Purchase",
      image: "logo.png", // Optional logo
      order_id: orderData.orderId,
      handler: async function (response: any) {
        const verifyRes = await fetch("https://kaagazzbackend.onrender.com/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userData: formData,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          alert("Payment successful!");
          window.location.href = "/order/completed";
        } else {
          alert("Payment verification failed.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#121212",
      },
    };

    const razorpayInstance = new (window as any).Razorpay(options);
    razorpayInstance.open();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await openRazorpay();
  };

  return (
    <section className="py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Checkout</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Information */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
            />
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
            {cartItems.length > 0 ? (
              <ul className="space-y-3">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between border p-3 rounded-xl bg-gray-100">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">₹{item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">Your cart is empty.</p>
            )}
            <div className="mt-4 text-right">
              <p className="text-lg font-bold">Total: ₹{totalAmount}</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-neutral-800 transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
