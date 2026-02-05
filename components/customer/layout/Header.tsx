"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Bell,
  Gift,
  Sparkles,
  Heart,
  PartyPopper,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // Logic: Hide secondary nav when scrolling down, show when scrolling up
      if (currentY > lastScrollY && currentY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ================= TOP GREEN BAR (Scrolls away naturally) ================= */}
      <div className="bg-[#74BE4A] text-white text-[12px] font-medium py-2 hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gift className="w-3.5 h-3.5 fill-current" />
            <span>Thoughtful Gifting Made Simple</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Personalized Gifts That Feel Special</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Surprise Moments. Delivered with Love</span>
          </div>
          <div className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5 fill-current" />
            <span>Gifts for Every Occasion</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-3.5 h-3.5 fill-current" />
            <span>Premium Packaging</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN PURPLE BAR (ALWAYS STICKY) ================= */}
      <div className="sticky top-0 z-50 bg-[#59489C]">
        <div className="max-w-[1400px] mx-auto h-20 px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo_white.svg" // Ensure you have the white logo here
              alt="Surprez"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <Input
              type="text"
              placeholder="Search gifts, occasions, surprises..."
              className="w-full h-11 pl-5 pr-12 rounded-full bg-white text-gray-800 placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-[#74BE4A]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#59489C] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:opacity-80 transition-opacity">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <Bell className="w-6 h-6" />
            </button>
            <Link
              href="/login"
              className="text-[16px] font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV BAR (SCROLL CONTROLLED) ================= */}
      <div
        className={`sticky top-20 z-40 bg-[#59489C] border-t border-white/10 transition-transform duration-300 ease-in-out ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-12 px-6 flex items-center justify-center">
          <nav className="flex items-center gap-8 text-white text-[14px] font-medium">
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Surprises
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Occasions
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Categories
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Gift Ideas
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Instant Delivery
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Deals
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Store Location
            </Link>
            <Link href="#" className="hover:text-[#74BE4A] transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
