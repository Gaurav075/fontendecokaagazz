import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: string, delta: number) => {
    updateQuantity(id, delta);
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F3F0E6] px-6 py-12">
        <h1 className="text-4xl font-semibold text-[#3C2F2F] mb-10 text-center tracking-wide">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center space-y-6">
            <p className="text-lg text-neutral-500 italic">
              Your cart is empty.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-[#3C2F2F] hover:bg-[#2D2323] text-white py-3 px-6 rounded-full text-sm font-medium tracking-wide shadow-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 p-5 bg-white rounded-xl shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-1">
                    <h2 className="text-lg font-semibold text-[#3C2F2F]">
                      {item.title}
                    </h2>
                    <p className="text-sm text-neutral-500">₹{item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => {if(item.quantity>1) {handleQuantityChange(item.id, -1)} else{ handleRemove(item.id)}}}
                        
                        className={`w-8 h-8 rounded-full font-bold text-[#3C2F2F] ${
                          item.quantity <= 1 
                            ? "bg-gray-200" 
                            : "bg-[#ECE7DC] hover:bg-[#DCD3C2]"
                        }`}
                      >
                        −
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-8 h-8 bg-[#ECE7DC] rounded-full font-bold text-[#3C2F2F] hover:bg-[#DCD3C2]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-6 h-fit sticky top-6">
              <h2 className="text-2xl font-semibold text-[#3C2F2F]">Summary</h2>
              <div className="flex justify-between text-sm text-neutral-700">
                <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-700">
                <span>Shipping</span>
                <span className="italic text-neutral-500">
                  Calculated at checkout
                </span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold text-[#3C2F2F]">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <Link to="/order" className="mt-3">
              <button className="w-full bg-[#3C2F2F] hover:bg-[#2D2323] text-white py-3 rounded-full text-sm font-medium tracking-wide shadow-lg transition">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CartPage;