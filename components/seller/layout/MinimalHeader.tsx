"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MinimalHeader() {
  return (
    <header className="w-full sticky top-0 z-50 bg-primary border-b border-transparent">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/seller"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logos/logo_white.svg"
            alt="Surprez"
            width={100}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-6 font-semibold text-[16px] text-white">
          <Link href="/help" className="hover:opacity-80 transition-opacity">
            Help
          </Link>
          <Link href="/support" className="hover:opacity-80 transition-opacity">
            Contact Support
          </Link>

          <Link href="/seller/login">
            <Button className="bg-white hover:bg-white/90 text-primary px-6 h-9 rounded-full shadow-sm transition-colors">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
