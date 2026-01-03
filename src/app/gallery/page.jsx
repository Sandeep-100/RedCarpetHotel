"use client";

import { useState } from "react";
import { X } from "lucide-react";
import HotelHeader from "../../components/hotel/Header";
import HotelFooter from "../../components/hotel/Footer";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop&q=80",
      category: "rooms",
      title: "Superior Room",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop&q=80",
      category: "rooms",
      title: "Deluxe Room",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop&q=80",
      category: "rooms",
      title: "Super Deluxe Suite",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop&q=80",
      category: "amenities",
      title: "Swimming Pool",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80",
      category: "amenities",
      title: "Restaurant",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
      category: "property",
      title: "Hotel Exterior",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&q=80",
      category: "property",
      title: "Hotel Lobby",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
      category: "rooms",
      title: "Luxury Bedroom",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      category: "surroundings",
      title: "Beach View",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
      category: "surroundings",
      title: "Tropical Paradise",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop&q=80",
      category: "surroundings",
      title: "Andaman Islands",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&fit=crop&q=80",
      category: "amenities",
      title: "Bathroom",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop&q=80",
      category: "rooms",
      title: "Modern Interior",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80",
      category: "property",
      title: "Hotel Entrance",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop&q=80",
      category: "amenities",
      title: "Lounge Area",
    },
  ];

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "property", label: "Property" },
    { id: "surroundings", label: "Surroundings" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <HotelHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&q=80"
          alt="Hotel Red Carpet Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Photo Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our beautiful property through images
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-[#F5E6D3]/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-[#D4AF37] text-white shadow-lg"
                    : "bg-white text-[#0A4D68] hover:bg-[#F5E6D3]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-lg">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experience It In Person
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Pictures don't do justice. Book your stay and experience the luxury
            yourself
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
