"use client";

import { useState } from "react";
import {
  Wifi,
  Coffee,
  Wind,
  Tv,
  Shield,
  Maximize2,
  BedDouble,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";
import BookingBar from "../../components/hotel/BookingBar";

export default function RoomsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const rooms = [
    {
      id: "superior",
      title: "Superior Room",
      price: "₹3,500",
      size: "25 sqm",
      bedType: "King Bed",
      view: "City View",
      maxGuests: "2 Guests",
      description:
        "Our Superior Rooms offer a perfect blend of comfort and elegance. These well-appointed rooms feature modern amenities and tasteful décor, providing a cozy retreat after a day of exploring the beautiful Andaman Islands.",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop&q=80",
      ],
      amenities: [
        { icon: <Wifi size={20} />, label: "Free Wi-Fi" },
        { icon: <Wind size={20} />, label: "Air Conditioning" },
        { icon: <Tv size={20} />, label: "LED TV" },
        { icon: <Coffee size={20} />, label: "Tea/Coffee Maker" },
        { icon: <Shield size={20} />, label: "Safe Deposit" },
        { icon: <BedDouble size={20} />, label: "Premium Bedding" },
      ],
      features: [
        "24-hour room service",
        "Daily housekeeping",
        "Complimentary toiletries",
        "Mini refrigerator",
        "Work desk",
        "Attached bathroom with shower",
      ],
    },
    {
      id: "deluxe",
      title: "Deluxe Room",
      price: "₹4,800",
      size: "32 sqm",
      bedType: "Queen Bed",
      view: "Garden View",
      maxGuests: "3 Guests",
      popular: true,
      description:
        "Experience enhanced comfort in our spacious Deluxe Rooms. Featuring elegant interiors, a separate seating area, and stunning garden views, these rooms are perfect for couples and small families seeking a premium stay.",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop&q=80",
      ],
      amenities: [
        { icon: <Wifi size={20} />, label: "Free Wi-Fi" },
        { icon: <Wind size={20} />, label: "Air Conditioning" },
        { icon: <Tv size={20} />, label: "Smart TV" },
        { icon: <Coffee size={20} />, label: "Tea/Coffee Maker" },
        { icon: <Shield size={20} />, label: "Safe Deposit" },
        { icon: <Maximize2 size={20} />, label: "Extra Space" },
      ],
      features: [
        "24-hour room service",
        "Daily housekeeping",
        "Premium toiletries",
        "Mini bar",
        "Work desk & seating area",
        "Bathtub & shower",
        "Balcony with garden view",
      ],
    },
    {
      id: "super-deluxe",
      title: "Super Deluxe Suite",
      price: "₹6,500",
      size: "45 sqm",
      bedType: "King Bed",
      view: "Ocean View",
      maxGuests: "4 Guests",
      description:
        "Indulge in luxury with our Super Deluxe Suites. These expansive accommodations feature a separate living room, premium furnishings, and breathtaking ocean views. Perfect for families or guests seeking the ultimate in comfort and style.",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=800&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&h=800&fit=crop&q=80",
      ],
      amenities: [
        { icon: <Wifi size={20} />, label: "Free Wi-Fi" },
        { icon: <Wind size={20} />, label: "Air Conditioning" },
        { icon: <Tv size={20} />, label: "Smart TV x2" },
        { icon: <Coffee size={20} />, label: "Espresso Machine" },
        { icon: <Shield size={20} />, label: "Safe Deposit" },
        { icon: <Maximize2 size={20} />, label: "Separate Living Area" },
      ],
      features: [
        "24-hour room service",
        "Daily housekeeping",
        "Luxury toiletries",
        "Fully stocked mini bar",
        "Work desk & dining table",
        "Jacuzzi & rain shower",
        "Private balcony with ocean view",
        "Complimentary breakfast",
      ],
    },
  ];

  const nextImage = (roomId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (roomId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Rooms & Suites
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover comfort and luxury in our thoughtfully designed
              accommodations
            </p>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <section className="py-8 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BookingBar variant="inline" />
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Gallery */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  {room.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Image Carousel */}
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={room.images[currentImageIndex[room.id] || 0]}
                      alt={`${room.title} - View ${(currentImageIndex[room.id] || 0) + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => prevImage(room.id, room.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="text-[#0A4D68]" size={24} />
                    </button>
                    <button
                      onClick={() => nextImage(room.id, room.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="text-[#0A4D68]" size={24} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {room.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [room.id]: imgIndex,
                            }))
                          }
                          className={`w-2 h-2 rounded-full transition-all ${
                            (currentImageIndex[room.id] || 0) === imgIndex
                              ? "bg-white w-8"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Info Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-[#F5E6D3]/40 p-4 rounded-lg text-center">
                      <p className="text-[#0A4D68] font-bold text-lg">
                        {room.size}
                      </p>
                      <p className="text-[#6B7280] text-sm">Room Size</p>
                    </div>
                    <div className="bg-[#F5E6D3]/40 p-4 rounded-lg text-center">
                      <p className="text-[#0A4D68] font-bold text-lg">
                        {room.bedType}
                      </p>
                      <p className="text-[#6B7280] text-sm">Bed Type</p>
                    </div>
                    <div className="bg-[#F5E6D3]/40 p-4 rounded-lg text-center">
                      <p className="text-[#0A4D68] font-bold text-lg">
                        {room.maxGuests}
                      </p>
                      <p className="text-[#6B7280] text-sm">Capacity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Details */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="space-y-6">
                  <div>
                    <h2
                      className="text-4xl font-bold text-[#0A4D68] mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {room.title}
                    </h2>
                    <div className="flex items-center gap-4 text-[#6B7280] mb-4">
                      <span className="flex items-center gap-1">
                        <Maximize2 size={16} />
                        {room.size}
                      </span>
                      <span>•</span>
                      <span>{room.view}</span>
                    </div>
                  </div>

                  <p className="text-[#2C2C2C] leading-relaxed text-lg">
                    {room.description}
                  </p>

                  {/* Amenities Grid */}
                  <div>
                    <h3 className="font-bold text-lg text-[#0A4D68] mb-4">
                      Room Amenities
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {room.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-[#2C2C2C]"
                        >
                          <div className="text-[#D4AF37]">{amenity.icon}</div>
                          <span className="text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="font-bold text-lg text-[#0A4D68] mb-4">
                      Additional Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {room.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[#2C2C2C] text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="bg-[#F5E6D3]/30 p-6 rounded-xl">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-[#6B7280] text-sm mb-1">
                          Starting from
                        </p>
                        <p className="text-4xl font-bold text-[#D4AF37]">
                          {room.price}
                          <span className="text-lg text-[#6B7280]">/night</span>
                        </p>
                      </div>
                      <div className="text-right text-sm text-[#6B7280]">
                        + taxes & fees
                      </div>
                    </div>
                    <a
                      href="/#booking"
                      className="block bg-[#0A4D68] hover:bg-[#088395] text-white text-center px-8 py-4 rounded-full font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                    >
                      Book This Room
                    </a>
                    <p className="text-center text-[#6B7280] text-sm mt-3">
                      ✨ Book Direct & Save 15% • Free Cancellation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Compare Our Rooms
            </h2>
            <p className="text-[#6B7280] text-lg">
              Find the perfect room for your stay
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#0A4D68] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {rooms.map((room) => (
                    <th
                      key={room.id}
                      className="px-6 py-4 text-center font-semibold"
                    >
                      {room.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2C2C2C]">
                    Price per night
                  </td>
                  {rooms.map((room) => (
                    <td
                      key={room.id}
                      className="px-6 py-4 text-center text-[#D4AF37] font-bold"
                    >
                      {room.price}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#F5E6D3]/20">
                  <td className="px-6 py-4 font-medium text-[#2C2C2C]">
                    Room Size
                  </td>
                  {rooms.map((room) => (
                    <td
                      key={room.id}
                      className="px-6 py-4 text-center text-[#6B7280]"
                    >
                      {room.size}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2C2C2C]">
                    Bed Type
                  </td>
                  {rooms.map((room) => (
                    <td
                      key={room.id}
                      className="px-6 py-4 text-center text-[#6B7280]"
                    >
                      {room.bedType}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#F5E6D3]/20">
                  <td className="px-6 py-4 font-medium text-[#2C2C2C]">View</td>
                  {rooms.map((room) => (
                    <td
                      key={room.id}
                      className="px-6 py-4 text-center text-[#6B7280]"
                    >
                      {room.view}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-[#2C2C2C]">
                    Max Guests
                  </td>
                  {rooms.map((room) => (
                    <td
                      key={room.id}
                      className="px-6 py-4 text-center text-[#6B7280]"
                    >
                      {room.maxGuests}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Need Help Choosing?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Our team is here to help you find the perfect room for your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+913192233456"
              className="bg-white text-[#0A4D68] px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105"
            >
              Call Us Now
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
