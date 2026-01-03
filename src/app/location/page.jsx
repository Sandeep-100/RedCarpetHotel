"use client";

import { MapPin, Plane, Ship, Car, Clock, Navigation } from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function LocationPage() {
  const attractions = [
    {
      name: "Cellular Jail",
      distance: "2.5 km",
      description: "Historic colonial prison, now a national memorial",
      time: "10 min drive",
    },
    {
      name: "Corbyn's Cove Beach",
      distance: "8 km",
      description: "Beautiful beach perfect for swimming and water sports",
      time: "20 min drive",
    },
    {
      name: "Radhanagar Beach",
      distance: "45 km",
      description: "Asia's best beach with pristine white sand",
      time: "2 hours by ferry",
    },
    {
      name: "Ross Island",
      distance: "3 km",
      description: "Former British administrative headquarters",
      time: "15 min boat ride",
    },
    {
      name: "North Bay Island",
      distance: "15 km",
      description: "Popular for snorkeling and water activities",
      time: "30 min by boat",
    },
    {
      name: "Chidiya Tapu",
      distance: "28 km",
      description: "Sunset point and bird watching paradise",
      time: "1 hour drive",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
          alt="Port Blair, Andaman & Nicobar Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Location & Explore
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Perfectly located in Port Blair, gateway to the Andaman Islands
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Find Us
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#6B7280] mb-8">
              <MapPin size={20} />
              <p className="text-lg">
                Near Junglighat Beach, Port Blair, Andaman & Nicobar Islands
              </p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.19384876699!2d92.72607!3d11.66702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088945a9b0f52f7%3A0x48a89f28b4c3c93d!2sPort%20Blair%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Red Carpet Location Map"
            ></iframe>
          </div>

          {/* Address Card */}
          <div className="bg-[#F5E6D3]/30 rounded-xl p-8 md:p-12 text-center">
            <h3
              className="text-2xl font-bold text-[#0A4D68] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hotel Red Carpet
            </h3>
            <p className="text-[#2C2C2C] text-lg leading-relaxed mb-6">
              Near Junglighat Beach
              <br />
              Port Blair, Andaman & Nicobar Islands
              <br />
              744103, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+913192233456"
                className="inline-block bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                +91 3192 233456
              </a>
              <a
                href="mailto:info@hotelredcarpet.com"
                className="inline-block bg-[#0A4D68] hover:bg-[#088395] text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                info@hotelredcarpet.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              How to Reach
            </h2>
            <p className="text-[#6B7280] text-lg">
              Multiple convenient ways to get to Hotel Red Carpet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A4D68] mb-4">By Air</h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Veer Savarkar International Airport is 5 km away. Regular
                flights connect Port Blair to major Indian cities.
              </p>
              <p className="text-sm text-[#D4AF37] font-semibold">
                15 minutes drive • Airport transfer available
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ship className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A4D68] mb-4">By Sea</h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Port Blair harbor is just 2 km away. Regular ship services from
                Chennai, Kolkata, and Visakhapatnam.
              </p>
              <p className="text-sm text-[#D4AF37] font-semibold">
                10 minutes drive • Pickup service available
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0A4D68] mb-4">
                Local Transport
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Easily accessible by taxi, auto-rickshaw, or rental car. We can
                arrange transport for your convenience.
              </p>
              <p className="text-sm text-[#D4AF37] font-semibold">
                Car rental & taxi services available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Nearby Attractions
            </h2>
            <p className="text-[#6B7280] text-lg">
              Explore the beauty of Andaman from our prime location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#F5E6D3] rounded-xl p-6 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#0A4D68] flex-1">
                    {attraction.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#D4AF37] text-sm font-semibold">
                    <Navigation size={14} />
                    {attraction.distance}
                  </div>
                </div>
                <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <div className="flex items-center gap-2 text-[#6B7280] text-xs">
                  <Clock size={14} />
                  <span>{attraction.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6B7280] mb-6">
              Need help planning your itinerary? Our concierge team can assist
              with tours and transport.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0A4D68] hover:bg-[#088395] text-white px-10 py-4 rounded-full font-bold transition-colors shadow-md hover:shadow-lg"
            >
              Contact Our Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Why This Location */}
      <section className="py-16 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Our Location is Perfect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🏖️ Beach Access</h3>
              <p className="text-white/80 leading-relaxed">
                Just minutes from beautiful Junglighat Beach and other pristine
                coastal areas
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🏛️ Cultural Sites</h3>
              <p className="text-white/80 leading-relaxed">
                Close proximity to historic landmarks and cultural attractions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🍽️ Dining Options</h3>
              <p className="text-white/80 leading-relaxed">
                Surrounded by local restaurants serving authentic Andamanese
                cuisine
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">🛒 Shopping & Markets</h3>
              <p className="text-white/80 leading-relaxed">
                Easy access to local markets and shopping centers
              </p>
            </div>
          </div>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}
