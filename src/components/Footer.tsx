import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center gap-1.5 font-bold text-base group transition-all duration-300 hover:scale-105">
            <div className="w-7 h-7 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-red-200 transition-all duration-300 group-hover:rotate-3">
              <Music className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-900 tracking-tight text-sm font-semibold">
              Music <span className="text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">Tutorship</span>
            </span>
          </Link>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Link to="/terms" className="text-gray-600 hover:text-red-600 text-sm">Terms of Service</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-red-600 text-sm">Privacy Policy</Link>
        </div>
      </div>
      <div className="bg-gray-100 py-3 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Music Tutorship. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
