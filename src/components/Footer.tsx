import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#4c3c34' }} className="text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-display font-bold tracking-wide mb-6">
              <span className="text-kaagazz-gold">K</span>AAGAZZ
            </div>
            <p className="text-gray-300 mb-6">
              Transforming organic waste into premium eco-friendly paper products 
              while empowering communities and preserving our environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-kaagazz-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-kaagazz-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-kaagazz-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-kaagazz-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-kaagazz-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-kaagazz-gold border-b border-kaagazz-gold pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  Store
                </Link>
              </li>
              {/* <li>
                <Link to="/about" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kaagazz-gold transition-colors">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-kaagazz-gold border-b border-kaagazz-gold pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-kaagazz-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
               Delhi, India
                </span>
              </li>
              {/* <li className="flex items-center">
                <Phone size={20} className="text-kaagazz-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li> */}
              <li className="flex items-center">
                <Mail size={20} className="text-kaagazz-gold mr-2 flex-shrink-0" />
                <span className="text-gray-300">iContact@ecokaagazz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kaagazz. All Rights Reserved. PEELTO KAAGAZZ ORGANIC PAPER LLP
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-kaagazz-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-kaagazz-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
