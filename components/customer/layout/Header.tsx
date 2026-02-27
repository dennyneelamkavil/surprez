"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Header() {
  const pathname = usePathname();
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

  const navLinks = [
    { name: "Surprises", href: "/surprises" },
    { name: "Occasions", href: "/occasions" },
    { name: "Categories", href: "/categories" },
    { name: "Gift Ideas", href: "/gift-ideas" },
    { name: "Instant Delivery", href: "/instant-delivery" },
    { name: "Deals", href: "/deals" },
    { name: "Store Location", href: "/store-location" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* ================= TOP GREEN BAR ================= */}
      <div className="bg-primary text-white text-[16px] font-semibold py-2 overflow-hidden ticker-wrapper">
        <div className="whitespace-nowrap ticker flex gap-10">
          {/* Content Set 1 */}
          <div className="flex gap-10">
            <span>🎁 Thoughtful Gifting Made Simple</span>
            <span>✨ Personalized Gifts That Feel Special</span>
            <span>💝 Surprise Moments, Delivered with Love</span>
            <span>🎉 Gifts for Every Occasion</span>
            <span>🎁 Premium Packaging</span>
          </div>

          {/* Content Set 2 */}
          <div className="flex gap-10">
            <span>🎁 Thoughtful Gifting Made Simple</span>
            <span>✨ Personalized Gifts That Feel Special</span>
            <span>💝 Surprise Moments, Delivered with Love</span>
            <span>🎉 Gifts for Every Occasion</span>
            <span>🎁 Premium Packaging</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN PURPLE BAR (ALWAYS STICKY) ================= */}
      <div className="sticky top-0 z-50 bg-secondary">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between gap-8">
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
              className="w-full h-11 pl-5 pr-12 rounded-full bg-white text-black text-[16px] font-medium placeholder:text-[#979797] placeholder:text-[16px] placeholder:font-medium border-none focus-visible:ring-2 focus-visible:ring-primary"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#979797] hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 text-white">
            <button className="hover:text-primary transition-opacity cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="hover:text-primary transition-opacity cursor-pointer">
              <Bell className="w-5 h-5" />
            </button>
            <Link
              href="/login"
              className="text-[18px] text-white font-semibold hover:underline hover:text-primary transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV BAR (SCROLL CONTROLLED) ================= */}
      <div
        className={`sticky top-20 z-40 bg-secondary transition-transform duration-300 ease-in-out ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto h-12 px-6 flex items-center justify-center">
          <nav className="flex items-center gap-12 text-white text-[16px] font-medium whitespace-nowrap overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
