"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Banner Container */}
        <div className="w-full rounded-[32px] overflow-hidden bg-gradient-to-r from-[#59489C] to-[#569E2E] py-16 md:py-20 px-6 text-center relative">
          {/* Optional subtle noise/texture overlay could go here */}

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-8">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white text-[14px] font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Start Your Gifting Journey</span>
            </div>

            {/* Headline & Text */}
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight">
                Ready To Surprise Someone Today?
              </h2>
              <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
                Join Thousands Of Happy Customers Who Trust Surprez To Deliver
                Joy And Create Unforgettable Moments. Browse Our Collection And
                Find The Perfect Gift Today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/shop">
                <Button className="bg-white text-[#59489C] hover:bg-gray-100 font-bold px-10 py-6 rounded-full text-[16px] shadow-lg transition-transform hover:scale-105 min-w-[200px]">
                  Explore All Gifts
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-bold px-10 py-6 rounded-full text-[16px] transition-transform hover:scale-105 min-w-[200px]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
