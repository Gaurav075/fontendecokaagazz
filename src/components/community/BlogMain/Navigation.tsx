
import { Button } from "../../ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-amber-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          KAAGAZZ
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium ${
              location.pathname === '/' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium ${
              location.pathname === '/blog' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Blog
          </Link>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Community
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Sustainability
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600">
            Sign In
          </Button>
          <Button size="sm" className="bg-amber-700 hover:bg-amber-800 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
