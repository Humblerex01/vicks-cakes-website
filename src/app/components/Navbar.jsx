"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-cocoa text-white">
      {/* Logo */}
      <div className="flex items-center">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-3 py-2 shadow-md flex items-center">
          <Image
            src="/images/Vicks logo.png"
            alt="Vick's Cakes & Pastries"
            width={140}
            height={48}
            className="object-contain h-10 w-auto drop-shadow-md"
            priority
          />
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (overlay card) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.18 }}
        className={`${isOpen ? "block" : "hidden"} absolute top-20 right-4 left-4 md:hidden`}
      >
        <div className="mx-auto max-w-sm bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 text-white font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}