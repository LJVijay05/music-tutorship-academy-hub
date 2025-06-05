
import { Music, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const PremiumFooter = () => {
  const footerSections = [
    {
      title: "Programs",
      links: [
        { label: "Music Production Mastery", href: "/courses" },
        { label: "1-on-1 Mentorship", href: "/courses" },
        { label: "Advanced Mixing", href: "/courses" },
        { label: "Sound Design", href: "/courses" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Student Portal", href: "/login" },
        { label: "Course Materials", href: "/resources" },
        { label: "Community Forum", href: "/community" },
        { label: "Success Stories", href: "/testimonials" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Technical Support", href: "/support" },
        { label: "Billing Support", href: "/billing" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Instructors", href: "/instructors" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-light">
                  Music <span className="font-medium">Academy</span>
                </span>
              </Link>
              
              <p className="text-gray-300 font-light leading-relaxed max-w-md">
                Transforming passionate musicians into professional producers through 
                world-class mentorship and cutting-edge curriculum.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@musictutorship.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-lg font-medium text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white font-light transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-400 font-light">
                © {new Date().getFullYear()} Music Tutorship Academy. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-gray-400 font-light">
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
