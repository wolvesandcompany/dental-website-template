import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-primary p-2 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
              </div>
              <span className="text-xl font-semibold">SmileCare</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing quality dental care for families with a focus on comfort, 
              safety, and long-term oral health.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                Our Services
              </Link>
              <Link to="/resources" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                Patient Resources
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">General Dentistry</p>
              <p className="text-sm text-gray-300">Cosmetic Dentistry</p>
              <p className="text-sm text-gray-300">Orthodontics</p>
              <p className="text-sm text-gray-300">Dental Implants</p>
              <p className="text-sm text-gray-300">Preventive Care</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">
                  123 Dental Street<br />
                  Healthcare City, HC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm text-gray-300">info@smilecare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-secondary" />
                <div className="text-sm text-gray-300">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-3PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;