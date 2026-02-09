"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SurpriseDealsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Banner Container */}
        <div className="relative w-full rounded-[32px] overflow-hidden min-h-[300px] md:min-h-[360px] flex items-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F7505] via-[#000000] to-[#7B61FF] z-0" />

          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-0">
            {/* Left Text */}
            <div className="flex flex-col items-start gap-4 max-w-md text-center md:text-left mb-8 md:mb-0">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase">
                Limited Time Offer
              </span>
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                  SURPRISE DEALS
                </h2>
                <p className="text-white/90 text-lg font-medium">
                  Up to 50% off on selected products
                </p>
              </div>
            </div>

            {/* Center Image (Surprised Person) */}
            {/* Positioned absolutely on larger screens to sit in the middle-bottom */}
            <div className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-[280px] md:w-[400px] h-[300px] md:h-[400px] flex items-end justify-center pointer-events-none mt-4 md:mt-0">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop"
                  alt="Surprised Person"
                  fill
                  className="object-contain object-bottom grayscale" // Grayscale per design
                />
              </div>
            </div>

            {/* Right Button */}
            <div className="mt-6 md:mt-0">
              <Link href="/deals">
                <Button className="bg-white text-[#59489C] hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-[16px] shadow-lg transition-transform hover:scale-105">
                  Send a Surprise
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
