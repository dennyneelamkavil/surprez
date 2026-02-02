"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Headphones } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Generate a placeholder image using placeholder service
    setImageSrc(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    );
  }, []);

  return (
    <section className="w-full bg-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground tracking-wide">
                START YOUR JOURNEY
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                EMPOWER YOUR CRAFT.
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-secondary">START SELLING ON</span>
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-primary">
                SURPREZ
              </h2>
            </div>

            <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
              Join thousands of creators reaching gift-sellers worldwide with
              ease and security. Turn your passion into a thriving business,
              grow at your own pace, and share your creativity with people who
              truly value meaningful gifts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={() => router.push("/seller/register")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full"
              >
                Start Selling Now →
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-6 text-base rounded-full bg-transparent"
              >
                ▶ How It Works
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/80">
                  Free onboarding
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/80">
                  Secure payouts
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/80">
                  24/7 Seller Support
                </span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {imageSrc && (
                <div className="relative w-80 h-80 mx-auto">
                  {/* Circle background */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 border-8 border-primary" />

                  {/* Image */}
                  <img
                    src={imageSrc || "/placeholder.svg"}
                    alt="Seller with gift"
                    className="absolute inset-0 w-full h-full rounded-full object-cover border-8 border-white"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
