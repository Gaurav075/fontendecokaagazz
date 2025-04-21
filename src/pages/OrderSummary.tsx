// src/pages/OrderSummary.tsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const details = JSON.parse(localStorage.getItem("checkoutDetails") || "{}");

  const totalAmount = items.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="mb-6">
        <h3 className="font-semibold">Shipping Details</h3>
        <p>{details.name}</p>
        <p>{details.email}</p>
        <p>{details.phone}</p>
        <p>{details.address}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">Items</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              {item.title} x {item.quantity} = ₹{item.quantity * item.discountedPrice}
            </li>
          ))}
        </ul>
        <p className="font-bold mt-2">Total: ₹{totalAmount.toFixed(2)}</p>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
