import { Link, useLocation } from "react-router-dom";
import { Home, Info, ShoppingBag, Newspaper, Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navLinkClasses = (path: string) =>
    `text-sm ${
      location.pathname === path ? "text-kaagazz-green font-semibold" : "text-[#3d3121]"
    } hover:text-kaagazz-green cursor-pointer transition-colors flex items-center gap-1`;

  return (
    <header className="relative z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-cover bg-center border-b border-gray-200 bg-[url('/lovable-uploads/dbc41764-109f-4797-863d-67fa66b682f1.png')]">
      <div className="flex items-center">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="/lovable-uploads/logo.png"
            alt="Kaagazz Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className={navLinkClasses("/")}>
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link to="/about" className={navLinkClasses("/about")}>
          <Info size={18} />
          <span>About</span>
        </Link>
        <Link to="/shop" className={navLinkClasses("/shop")}>
          <ShoppingBag size={18} />
          <span>Shop</span>
        </Link>
        <Link to="/blog" className={navLinkClasses("/blog")}>
          <Newspaper size={18} />
          <span>Blog</span>
        </Link>
        <Link to="/contact" className={navLinkClasses("/contact")}>
          <Mail size={18} />
          <span>Contact</span>
        </Link>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
