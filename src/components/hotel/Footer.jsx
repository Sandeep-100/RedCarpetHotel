import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function HotelFooter() {
  return (
    <footer className="bg-[#0A4D68] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold text-xl">RC</span>
              </div>
              <div>
                <h3
                  className="text-white font-bold text-lg leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Hotel Red Carpet
                </h3>
                <p className="text-white/70 text-xs">Premium Hospitality</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Experience luxury and comfort in the heart of Port Blair, Andaman
              & Nicobar Islands.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/rooms"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a
                  href="/amenities"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="/offers"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/location"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Location & Map
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Guest Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-bold text-lg mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#D4AF37] flex-shrink-0 mt-1"
                />
                <span className="text-white/80 text-sm leading-relaxed">
                  Near Junglighat Beach,
                  <br />
                  Port Blair, Andaman & Nicobar Islands
                  <br />
                  744103, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+913192233456"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  +91 3192 233456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:info@hotelredcarpet.com"
                  className="text-white/80 hover:text-[#D4AF37] text-sm transition-colors"
                >
                  info@hotelredcarpet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Hotel Red Carpet. All rights reserved.
            | Designed for Premium Hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}
