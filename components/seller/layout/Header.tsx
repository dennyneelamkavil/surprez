"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[18px] font-semibold text-[#5F5F5F] flex items-center gap-1 hover:text-primary transition"
    >
      {children}
      <ChevronDown className="w-4 h-4 opacity-70" />
    </a>
  );
}

export default function Header() {
  const router = useRouter();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ================= TOP GREEN BAR (ALWAYS STICKY) ================= */}
      <div className="sticky top-0 z-50 bg-primary">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <Link href="/seller" className="flex items-center">
            <Image
              src="/logos/logo_white.svg"
              alt="Surprez"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-5">
            <Button
              onClick={() => router.push("/seller/login")}
              className="text-[18px] font-semibold text-white"
            >
              Login
            </Button>

            <Button
              onClick={() => router.push("/seller/register")}
              className="bg-white text-primary text-[18px] font-semibold px-4 py-1.5 rounded-full"
            >
              Start Selling <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* ================= WHITE BAR (SCROLL CONTROLLED) ================= */}
      <div
        className={`sticky top-16 z-40 bg-white transition-transform duration-300 ease-in-out ${
          showNav ? "translate-y-0 shadow-sm" : "-translate-y-full shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-center">
          <nav className="flex items-center gap-8">
            <NavLink href="#why-sell">Why Sell?</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#categories">Categories</NavLink>
            <NavLink href="#stories">Seller Stories</NavLink>
            <NavLink href="#help">Help Center</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
