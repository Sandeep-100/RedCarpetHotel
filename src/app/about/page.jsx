"use client";

import { Award, Heart, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: "Guest-Centric Hospitality",
      description:
        "Every decision we make is centered around creating exceptional experiences for our guests",
    },
    {
      icon: <Award size={40} />,
      title: "Excellence in Service",
      description:
        "We maintain the highest standards in every aspect of our operations",
    },
    {
      icon: <Users size={40} />,
      title: "Local Community",
      description:
        "We're committed to supporting and celebrating the local Andaman community",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Continuous Improvement",
      description:
        "We constantly evolve to exceed expectations and embrace innovation",
    },
  ];

  const reasons = [
    "Prime location near Port Blair's best beaches and attractions",
    "24/7 personalized concierge service",
    "Modern amenities with a touch of island charm",
    "Experienced and friendly multilingual staff",
    "Complimentary high-speed Wi-Fi throughout the property",
    "On-site multi-cuisine restaurant serving local and international dishes",
    "Direct booking benefits and best rate guarantee",
    "Flexible cancellation policies",
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "General Manager",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Guest Relations Manager",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Chef Arjun Patel",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet - About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              About Hotel Red Carpet
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Where luxury meets island hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Story
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-[#2C2C2C] leading-relaxed space-y-6">
            <p className="text-lg">
              Nestled in the heart of Port Blair, Hotel Red Carpet has been a
              beacon of hospitality in the Andaman & Nicobar Islands since our
              establishment. Born from a vision to create a luxurious yet
              welcoming retreat for travelers exploring these pristine islands,
              we have grown to become one of the most trusted names in Andaman
              hospitality.
            </p>
            <p className="text-lg">
              Our journey began with a simple philosophy: to provide guests with
              an experience that combines modern luxury with the warmth and
              charm of island living. Over the years, we have carefully curated
              every aspect of our hotel to reflect this vision—from our
              thoughtfully designed rooms to our attentive service and prime
              location near Port Blair's most beautiful beaches.
            </p>
            <p className="text-lg">
              What sets us apart is our deep connection to the local community
              and our commitment to sustainable tourism. We work closely with
              local artisans, source fresh ingredients from nearby markets, and
              actively support conservation efforts to preserve the natural
              beauty of the Andaman Islands for future generations.
            </p>
            <p className="text-lg">
              Today, Hotel Red Carpet stands as a testament to our dedication to
              excellence. Whether you're here for a romantic honeymoon, a family
              vacation, or a business trip, we ensure that every stay is
              memorable, comfortable, and filled with the genuine warmth that
              defines Andaman hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Core Values
            </h2>
            <p className="text-[#6B7280] text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
              >
                <div className="text-[#D4AF37] flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A4D68] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Why Choose Hotel Red Carpet?
              </h2>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                We're more than just a place to stay—we're your home away from
                home in the beautiful Andaman Islands. Here's why guests choose
                us time and time again:
              </p>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#D4AF37] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <p className="text-[#2C2C2C]">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop&q=80"
                alt="Hotel Red Carpet Facilities"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Meet Our Leadership Team
            </h2>
            <p className="text-[#6B7280] text-lg">
              Dedicated professionals committed to your comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0A4D68] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <p className="font-bold text-[#0A4D68]">TripAdvisor</p>
              <p className="text-sm text-[#6B7280]">
                Certificate of Excellence
              </p>
              <p className="text-xs text-[#D4AF37] mt-2">2023-2025</p>
            </div>
            <div className="p-6">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <p className="font-bold text-[#0A4D68]">Best Hotel</p>
              <p className="text-sm text-[#6B7280]">Port Blair</p>
              <p className="text-xs text-[#D4AF37] mt-2">2025</p>
            </div>
            <div className="p-6">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <p className="font-bold text-[#0A4D68]">Guest Choice</p>
              <p className="text-sm text-[#6B7280]">Award</p>
              <p className="text-xs text-[#D4AF37] mt-2">2024-2025</p>
            </div>
            <div className="p-6">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <p className="font-bold text-[#0A4D68]">4.8/5</p>
              <p className="text-sm text-[#6B7280]">Average Rating</p>
              <p className="text-xs text-[#D4AF37] mt-2">500+ Reviews</p>
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
            Ready to Experience Our Hospitality?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join hundreds of satisfied guests who have made Hotel Red Carpet
            their home in Andaman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#booking"
              className="bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Your Stay
            </a>
            <a
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-200"
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
