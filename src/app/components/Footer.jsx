"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear(); // ✅ Define year before using it

  return (
    <footer className="bg-cocoa text-cream py-6 text-center text-sm mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-2">
          © {year ?? ""} Vick’s Cakes & Pastries. All rights reserved.
        </div>
        <div>
          Developed by{" "}
          <Link
            href="https://digirexcyberhub.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline hover:text-caramel transition-colors"
          >
            DigiRex Cyber Hub
          </Link>
        </div>
      </div>
    </footer>
  );
}