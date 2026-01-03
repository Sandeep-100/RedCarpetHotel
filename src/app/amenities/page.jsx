"use client";

import {
  Waves,
  UtensilsCrossed,
  Wifi,
  Car,
  Sparkles,
  Briefcase,
  Dumbbell,
  Wind,
  Shield,
  Clock,
} from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function AmenitiesPage() {
  const amenities = [
    {
      id: "pool",
      icon: <Waves size={48} />,
      title: "Swimming Pool",
      description:
        "Relax and unwind in our pristine outdoor swimming pool surrounded by tropical gardens. Open daily from 6 AM to 10 PM with lounge chairs and towel service.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop&q=80",
      features: [
        "Outdoor Pool",
        "Pool Bar",
        "Towel Service",
        "Lounge Chairs",
        "Children's Section",
      ],
    },
    {
      id: "restaurant",
      icon: <UtensilsCrossed size={48} />,
      title: "Restaurant & Dining",
      description:
        "Savor exquisite multi-cuisine dishes at our in-house restaurant. From authentic Andamanese seafood to international favorites, our expert chefs create memorable dining experiences.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80",
      features: [
        "Multi-Cuisine Menu",
        "Room Service",
        "Breakfast Buffet",
        "Special Dietary Options",
        "Outdoor Seating",
      ],
    },
    {
      id: "wifi",
      icon: <Wifi size={48} />,
      title: "Free High-Speed Wi-Fi",
      description:
        "Stay connected with complimentary high-speed internet throughout the property. Perfect for remote work, streaming, or keeping in touch with loved ones.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&q=80",
      features: [
        "High-Speed Internet",
        "Entire Property Coverage",
        "24/7 Availability",
        "Multiple Devices",
        "Secure Connection",
      ],
    },
    {
      id: "transport",
      icon: <Car size={48} />,
      title: "Transport & Concierge",
      description:
        "Explore Andaman with ease. We offer airport transfers, car rentals, and tour arrangements. Our concierge team is available 24/7 to assist with your travel needs.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
      features: [
        "Airport Transfers",
        "Car Rental",
        "Tour Bookings",
        "24/7 Concierge",
        "Local Recommendations",
      ],
    },
    {
      id: "housekeeping",
      icon: <Sparkles size={48} />,
      title: "Laundry & Housekeeping",
      description:
        "Enjoy impeccable cleanliness with our daily housekeeping service. Express laundry and dry cleaning services available for your convenience.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
      features: [
        "Daily Housekeeping",
        "Laundry Service",
        "Dry Cleaning",
        "Express Service",
        "Turndown Service",
      ],
    },
    {
      id: "business",
      icon: <Briefcase size={48} />,
      title: "Business Facilities",
      description:
        "Conduct meetings and events seamlessly with our modern business center and conference facilities. Equipped with the latest technology and professional support.",
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&h=600&fit=crop&q=80",
      features: [
        "Conference Room",
        "Business Center",
        "Meeting Facilities",
        "Audio-Visual Equipment",
        "Printing & Scanning",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Clock size={24} />,
      title: "24-Hour Front Desk",
      description: "Always available to assist you",
    },
    {
      icon: <Shield size={24} />,
      title: "24-Hour Security",
      description: "Your safety is our priority",
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Fitness Center",
      description: "Stay active during your visit",
    },
    {
      icon: <Wind size={24} />,
      title: "Air Conditioned",
      description: "Climate control in all rooms",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet Amenities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Amenities & Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Premium Facilities
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Enjoy world-class amenities designed for your comfort and
              convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.id}
                className={`group ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`relative overflow-hidden ${index === 0 ? "h-[400px]" : "h-[300px]"}`}
                  >
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-[#D4AF37] mb-2">{amenity.icon}</div>
                      <h3
                        className="text-3xl font-bold"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {amenity.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-[#2C2C2C] leading-relaxed mb-6">
                      {amenity.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {amenity.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#F5E6D3] text-[#0A4D68] px-4 py-2 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Additional Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-[#D4AF37] flex justify-center mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-lg text-[#0A4D68] mb-2">
                  {service.title}
                </h4>
                <p className="text-[#6B7280] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white rounded-2xl p-8 md:p-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Service Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Restaurant</h3>
                <p className="text-white/80 text-sm">
                  Breakfast: 7:00 AM - 10:30 AM
                </p>
                <p className="text-white/80 text-sm">
                  Lunch: 12:00 PM - 3:00 PM
                </p>
                <p className="text-white/80 text-sm">
                  Dinner: 7:00 PM - 11:00 PM
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Swimming Pool</h3>
                <p className="text-white/80 text-sm">
                  Daily: 6:00 AM - 10:00 PM
                </p>
                <p className="text-white/80 text-sm mt-4">
                  Pool Bar: 10:00 AM - 8:00 PM
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Room Service</h3>
                <p className="text-white/80 text-sm">Available 24/7</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Concierge</h3>
                <p className="text-white/80 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experience Premium Hospitality
          </h2>
          <p className="text-xl text-[#6B7280] mb-10 leading-relaxed">
            Book your stay and enjoy all our world-class amenities
          </p>
          <a
            href="/#booking"
            className="inline-block bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Book Your Stay Now
          </a>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}
