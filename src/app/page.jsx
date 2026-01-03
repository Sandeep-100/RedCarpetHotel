"use client";

import { useEffect, useState } from "react";
import { Star, MapPin, Wifi, Coffee, Award, ChevronRight } from "lucide-react";
import HotelHeader from "../components/hotel/Header";
import HotelFooter from "../components/hotel/Footer";
import BookingBar from "../components/hotel/BookingBar";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=1080&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const highlights = [
    {
      icon: <Star className="text-[#D4AF37]" size={32} />,
      title: "Premium Rooms",
      description: "Luxurious accommodations with modern amenities",
      link: "/rooms",
    },
    {
      icon: <Coffee className="text-[#D4AF37]" size={32} />,
      title: "Fine Dining",
      description:
        "Multi-cuisine restaurant serving local & international flavors",
      link: "/amenities",
    },
    {
      icon: <MapPin className="text-[#D4AF37]" size={32} />,
      title: "Prime Location",
      description: "Minutes away from beaches and tourist attractions",
      link: "/location",
    },
    {
      icon: <Wifi className="text-[#D4AF37]" size={32} />,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the property",
      link: "/amenities",
    },
  ];

  const featuredRooms = [
    {
      title: "Superior Room",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop&q=80",
      description:
        "Cozy and comfortable rooms perfect for solo travelers and couples",
      price: "₹3,500",
      features: ["King Bed", "City View", "25 sqm"],
    },
    {
      title: "Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop&q=80",
      description:
        "Spacious rooms with elegant interiors and premium amenities",
      price: "₹4,800",
      features: ["Queen Bed", "Garden View", "32 sqm"],
      popular: true,
    },
    {
      title: "Super Deluxe Suite",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop&q=80",
      description:
        "Luxurious suites with separate living area and premium facilities",
      price: "₹6,500",
      features: ["King Bed", "Ocean View", "45 sqm"],
    },
  ];

  const offers = [
    {
      title: "Honeymoon Special",
      description:
        "Romantic package with complimentary decorations and champagne",
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c9b7?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "Family Getaway",
      description: "Special rates for families with kids, includes breakfast",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&q=80",
    },
    {
      title: "Long Stay Deal",
      description: "Book 5 nights or more and save big on your tropical escape",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Absolutely wonderful stay! The rooms were pristine, staff was incredibly helpful, and the location is perfect for exploring Andaman.",
      date: "December 2025",
    },
    {
      name: "Robert Johnson",
      location: "London, UK",
      rating: 5,
      text: "Best hotel in Port Blair! Beautiful property, excellent service, and amazing food. Highly recommend for anyone visiting the islands.",
      date: "November 2025",
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad, India",
      rating: 5,
      text: "Our honeymoon was made extra special by the wonderful team at Hotel Red Carpet. Thank you for the beautiful experience!",
      date: "January 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hotel Red Carpet - Luxury accommodation in Port Blair ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/90 text-white text-sm font-semibold rounded-full">
                Premium Hospitality in Andaman
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Welcome to
              <br />
              Hotel Red Carpet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Experience luxury and comfort in the heart of Port Blair,
              <br className="hidden md:block" />
              Andaman & Nicobar Islands
            </p>

            {/* Booking Bar */}
            <div id="booking" className="animate-fade-in-up">
              <BookingBar variant="hero" />
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-[#F5E6D3]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold text-[#0A4D68] mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Premium Rooms
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Choose from our selection of beautifully designed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[#0A4D68] mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {room.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#F5E6D3] text-[#0A4D68] px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#6B7280] text-sm">
                        Starting from
                      </span>
                      <p className="text-2xl font-bold text-[#D4AF37]">
                        {room.price}
                        <span className="text-sm text-[#6B7280]">/night</span>
                      </p>
                    </div>
                    <a
                      href="/rooms"
                      className="bg-[#0A4D68] hover:bg-[#088395] text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/rooms"
              className="inline-flex items-center gap-2 text-[#0A4D68] hover:text-[#088395] font-semibold text-lg transition-colors group"
            >
              View All Rooms & Suites
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-[#0A4D68] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Exclusive Offers
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Book directly and enjoy special packages tailored for your perfect
              getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-4 py-2 rounded-full font-bold">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {offer.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  <a
                    href="/offers"
                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white font-semibold transition-colors group"
                  >
                    Learn More
                    <ChevronRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              What Our Guests Say
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Read reviews from our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F5E6D3]/30 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <p className="text-[#2C2C2C] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-[#0A4D68]/10 pt-4">
                  <p className="font-bold text-[#0A4D68]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/reviews"
              className="inline-flex items-center gap-2 text-[#0A4D68] hover:text-[#088395] font-semibold text-lg transition-colors group"
            >
              Read All Reviews
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-[#F5E6D3]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="text-center">
              <Award className="text-[#D4AF37] mx-auto mb-2" size={40} />
              <p className="font-bold text-[#0A4D68]">TripAdvisor</p>
              <p className="text-sm text-[#6B7280]">
                Certificate of Excellence
              </p>
            </div>
            <div className="text-center">
              <Award className="text-[#D4AF37] mx-auto mb-2" size={40} />
              <p className="font-bold text-[#0A4D68]">4.8/5 Rating</p>
              <p className="text-sm text-[#6B7280]">Google Reviews</p>
            </div>
            <div className="text-center">
              <Award className="text-[#D4AF37] mx-auto mb-2" size={40} />
              <p className="font-bold text-[#0A4D68]">Best Hotel</p>
              <p className="text-sm text-[#6B7280]">Port Blair 2025</p>
            </div>
            <div className="text-center">
              <Award className="text-[#D4AF37] mx-auto mb-2" size={40} />
              <p className="font-bold text-[#0A4D68]">500+ Happy</p>
              <p className="text-sm text-[#6B7280]">Guests This Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Book your stay directly with us and save 15% on your reservation.
            <br />
            Best rates guaranteed with free cancellation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#booking"
              className="bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Now & Save 15%
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

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}
