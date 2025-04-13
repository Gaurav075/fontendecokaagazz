
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[url('/lovable-uploads/9b1f0549-6913-4891-a1c3-b844f0074cda.png')] py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-center text-sm mb-4">
            Copyright © {new Date().getFullYear()} KAAGAZZ - All Rights Reserved.
          </p>
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase">PEELTO KAAGAZZ</h3>
            <h3 className="text-sm font-bold uppercase">ORGANIC PAPER</h3>
            <h3 className="text-sm font-bold uppercase">LLP</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;