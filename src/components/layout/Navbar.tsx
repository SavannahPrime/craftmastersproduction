
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-metal-black text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+15551234567" className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:info@craftmasters.com" className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@craftmasters.com</span>
            </a>
          </div>
          <div className="text-sm">
            <p>Mon-Fri: 8am-6pm | Sat: 9am-2pm</p>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container-custom flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-oswald font-bold">
            <span className="text-metal-black">CRAFT</span>
            <span className="text-metal-gold">MASTERS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              Shop
            </Link>
            <Link to="/services" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-metal-black hover:text-metal-gold font-medium transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-metal-gold text-metal-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button variant="default" className="hidden md:inline-flex bg-metal-gold text-metal-black hover:bg-metal-gold/90">
              Request a Quote
            </Button>
            <button className="md:hidden" onClick={toggleMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white animate-slide-in">
            <div className="container-custom py-4 space-y-3 flex flex-col">
              <Link to="/" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/shop" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                Shop
              </Link>
              <Link to="/services" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/portfolio" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                Portfolio
              </Link>
              <Link to="/about" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-metal-black hover:text-metal-gold font-medium py-2 border-b"
                onClick={toggleMenu}>
                Contact
              </Link>
              <Button className="bg-metal-gold text-metal-black hover:bg-metal-gold/90 w-full mt-4">
                Request a Quote
              </Button>
              <div className="flex flex-col space-y-2 mt-4">
                <a href="tel:+15551234567" className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(555) 123-4567</span>
                </a>
                <a href="mailto:info@craftmasters.com" className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@craftmasters.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
