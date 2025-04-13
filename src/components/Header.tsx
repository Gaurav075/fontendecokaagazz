
import { Link } from "react-router-dom";
import { Home, Users, Leaf, ShoppingBag, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')] border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#3d3121]">K</span>
          <span className="text-2xl font-bold text-[#91c443]">&lt;</span>
          <span className="text-2xl font-bold text-[#3d3121]">AGAZZ</span>
        </Link>
        <span className="hidden md:inline-block text-xs ml-2 text-gray-600">TRANSFORMING GREEN, NURTURING EARTH</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-1">
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link to="/community" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-1">
          <Users size={18} />
          <span>Community</span>
        </Link>
        <Link to="/sustainability" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-1">
          <Leaf size={18} />
          <span>Sustainability</span>
        </Link>
        <Link to="/shop" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-1">
          <ShoppingBag size={18} />
          <span>Store</span>
        </Link>
        <Link to="/cart" className="text-sm text-[#3d3121]">
          <ShoppingCart size={24} />
        </Link>
      </nav>
      <div className="md:hidden">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
