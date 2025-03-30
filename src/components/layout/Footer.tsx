
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-metal-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-oswald mb-4 text-metal-gold">CraftMasters</h3>
            <p className="mb-4 text-gray-300">
              CraftMasters Metal Fabricators specializes in custom metal fabrication, gates, fences, 
              railings, and industrial metalwork. With over 20 years of experience, we deliver 
              quality craftsmanship and innovative designs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-metal-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-metal-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-metal-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-oswald mb-4 text-metal-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-metal-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-oswald mb-4 text-metal-gold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Custom Metal Gates
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Fences & Railings
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Metal Doors & Windows
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Industrial Fabrication
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Welding Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-metal-gold transition-colors">
                  Custom Metal Furniture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-oswald mb-4 text-metal-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-metal-gold mt-0.5" />
                <p className="text-gray-300">
                  1234 Metalworks Ave.<br />
                  Craftville, CA 90210
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-metal-gold" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-metal-gold transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-metal-gold" />
                <a href="mailto:info@craftmasters.com" className="text-gray-300 hover:text-metal-gold transition-colors">
                  info@craftmasters.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-6 pt-6 mb-6">
          <div className="md:flex items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-oswald mb-2 text-metal-gold">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest updates and offers.</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="py-2 px-4 rounded-l-sm bg-gray-800 text-white border-none outline-none focus:ring-1 focus:ring-metal-gold w-full md:w-64"
              />
              <button className="bg-metal-gold text-metal-black py-2 px-4 rounded-r-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CraftMasters Metal Fabricators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
