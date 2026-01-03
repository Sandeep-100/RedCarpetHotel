"use client";

import {
  Heart,
  Users,
  Calendar,
  Palmtree,
  Tag,
  ChevronRight,
} from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function OffersPage() {
  const offers = [
    {
      id: "honeymoon",
      icon: <Heart size={40} />,
      title: "Honeymoon Special Package",
      discount: "20% OFF",
      validUntil: "Valid until March 31, 2026",
      description:
        "Celebrate your love with our exclusive honeymoon package. Enjoy romantic room decorations, complimentary champagne, couple spa treatment, and a candlelight dinner by the beach.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c9b7?w=1200&h=800&fit=crop&q=80",
      price: "Starting from ₹5,200/night",
      originalPrice: "₹6,500",
      includes: [
        "Room decoration with flowers and candles",
        "Complimentary bottle of champagne",
        "Couple spa treatment (60 minutes)",
        "Candlelight dinner at the beach",
        "Late checkout (subject to availability)",
        "Complimentary breakfast for two",
      ],
      terms:
        "Minimum 3 nights stay required. Valid for bookings until March 31, 2026.",
    },
    {
      id: "family",
      icon: <Users size={40} />,
      title: "Family Getaway Package",
      discount: "25% OFF",
      validUntil: "Valid until April 15, 2026",
      description:
        "Create unforgettable memories with your family. Special rates for families, kids stay free, complimentary breakfast, and access to all family-friendly activities.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop&q=80",
      price: "Starting from ₹3,600/night",
      originalPrice: "₹4,800",
      includes: [
        "25% discount on room rates",
        "Kids under 12 stay free (in parents' room)",
        "Complimentary breakfast for the entire family",
        "Welcome amenities for children",
        "Access to pool and recreational facilities",
        "Free Wi-Fi throughout property",
      ],
      terms:
        "Valid for families with at least one child under 12 years. Minimum 2 nights stay.",
    },
    {
      id: "longstay",
      icon: <Calendar size={40} />,
      title: "Long Stay Deal",
      discount: "30% OFF",
      validUntil: "Valid year-round",
      description:
        "Planning an extended vacation? Save big when you book 5 nights or more. Perfect for those who want to truly experience the beauty of Andaman Islands.",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop&q=80",
      price: "Starting from ₹2,450/night",
      originalPrice: "₹3,500",
      includes: [
        "30% discount on room rates for 5+ nights",
        "Complimentary breakfast daily",
        "Complimentary laundry (2 items per day)",
        "Free airport pickup and drop",
        "One complimentary island tour",
        "Priority room selection",
      ],
      terms:
        "Minimum 5 consecutive nights required. Cannot be combined with other offers.",
    },
    {
      id: "earlybird",
      icon: <Tag size={40} />,
      title: "Early Bird Offer",
      discount: "15% OFF",
      validUntil: "Book 30 days in advance",
      description:
        "Plan ahead and save! Book your stay at least 30 days in advance and enjoy exclusive discounts on all room categories.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&q=80",
      price: "Starting from ₹2,975/night",
      originalPrice: "₹3,500",
      includes: [
        "15% discount on all room types",
        "Complimentary breakfast",
        "Free Wi-Fi",
        "Welcome drink on arrival",
        "Flexible check-in/check-out times",
        "Priority room upgrade (subject to availability)",
      ],
      terms: "Must be booked at least 30 days before arrival. Non-refundable.",
    },
    {
      id: "weekend",
      icon: <Palmtree size={40} />,
      title: "Weekend Escape",
      discount: "18% OFF",
      validUntil: "Valid on weekends",
      description:
        "Escape the city for a refreshing weekend getaway. Special rates for Friday to Sunday stays with complimentary upgrades and late checkout.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop&q=80",
      price: "Starting from ₹2,870/night",
      originalPrice: "₹3,500",
      includes: [
        "18% discount on weekend stays",
        "Complimentary room upgrade (subject to availability)",
        "Late checkout until 2 PM",
        "Complimentary breakfast",
        "Welcome cocktail at arrival",
        "Access to all hotel facilities",
      ],
      terms: "Valid for Friday to Sunday stays. Minimum 2 nights required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet Special Offers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Special Offers & Packages
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Exclusive deals designed to make your stay even more special
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offer Banner */}
      <section className="py-8 bg-gradient-to-r from-[#D4AF37] to-[#C19B2E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <p
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            🎉 Limited Time Offer: Book Direct & Save 15%
          </p>
          <p className="text-white/90">
            Plus enjoy free cancellation and best price guarantee
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-[#D4AF37] text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                      {offer.discount}
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-[#D4AF37] mb-2">{offer.icon}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-4 py-1 bg-[#F5E6D3] text-[#0A4D68] rounded-full text-sm font-semibold mb-4">
                      {offer.validUntil}
                    </div>
                    <h2
                      className="text-4xl font-bold text-[#0A4D68] mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {offer.title}
                    </h2>
                    <p className="text-[#2C2C2C] leading-relaxed text-lg mb-6">
                      {offer.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-bold text-[#D4AF37]">
                      {offer.price}
                    </p>
                    <p className="text-lg text-[#6B7280] line-through">
                      {offer.originalPrice}
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <h3 className="font-bold text-lg text-[#0A4D68] mb-4">
                      Package Includes:
                    </h3>
                    <ul className="space-y-2">
                      {offer.includes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#2C2C2C]"
                        >
                          <ChevronRight
                            className="text-[#D4AF37] flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms */}
                  <div className="bg-[#F5E6D3]/30 p-4 rounded-lg">
                    <p className="text-xs text-[#6B7280]">
                      <strong>Terms & Conditions:</strong> {offer.terms}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="/#booking"
                    className="inline-block bg-[#0A4D68] hover:bg-[#088395] text-white px-10 py-4 rounded-full font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    Book This Offer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              How to Book
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-2">
                Choose Your Offer
              </h3>
              <p className="text-[#6B7280] text-sm">
                Select the package that best suits your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-2">
                Book Direct
              </h3>
              <p className="text-[#6B7280] text-sm">
                Use our booking form or call us to reserve
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-2">
                Enjoy Your Stay
              </h3>
              <p className="text-[#6B7280] text-sm">
                Experience luxury with your exclusive benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Questions About Our Offers?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Our team is ready to help you find the best deal for your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+913192233456"
              className="bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Call Us: +91 3192 233456
            </a>
            <a
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}
