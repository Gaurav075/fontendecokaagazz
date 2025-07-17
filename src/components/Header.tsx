import { useState, useRef } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const { totalItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 500); // 3 seconds
  };

  return (
    <header className="py-2 px-8 md:px-16 flex justify-between items-center bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat sticky top-0 z-50 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center py-2">
          <img src="/logo.png" alt="Kaagazz Logo" className="h-8 max-w-40" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center space-x-10 relative">
        {/* Home */}
        <Link
          to="/"
          className="text-sm text-[#3d3121] hover:text-kaagazz-green transition-colors flex items-center gap-2"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>

          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Login/Signup */}
        <Link to="/login" className="text-sm text-[#3d3121] hover:text-kaagazz-green transition">
          Login / Signup
        </Link>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="lg:hidden">
        <button className="p-3" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md lg:hidden z-50 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" className="text-[#3d3121]" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/community" className="text-[#3d3121]" onClick={toggleMobileMenu}>Community</Link>
          <Link to="/sustainability" className="text-[#3d3121]" onClick={toggleMobileMenu}>Sustainability</Link>
          <Link to="/shop" className="text-[#3d3121]" onClick={toggleMobileMenu}>Store</Link>
          <Link to="/chitrayan" className="text-[#3d3121]" onClick={toggleMobileMenu}>Chitrayan</Link>
          <Link to="/cart" className="text-[#3d3121]" onClick={toggleMobileMenu}>Cart</Link>
          <Link to="/login" className="text-[#3d3121]" onClick={toggleMobileMenu}>Login / Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
