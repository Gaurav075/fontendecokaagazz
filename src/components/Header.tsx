import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Leaf,
  ShoppingBag,
  ShoppingCart,
  AlbumIcon,
  ChevronDown,
  User,
  Package,
  LogOut,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
   const { user, setUser, loading } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const { totalItems } = useCart();
  
  const navigate = useNavigate()

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
    }, 500);
  };

  const handleLogout = async () => {
    try {
      const latestToken = localStorage.getItem("token"); 
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
        Authorization: `Bearer ${latestToken}`,
      },
        credentials: "include",
      });
      if (!res.ok) throw new Error("Logout failed");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  };

  return (
    <header className="py-2 px-8 md:px-16 flex justify-between items-center bg-[url('/bg3.png')] bg-cover bg-center bg-no-repeat sticky top-0 z-50 border-b border-gray-200">
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

        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 text-sm text-[#3d3121] hover:text-kaagazz-green transition">
            About <ChevronDown size={20} />
          </button>
          {hoveredMenu === "about" && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md border border-gray-200 w-44 z-50 py-2">
              <Link to="/community" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Community
              </Link>
              <Link to="/sustainability" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Sustainability
              </Link>
            </div>
          )}
        </div>

        {/* Shop Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("shop")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 text-sm text-[#3d3121] hover:text-kaagazz-green transition">
            Shop <ChevronDown size={20} />
          </button>
          {hoveredMenu === "shop" && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md border border-gray-200 w-44 z-50 py-2">
              <Link to="/shop" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Store
              </Link>
              <Link to="/chitrayan" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Chitrayan
              </Link>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative text-[#3d3121] hover:text-kaagazz-green">
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Profile/Login Section */}
        {loading ? (
          // While loading, show loading placeholder
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
        ) : user ? (
          // Profile Dropdown
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("profile")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition">
              <img
                src={user.profilePic || "/dummy-men.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
              />
              <ChevronDown size={16} className="text-[#3d3121]" />
            </button>
            
            {hoveredMenu === "profile" && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-48 z-50 py-2">
                {/* User Info */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.fullname || user.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
                
                {/* Profile Link */}
                <Link 
                  to="/profile" 
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setHoveredMenu(null)}
                >
                  <User size={16} />
                  <span>My Profile</span>
                </Link>
                
                {/* My Orders Link */}
                <Link 
                  to="/my-orders" 
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setHoveredMenu(null)}
                >
                  <Package size={16} />
                  <span>My Orders</span>
                </Link>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition w-full text-left border-t border-gray-100 mt-1"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          // Login/Signup for non-authenticated users
          <div className="flex gap-4">
            <Link
              to="/login"
              className="text-sm text-[#3d3121] hover:text-kaagazz-green transition"
            >
              Login / Signup
            </Link>
          </div>
        )}
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
          
          {user ? (
            <>
              {/* User Info in Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src={user.profilePic || "/dummy-men.png"} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium text-[#3d3121]">{user.fullname || user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                
                <Link to="/profile" className="flex items-center gap-2 text-[#3d3121] py-2" onClick={toggleMobileMenu}>
                  <User size={16} />
                  <span>My Profile</span>
                </Link>
                
                <Link to="/my-orders" className="flex items-center gap-2 text-[#3d3121] py-2" onClick={toggleMobileMenu}>
                  <Package size={16} />
                  <span>My Orders</span>
                </Link>
                
                <button 
                  onClick={() => {
                    handleLogout();
                    toggleMobileMenu();
                  }}
                  className="flex items-center gap-2 text-red-600 py-2 w-full text-left"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="text-[#3d3121]" onClick={toggleMobileMenu}>
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;