"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";

export default function HotelHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Offers", href: "/offers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location", href: "/location" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0A4D68] to-[#088395] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <div className="hidden md:block">
                <h1
                  className="text-[#0A4D68] font-bold text-xl leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Hotel Red Carpet
                </h1>
                <p className="text-[#6B7280] text-xs">Port Blair, Andaman</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.slice(0, 5).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#2C2C2C] hover:text-[#0A4D68] font-medium text-sm transition-colors relative group"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              {/* More dropdown - simple for now */}
              <div className="relative group">
                <button className="text-[#2C2C2C] hover:text-[#0A4D68] font-medium text-sm transition-colors">
                  More
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {navItems.slice(5).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-[#2C2C2C] hover:bg-[#F5E6D3] hover:text-[#0A4D68] text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+913192233456"
                className="flex items-center gap-2 text-[#0A4D68] hover:text-[#088395] transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">+91 3192 233456</span>
              </a>
              <a
                href="/#booking"
                className="bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Calendar size={16} />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0A4D68]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#2C2C2C] hover:text-[#0A4D68] font-medium text-sm py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+913192233456"
                  className="flex items-center gap-2 text-[#0A4D68] py-2"
                >
                  <Phone size={18} />
                  <span className="text-sm font-medium">+91 3192 233456</span>
                </a>
                <a
                  href="/#booking"
                  className="block bg-[#D4AF37] text-white px-6 py-3 rounded-full font-semibold text-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Booking CTA - appears on scroll */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-fade-in">
          <a
            href="/#booking"
            className="bg-[#0A4D68] hover:bg-[#088395] text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <Calendar size={18} />
            Book Direct & Save 15%
          </a>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
