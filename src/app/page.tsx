"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
        {/* Background video */}
        <video
          className="absolute top-20 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero-bg.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1
            className="text-5xl md:text-6xl font-playfair mb-6"
            style={{ color: "#FFF8F2" }}
          >
            Freshly Baked Happiness, Every Day 🍰
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#FFF8F2" }}
          >
            Indulge in the rich taste of handcrafted cakes and pastries made with love.
          </p>
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-cocoa font-medium px-6 py-3 rounded-full shadow-lg hover:bg-caramel transition"
            >
              Explore Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ===== FEATURED PASTRIES ===== */}
      <section className="py-20 px-8 bg-cream">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-playfair text-center mb-10 text-cocoa"
        >
          Our Favorites
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* === Chocolate Cake === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center"
          >
            <div className="relative w-full flex justify-center bg-cream py-4">
              <Image
                src="/images/IMG-20251013-WA0028.jpg"
                alt="Chocolate Cake"
                width={300}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-playfair text-xl mb-2">Chocolate Cake</h3>
              <p className="text-sm text-gray-600">
                A moist, rich chocolate delight topped with smooth frosting, pure indulgence.
              </p>
            </div>
          </motion.div>

          {/* === Vanilla Cupcake === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center"
          >
            <div className="relative w-full flex justify-center bg-cream py-4">
              <Image
                src="/images/IMG-20251013-WA0031.jpg"
                alt="Vanilla Cupcake"
                width={300}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-playfair text-xl mb-2">Vanilla Cake</h3>
              <p className="text-sm text-gray-600">
                Light and fluffy cupcakes with creamy vanilla swirls for every sweet tooth.
              </p>
            </div>
          </motion.div>

          {/* === Red Velvet === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col items-center"
          >
            <div className="relative w-full flex justify-center bg-cream py-4">
              <Image
                src="/images/IMG-20251013-WA0030.jpg"
                alt="Red Velvet"
                width={300}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-playfair text-xl mb-2">Red Velvet Cake</h3>
              <p className="text-sm text-gray-600">
                Soft, luxurious, and topped with cream cheese frosting, simply elegant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="bg-cream py-16 px-8 text-center text-cocoa">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-playfair mb-4"
        >
          Baked with Love and Tradition
        </motion.h2>
        <p className="max-w-3xl mx-auto mb-6">
          At Vick’s Cakes & Pastries, every treat is handcrafted using premium ingredients
          and a passion for perfection. Experience the taste of home in every bite.
        </p>
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-chocolate text-white px-6 py-3 rounded-full shadow-lg"
          >
            Read Our Story
          </motion.button>
        </Link>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-caramel py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-playfair mb-6"
        >
          Ready to Taste Happiness?
        </motion.h2>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-cocoa font-semibold px-8 py-3 rounded-full shadow-lg"
          >
            Order Now
          </motion.button>
        </Link>
      </section>

      <BackToTop />
      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}