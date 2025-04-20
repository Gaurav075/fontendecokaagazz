import { Link } from "react-router-dom";
import { Home, Users, Leaf, ShoppingBag, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 px-8 md:px-16 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png.png" // 🔁 Replace this with your actual image URL
            alt="Kaagazz Logo"
            className="h-14 w-auto" // Increased height from h-8 to h-14
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-10">
        <Link to="/" className="text-lg text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Home size={28} /> {/* Enlarged icon */}
          <span>Home</span>
        </Link>
        <Link to="/community" className="text-lg text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Users size={28} />
          <span>Community</span>
        </Link>
        <Link to="/sustainability" className="text-lg text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Leaf size={28} />
          <span>Sustainability</span>
        </Link>
        <Link to="/shop" className="text-lg text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <ShoppingBag size={28} />
          <span>Store</span>
        </Link>
        <Link to="/cart" className="text-[#3d3121] hover:text-kaagazz-green">
          <ShoppingCart size={32} />
        </Link>
      </nav>
      <div className="md:hidden">
        <button className="p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
