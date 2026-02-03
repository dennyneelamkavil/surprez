"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground px-4 py-2 text-sm flex items-center justify-center">
        <span>Join thousands of creators selling on Surprez</span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="text-2xl font-bold text-primary">Surprez</div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#why">Why Sell?</NavLink>
          <NavLink href="#how">How It Works</NavLink>
          <NavLink href="#categories">Categories</NavLink>
          <NavLink href="#stories">Seller Stories</NavLink>
          <NavLink href="#help">Help Center</NavLink>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => router.push("/seller/login")}
            variant="ghost"
            className="text-foreground"
          >
            Login
          </Button>
          <Button
            onClick={() => router.push("/seller/register")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start Selling →
          </Button>
        </div>
      </div>
    </header>
  );
}

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
      className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group"
    >
      {children}
      <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
