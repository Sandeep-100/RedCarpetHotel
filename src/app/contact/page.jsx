"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
          alt="Contact Hotel Red Carpet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We're here to help with any questions or booking inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">Address</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Near Junglighat Beach,
                <br />
                Port Blair, Andaman & Nicobar Islands
                <br />
                744103, India
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">Phone</h3>
              <a
                href="tel:+913192233456"
                className="text-[#6B7280] hover:text-[#D4AF37] transition-colors block mb-2"
              >
                +91 3192 233456
              </a>
              <a
                href="tel:+919876543210"
                className="text-[#6B7280] hover:text-[#D4AF37] transition-colors block"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">Email</h3>
              <a
                href="mailto:info@hotelredcarpet.com"
                className="text-[#6B7280] hover:text-[#D4AF37] transition-colors block mb-2"
              >
                info@hotelredcarpet.com
              </a>
              <a
                href="mailto:bookings@hotelredcarpet.com"
                className="text-[#6B7280] hover:text-[#D4AF37] transition-colors block"
              >
                bookings@hotelredcarpet.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">
                Front Desk
              </h3>
              <p className="text-[#6B7280] text-sm">
                Open 24/7
                <br />
                Check-in: 2:00 PM
                <br />
                Check-out: 11:00 AM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2
                  className="text-4xl font-bold text-[#0A4D68] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-[#6B7280] text-lg">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#2C2C2C] font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#2C2C2C] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2C2C2C] font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2C2C2C] font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="rooms">Room Information</option>
                    <option value="offers">Special Offers</option>
                    <option value="events">Events & Conferences</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#2C2C2C] font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-[#F5E6D3] rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#D4AF37] hover:bg-[#C19B2E] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div>
              <div className="mb-8">
                <h2
                  className="text-4xl font-bold text-[#0A4D68] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Find Us
                </h2>
                <p className="text-[#6B7280] text-lg">
                  Located in the heart of Port Blair, near Junglighat Beach
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.19384876699!2d92.72607!3d11.66702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088945a9b0f52f7%3A0x48a89f28b4c3c93d!2sPort%20Blair%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Red Carpet Location"
                ></iframe>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <a
                  href="tel:+913192233456"
                  className="bg-[#0A4D68] hover:bg-[#088395] text-white px-6 py-4 rounded-full font-bold text-center transition-colors shadow-md hover:shadow-lg"
                >
                  📞 Call Us Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-full font-bold text-center transition-colors shadow-md hover:shadow-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F5E6D3]/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[#0A4D68] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Quick Answers
            </h2>
            <p className="text-[#6B7280] text-lg">
              Common questions we receive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">
                What are your check-in/check-out times?
              </h3>
              <p className="text-[#6B7280] text-sm">
                Check-in is at 2:00 PM and check-out is at 11:00 AM. Early
                check-in and late checkout may be available upon request.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">
                Do you provide airport transfers?
              </h3>
              <p className="text-[#6B7280] text-sm">
                Yes, we offer airport pickup and drop services. Please contact
                us in advance to arrange.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">
                Is breakfast included?
              </h3>
              <p className="text-[#6B7280] text-sm">
                Breakfast is included in select packages. Please check your
                booking details or contact us for information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-[#0A4D68] mb-3">
                What is your cancellation policy?
              </h3>
              <p className="text-[#6B7280] text-sm">
                Free cancellation up to 48 hours before check-in for most
                bookings. Terms vary by rate plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HotelFooter />
    </div>
  );
}
