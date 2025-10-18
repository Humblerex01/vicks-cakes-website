"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const whatsappNumber = "09155705762"; // Replace with baker’s WhatsApp number (e.g. 2348134567890)
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const text = `Hello Vick’s Cakes! My name is ${name}. ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="bg-cream min-h-screen flex flex-col text-cocoa">
      <Navbar />

      {/* ===== CONTACT SECTION ===== */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cocoa">Get in Touch</h1>
        <p className="max-w-2xl mb-10 text-cocoa/80">
          Have a question, need a custom cake, or want to place an order?  
          Fill out the form below, and we’ll reply instantly on WhatsApp.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white/30 backdrop-blur-lg border border-cocoa/20 rounded-2xl p-8 shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 mb-4 rounded-lg border border-cocoa/20 bg-transparent placeholder-cocoa/70 text-cocoa focus:outline-none focus:ring-2 focus:ring-cocoa/30"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 mb-4 rounded-lg border border-cocoa/20 bg-transparent placeholder-cocoa/70 text-cocoa focus:outline-none focus:ring-2 focus:ring-cocoa/30"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cocoa text-cream font-semibold py-3 rounded-lg hover:bg-cocoa/90 transition"
          >
            Send Message via WhatsApp
          </button>
        </form>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}