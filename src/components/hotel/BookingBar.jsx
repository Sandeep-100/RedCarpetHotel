"use client";

import { useState } from "react";
import { Calendar, Users, BedDouble, Search } from "lucide-react";

export default function BookingBar({ variant = "hero" }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder for booking search
    console.log({ checkIn, checkOut, guests, rooms });
    alert("Booking search feature - connect to your booking system");
  };

  const containerClass =
    variant === "hero"
      ? "bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-8"
      : "bg-[#0A4D68]/5 border border-[#0A4D68]/10 rounded-xl p-6";

  return (
    <div className={containerClass}>
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        {/* Check-in */}
        <div className="relative">
          <label className="block text-[#2C2C2C] text-xs font-semibold mb-2 uppercase tracking-wide">
            Check-in
          </label>
          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A4D68]"
            />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
              required
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="relative">
          <label className="block text-[#2C2C2C] text-xs font-semibold mb-2 uppercase tracking-wide">
            Check-out
          </label>
          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A4D68]"
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
              required
            />
          </div>
        </div>

        {/* Guests */}
        <div className="relative">
          <label className="block text-[#2C2C2C] text-xs font-semibold mb-2 uppercase tracking-wide">
            Guests
          </label>
          <div className="relative">
            <Users
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A4D68]"
            />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm appearance-none bg-white"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>

        {/* Rooms */}
        <div className="relative">
          <label className="block text-[#2C2C2C] text-xs font-semibold mb-2 uppercase tracking-wide">
            Rooms
          </label>
          <div className="relative">
            <BedDouble
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0A4D68]"
            />
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm appearance-none bg-white"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-[#D4AF37] hover:bg-[#C19B2E] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105"
          >
            <Search size={18} />
            <span className="hidden md:inline">Search</span>
            <span className="md:hidden">Find Rooms</span>
          </button>
        </div>
      </form>

      {/* Trust badge */}
      <div className="mt-4 text-center">
        <p className="text-[#0A4D68] text-sm font-medium">
          ✨ Book Direct & Save 15% • Best Price Guarantee • Free Cancellation
        </p>
      </div>
    </div>
  );
}
