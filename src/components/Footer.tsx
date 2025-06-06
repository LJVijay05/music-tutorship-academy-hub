
import { Music, Mail, Phone, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl">Music <span className="text-red-600">Tutorship</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevate your music production journey with personalized mentorship and comprehensive courses designed to unlock your creative potential.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-gray-700 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-gray-700 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-gray-700 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919514499932" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-gray-700 transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">About Me</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Courses</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 text-white">Our Courses</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Complete Music Production Mastery Course</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">One-on-One Music Production Mentorship</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400 font-medium">contact@musictutorship.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-400 font-medium">+91 9514499932</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Music Tutorship. All rights reserved. | 
            <a href="#" className="text-red-600 hover:underline ml-1 font-medium">Privacy Policy</a> | 
            <a href="#" className="text-red-600 hover:underline ml-1 font-medium">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
