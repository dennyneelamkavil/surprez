"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Play, Headphones, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { montserrat } from "@/lib/fonts";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col items-start text-left">
            {/* Headlines */}
            <div className="space-y-1">
              <h1 className="text-[48px] sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight leading-none">
                EMPOWER YOUR CRAFT.
              </h1>
              <h2 className="text-[48px] sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tight leading-none">
                START SELLING ON
              </h2>
              <h2
                className={`${montserrat.className} text-[96px] sm:text-6xl md:text-7xl font-black text-primary uppercase tracking-tight leading-none`}
              >
                SURPREZ
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-[#616161] text-[16px] font-medium md:text-lg leading-relaxed max-w-lg">
              Join thousands of creators reaching gift-seekers worldwide with
              ease and security. Turn your passion into a thriving business,
              grow at your own pace, and share your creativity with people who
              truly value meaningful gifts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                onClick={() => router.push("/seller/register")}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-[20px] rounded-lg shadow-sm transition-transform hover:scale-105"
              >
                Start Selling Now &rarr;
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-semibold px-8 py-6 text-[20px] rounded-lg bg-transparent flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" /> How it works
              </Button>
            </div>

            {/* Trust Indicators / Features */}
            <div className="flex flex-col sm:flex-row gap-6 text-[16px] font-medium text-secondary/80 border-t border-[#E3E3E3] pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary/80 fill-secondary/20" />
                <span>Free onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary/80 fill-secondary/20" />
                <span>Secure payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-secondary/80 fill-secondary/20" />
                <span>24/7 Seller Support</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/seller/herosection/hero.png"
                alt="Seller empowering her craft"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
