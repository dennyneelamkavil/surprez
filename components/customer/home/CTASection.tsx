"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-secondary to-primary py-16 md:py-20 px-6 text-center relative">
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-8">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-white text-[20px] font-medium">
          <Sparkles className="w-6 h-6" />
          <span>Start Your Gifting Journey</span>
        </div>

        {/* Headline & Text */}
        <div className="space-y-4">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight">
            Ready To Surprise Someone Today?
          </h2>
          <p className="text-[#D8D8D8] text-[20px] leading-relaxed max-w-2xl mx-auto font-medium">
            Join Thousands Of Happy Customers Who Trust Surprez To Deliver Joy
            And Create Unforgettable Moments. Browse Our Collection And Find The
            Perfect Gift Today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link href="/shop">
            <Button className="bg-white text-secondary hover:bg-gray-100 font-semibold px-10 py-6 rounded-full text-[24px] shadow-lg transition-transform hover:scale-105 min-w-[200px]">
              Explore All Gifts
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-semibold px-10 py-6 rounded-full text-[24px] transition-transform hover:scale-105 min-w-[200px]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
