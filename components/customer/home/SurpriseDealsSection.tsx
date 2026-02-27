"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SurpriseDealsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner Container */}
        <div className="relative w-full rounded-[32px] overflow-visible min-h-[250px] flex items-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px] z-0">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#286F00_0%,#286F00_40%,#000000_62%,#0F004B_100%)]" />
            <div
              className="absolute top-[-60px] right-0 w-[300px] h-[370px] rounded-full z-0"
              style={{
                background: "#C1B4F4",
                filter: "blur(120px)",
              }}
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-0">
            {/* Left Text */}
            <div className="flex flex-col items-start gap-4 max-w-md text-center md:text-left mb-8 md:mb-0">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[16px] font-semibold tracking-wider uppercase">
                Limited Time Offer
              </span>
              <div>
                <h2 className="text-[40px] font-extrabold uppercase text-white leading-tight mb-2">
                  SURPRISE DEALS
                </h2>
                <p className="text-white text-[20px] font-semibold">
                  Up to 50% off on selected products
                </p>
              </div>
            </div>

            {/* Center Image (Surprised Person) */}
            <div className="absolute top-1/2 right-[30%] -translate-y-1/2 h-[326px] w-[345px] pointer-events-none z-10">
              <Image
                src="/customer/home/deals/surprise-deals.png"
                alt="Surprised person"
                fill
                className="object-contain grayscale scale-210"
                priority
              />
            </div>

            {/* Right Button */}
            <div className="mt-6 md:mt-0">
              <Link href="/deals">
                <Button className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-[20px] shadow-lg transition-transform hover:scale-105">
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
