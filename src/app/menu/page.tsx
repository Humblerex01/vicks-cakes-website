"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Menu() {
  const whatsappNumber = "09155705762"; // Replace with the baker’s WhatsApp number

  const products = [
    {
      name: "Chocolate Cake",
      image: "/images/IMG-20251013-WA0028.jpg",
      description: "Rich and moist chocolate delight topped with creamy frosting.",
    },
    {
      name: "Vanilla Cake",
      image: "/images/IMG-20251013-WA0031.jpg",
      description: "Soft, fluffy cupcakes with smooth vanilla icing swirls.",
    },
    {
      name: "Red Velvet Cake",
      image: "/images/IMG-20251013-WA0030.jpg",
      description: "Luxurious red velvet cake with signature cream cheese frosting.",
    },
  {
    name: "Coconut Cream Cake",
    image: "/images/IMG-20251013-WA0027.jpg",
    description: "Tender layers infused with coconut milk and covered in creamy coconut frosting, tropical delight on a plate.",
  },
  {
    name: "Carrot Spice Cake",
    image: "/images/IMG-20250810-WA0021.jpg",
    description: "Moist carrot layers with a hint of cinnamon, nutmeg, and cream cheese frosting, comforting and wholesome.",
  },
  {
    name: "Lemon Zest Cake",
    image: "/images/IMG-20250901-WA0131.jpg",
    description: "Refreshingly tangy with a bright citrus aroma, a perfect treat for sunny moods.",
  },
  {
    name: "Cream Cake",
    image: "/images/IMG-20250901-WA0132.jpg",
    description: "Chocolate sponge filled with crushed Oreos and whipped cream, a crowd favorite for all ages.",
  },
  {
    name: "Strawberry Delight Cake",
    image: "/images/IMG-20251013-WA0029.jpg",
    description: "Soft vanilla sponge layered with fresh strawberries and whipped cream, light, fruity, and romantic.",
  },
  {
    name: "Coffee Mocha Cake",
    image: "/images/IMG-20250901-WA0133.jpg",
    description: "A perfect blend of espresso and cocoa, topped with mocha frosting, for the true coffee lover.",
  },
  {
    name: "Marble Swirl Cake",
    image: "/images/IMG-20250901-WA0139.jpg",
    description: "A delightful mix of vanilla and chocolate swirls baked to perfection, a visual and flavorful treat.",
  },
  {
  name: "Chocolate Dream Cake",
  image: "/images/IMG-20250901-WA0137.jpg",
  description: "Rich, moist chocolate layers with creamy ganache frosting, every slice is pure indulgence.",
},
{
  name: "Coconut Cream Cake",
  image: "/images/IMG-20250901-WA0135.jpg",
  description: "A tropical treat made with soft coconut sponge and whipped coconut frosting.",
},
{
  name: "Birthday Sprinkle Cake",
  image: "/images/IMG-20250901-WA0138.jpg",
  description: "Vibrant vanilla layers filled with rainbow sprinkles and buttercream, perfect for celebrations.",
},
{
  name: "Deluxe Party Food Tray",
  image: "/images/IMG-20250901-WA0134.jpg",
  description: "A mix of small chops, grilled chicken, samosa, and puff-puff, perfect for parties and events.",
},
{
  name: "Royal Money Bouquet",
  image: "/images/IMG-20250920-WA0003.jpg",
  description: "Elegant arrangement of cash notes and roses, a creative gift that leaves a lasting impression.",
},
];

  const handleOrder = (productName: string) => {
    const text = `Hello Vick’s Cakes! I’d like to order your ${productName}.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-cream text-cocoa min-h-screen flex flex-col">
      <Navbar />

      {/* ===== MENU HEADER ===== */}
      <header className="pt-32 pb-10 text-center px-6">
        <h1 className="text-5xl font-playfair font-bold mb-4">Our Menu</h1>
        <p className="text-cocoa/80 max-w-2xl mx-auto">
          Discover our delicious selection of cakes, pastries, and snacks, freshly baked to perfection.
        </p>
      </header>

      {/* ===== MENU GRID ===== */}
      <main className="flex-grow px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-64 flex items-center justify-center bg-cream">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-playfair mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <button
                  onClick={() => handleOrder(product.name)}
                  className="bg-cocoa text-cream px-5 py-2 rounded-full hover:bg-cocoa/90 transition"
                >
                  Order on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}