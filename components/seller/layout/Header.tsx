"use client";

import React from "react";
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

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= TOP GREEN BAR ================= */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_white.svg"
              alt="Surprez"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <Button
              onClick={() => router.push("/seller/login")}
              className="text-[18px] font-semibold text-white"
            >
              Login
            </Button>

            <Button
              onClick={() => router.push("/seller/register")}
              className="bg-white text-primary text-[18px] font-semibold px-4 py-1.5 rounded-full hover:bg-white transition"
            >
              Start Selling <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* ================= SECOND WHITE BAR ================= */}
      <div className="bg-white">
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
    </header>
  );
}
