"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromoSection() {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-r from-[#CEFA7D] to-[#A1E8A8] min-h-[400px] flex items-center px-6 py-12 md:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.04]"
            style={{
              backgroundImage: "url('/customer/categories/promo/bg.jpg')",
            }}
          />

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* ================= LEFT CONTENT ================= */}
            <div className="flex-1 max-w-xl space-y-6">
              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-[12px] font-bold text-[#59489C] tracking-widest uppercase">
                  Holiday Special
                </span>
              </div>

              {/* Headlines */}
              <div className="space-y-1">
                <h1 className="text-5xl md:text-[64px] font-black text-black leading-none tracking-tight">
                  Big Fun.
                </h1>
                <h1 className="text-5xl md:text-[64px] font-black text-[#59489C] leading-none tracking-tight">
                  Big Savings.
                </h1>
              </div>

              {/* Description */}
              <p className="text-[#4A4A4A] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-md">
                Up To 40% Off On Toys This Week. Discover The Joy Of Gifting
                Today With Free Shipping On All Orders.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/offers">
                  <Button className="bg-[#59489C] hover:bg-[#483a82] text-white font-bold h-12 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                    Explore Offers <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/gift-guides">
                  <Button
                    variant="outline"
                    className="bg-white border-transparent text-black hover:bg-gray-50 font-bold h-12 px-8 rounded-full shadow-md transition-transform hover:scale-105"
                  >
                    View Gift Guides
                  </Button>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="flex-1 flex justify-center lg:justify-end items-center relative w-full max-w-md lg:max-w-none lg:pr-12">
              {/* Image Container with slight rotation */}
              <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rotate-[4deg] transition-transform hover:rotate-0 duration-500">
                <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative">
                  <Image
                    src="/customer/categories/promo/hero.jpg"
                    alt="Happy child opening gifts"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                  <Gift className="w-6 h-6 text-red-500 fill-red-100" />
                </div>

                <div className="absolute top-8 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="text-2xl">🧸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
