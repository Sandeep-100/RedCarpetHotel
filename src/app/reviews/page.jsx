"use client";

import { useState } from "react";
import { Star, ThumbsUp, MapPin, Calendar } from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function ReviewsPage() {
  const [filter, setFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      date: "December 15, 2025",
      rating: 5,
      title: "Absolutely Wonderful Stay!",
      text: "Our experience at Hotel Red Carpet exceeded all expectations. The rooms were pristine, spacious, and beautifully decorated. The staff went above and beyond to make our honeymoon special with complimentary decorations and a surprise cake. The location is perfect for exploring Port Blair, and the in-house restaurant serves delicious food. Highly recommend!",
      helpful: 24,
      category: "Couples",
    },
    {
      id: 2,
      name: "Robert Johnson",
      location: "London, UK",
      date: "November 28, 2025",
      rating: 5,
      title: "Best Hotel in Port Blair",
      text: "After staying at multiple hotels during my Andaman trip, Hotel Red Carpet stands out as the best. The property is well-maintained, rooms are modern with all amenities, and the staff is incredibly professional and helpful. Special mention to the concierge team who helped arrange all our island tours at competitive prices. The swimming pool is a great plus. Will definitely return!",
      helpful: 18,
      category: "Solo",
    },
    {
      id: 3,
      name: "Anjali & Rahul Patel",
      location: "Ahmedabad, India",
      date: "January 2, 2026",
      rating: 5,
      title: "Perfect Honeymoon Destination",
      text: "Hotel Red Carpet made our honeymoon truly magical. The Honeymoon Special package was worth every penny - from the room decoration to the candlelight dinner on the beach. The spa treatment was relaxing, and the staff respected our privacy while being available whenever we needed help. Thank you for making our special trip unforgettable!",
      helpful: 32,
      category: "Couples",
    },
    {
      id: 4,
      name: "Deepak Kumar",
      location: "Delhi, India",
      date: "December 22, 2025",
      rating: 4,
      title: "Great Family Vacation",
      text: "We had a wonderful time with our two kids. The family package was very reasonable, and the kids loved the swimming pool. Rooms were spacious enough for our family of four. The breakfast buffet had good variety. Only minor issue was the Wi-Fi was a bit slow at times, but overall a great experience. The location near Junglighat Beach is convenient for morning walks.",
      helpful: 15,
      category: "Families",
    },
    {
      id: 5,
      name: "Sarah Williams",
      location: "Sydney, Australia",
      date: "November 10, 2025",
      rating: 5,
      title: "Exceeded Expectations",
      text: "As an international traveler, I was impressed by the quality and service at Hotel Red Carpet. The staff speaks good English, rooms are spotlessly clean, and the location is ideal for exploring Port Blair. The hotel helped arrange my entire Andaman itinerary. The restaurant food is excellent with both Indian and international options. Great value for money!",
      helpful: 21,
      category: "Solo",
    },
    {
      id: 6,
      name: "Amit & Sneha Verma",
      location: "Bangalore, India",
      date: "December 5, 2025",
      rating: 5,
      title: "Excellent Service & Hospitality",
      text: "From check-in to check-out, everything was smooth and professional. The rooms are beautifully appointed with comfortable beds and modern bathrooms. We particularly appreciated the 24/7 room service and the helpful concierge who recommended local restaurants and hidden gems in Port Blair. The Long Stay Deal made our extended vacation very affordable. Highly recommended for anyone visiting Andaman!",
      helpful: 19,
      category: "Couples",
    },
    {
      id: 7,
      name: "Michael Chen",
      location: "Singapore",
      date: "November 18, 2025",
      rating: 4,
      title: "Comfortable Business Stay",
      text: "Stayed here for a week on business. The business facilities were adequate with good Wi-Fi in the room. Staff was professional and helpful with local transport arrangements. Room was comfortable and quiet. The restaurant is convenient for quick meals. Would be nice to have a dedicated business center, but overall a solid choice for business travelers.",
      helpful: 9,
      category: "Business",
    },
    {
      id: 8,
      name: "Kavita Menon",
      location: "Chennai, India",
      date: "December 30, 2025",
      rating: 5,
      title: "Amazing New Year Celebration",
      text: "We chose Hotel Red Carpet for our New Year celebration and it was the perfect choice! The hotel organized a beautiful New Year's Eve party with live music, delicious food, and a great atmosphere. Our Super Deluxe Suite was luxurious with an amazing ocean view. The staff made us feel like VIPs. Breakfast spread was impressive. Can't wait to come back!",
      helpful: 28,
      category: "Couples",
    },
  ];

  const filters = [
    { id: "all", label: "All Reviews" },
    { id: "Couples", label: "Couples" },
    { id: "Families", label: "Families" },
    { id: "Solo", label: "Solo Travelers" },
    { id: "Business", label: "Business" },
  ];

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((review) => review.category === filter);

  const averageRating = 4.9;
  const totalReviews = 487;

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f29da8c9b7?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet Reviews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Guest Reviews
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Read what our guests are saying about their stay
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#D4AF37] mb-2">
                  {averageRating}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <p className="text-[#6B7280]">
                  Based on {totalReviews} reviews
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const percentage = stars === 5 ? 85 : stars === 4 ? 12 : 3;
                    return (
                      <div key={stars} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-24">
                          <span className="text-sm text-[#2C2C2C] font-medium">
                            {stars}
                          </span>
                          <Star
                            size={16}
                            className="fill-[#D4AF37] text-[#D4AF37]"
                          />
                        </div>
                        <div className="flex-1 bg-[#F5E6D3] rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-[#D4AF37] h-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-[#6B7280] w-12 text-right">
                          {percentage}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  filter === filterOption.id
                    ? "bg-[#D4AF37] text-white shadow-lg"
                    : "bg-[#F5E6D3] text-[#0A4D68] hover:bg-[#D4AF37]/20"
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border-2 border-[#F5E6D3] rounded-xl p-8 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A4D68] mb-2">
                    {review.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                    <span className="font-semibold text-[#2C2C2C]">
                      {review.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {review.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Calendar size={14} />
                  {review.date}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[#2C2C2C] leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F5E6D3]">
                <span className="inline-block px-4 py-1 bg-[#F5E6D3] text-[#0A4D68] rounded-full text-sm font-semibold">
                  {review.category}
                </span>
                <button className="flex items-center gap-2 text-[#6B7280] hover:text-[#D4AF37] transition-colors">
                  <ThumbsUp size={16} />
                  <span className="text-sm">Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Join Our Happy Guests
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Experience the hospitality that guests rave about
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
