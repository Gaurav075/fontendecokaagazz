import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Leaf, ShoppingBag, ShoppingCart, AlbumIcon } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-2 px-8 md:px-16 flex justify-between items-center bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat relative border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center py-2">
          <img
            src="/logo.png"
            alt="Kaagazz Logo"
            className="h-8 max-w-40"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-10 ">
        <Link to="/" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Home size={17} />
          <span>Home</span>
        </Link>
        <Link to="/community" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Users size={18} />
          <span>Community</span>
        </Link>
        <Link to="/sustainability" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <Leaf size={18} />
          <span>Sustainability</span>
        </Link>
        <Link to="/shop" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <ShoppingBag size={18} />
          <span>Store</span>
        </Link>
        <Link to="/chitrayan" className="text-sm text-[#033500] font-semibold hover:text-kaagazz-green transition-colors flex items-center gap-2">
          <AlbumIcon size={18} />
          <span>Chitrayan</span>
        </Link>

        <Link to="/cart" className="text-[#3d3121] hover:text-kaagazz-green">
          <ShoppingCart size={20} />
        </Link>
      </nav>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button className="p-3" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Animated Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 text-[#3d3121]" onClick={toggleMobileMenu}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/community" className="flex items-center gap-2 text-[#3d3121]" onClick={toggleMobileMenu}>
            <Users size={18} />
            <span>Community</span>
          </Link>
          <Link to="/sustainability" className="flex items-center gap-2 text-[#3d3121]" onClick={toggleMobileMenu}>
            <Leaf size={18} />
            <span>Sustainability</span>
          </Link>
          <Link to="/shop" className="flex items-center gap-2 text-[#3d3121]" onClick={toggleMobileMenu}>
            <ShoppingBag size={18} />
            <span>Store</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-[#3d3121]" onClick={toggleMobileMenu}>
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
