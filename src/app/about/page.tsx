"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import { JSX } from "react";

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cream text-cocoa pt-28 pb-12 px-6">
        {/* Top hero / heading */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-playfair mb-3">
            Meet the Baker Behind the Magic
          </h1>
          <p className="text-cocoa/85 max-w-3xl mx-auto text-justify">
            Handcrafted treats made with heart, meet Benjamin Victor, the passionate baker who turned a kitchen hobby into a joyful craft.
          </p>
        </motion.section>

        {/* Main content grid */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Baker image area (replace src with your own image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative w-full aspect-square sm:aspect-[4/5] md:aspect-[3/4] bg-[#fff8f2] rounded-2xl overflow-hidden">
            <Image
                src="/images/Victor Cake Image.jpg"
                alt="Benjamin Victor - Vick's Cakes & Pastries"
                fill
                className="object-contain md:object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />
            </div>
          </motion.div>

          {/* Bio / story */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h2 className="text-2xl md:text-3xl font-playfair">Benjamin Victor</h2>

            <p className="text-cocoa/90 leading-relaxed text-justify">
              Benjamin began baking two years ago, driven by the simple joy of turning fresh ingredients into little moments of happiness. What started as weekend experiments for friends and family quickly grew into a steady stream of orders, each one a test of creativity and care. His kitchen became a tiny studio where flavors are composed, textures perfected, and memories baked.
            </p>

            <p className="text-cocoa/90 leading-relaxed text-justify">
              Today, Benjamin brings a blend of precision and playfulness to every cake and pastry. He believes that the best desserts tell a story: of the ingredients, the hands that made them, and the celebrations they join. His signature approach focuses on premium ingredients, balanced sweetness, and elegant presentation, always with a heartfelt touch.
            </p>

            <p className="text-cocoa/90 leading-relaxed text-justify">
              Outside the oven, Benjamin loves experimenting with new flavor pairings and designing custom orders for special occasions. Whether it’s a small family treat or a big celebration, his goal remains the same: make every bite memorable.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/menu"
                className="inline-block bg-cocoa text-cream px-5 py-2 rounded-full font-medium hover:bg-chocolate transition"
              >
                Explore the Menu
              </Link>

              <Link
                href="/contact"
                className="inline-block border border-cocoa text-cocoa px-5 py-2 rounded-full font-medium hover:bg-cocoa hover:text-cream transition"
              >
                Contact for Custom Orders
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Values / quick facts */}
        <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="font-playfair text-lg mb-2">Fresh Ingredients</h3>
            <p className="text-sm text-cocoa/85">We source quality ingredients for flavor you can trust.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="font-playfair text-lg mb-2">Handcrafted</h3>
            <p className="text-sm text-cocoa/85">Each item is handmade and finished with care and attention.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="font-playfair text-lg mb-2">Custom Orders</h3>
            <p className="text-sm text-cocoa/85">Personalized cakes and event catering are available, just ask.</p>
          </motion.div>
        </section>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}