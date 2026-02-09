"use client";

import Image from "next/image";
import { Gift, Package, ShieldCheck, Truck } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#FFFCF6]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">
            {/* Text Header */}
            <div>
              <h2 className="text-[20px] font-bold text-[#59489C] uppercase tracking-wide mb-4">
                Why Choose Surprez
              </h2>
              <p className="text-[15px] leading-relaxed text-[#555555] text-justify">
                Surprez makes gifting effortless and meaningful with
                thoughtfully curated gifts, personalized creations from trusted
                crafters, and premium packaging that elevates every surprise.
                With fast, reliable delivery and a strong focus on quality, we
                ensure each gift arrives on time and creates a moment that truly
                matters. From birthdays and anniversaries to spontaneous "just
                because" moments, Surprez helps you express love, gratitude, and
                joy in the most beautiful way. Every detail from product
                selection to final delivery is designed to make your surprise
                feel personal, memorable, and special.
              </p>
              {/* Decorative Line (Optional based on image) */}
              <div className="w-full h-[1px] bg-gray-200 mt-6 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Curated Gifts */}
              <div className="bg-[#74BE4A] rounded-[16px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px] mb-1">
                    Curated Gifts
                  </h3>
                  <p className="text-white/90 text-[12px] leading-tight">
                    Every item is handpicked for quality and uniqueness.
                  </p>
                </div>
              </div>

              {/* Card 2: Surprise Packaging */}
              <div className="bg-[#74BE4A] rounded-[16px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px] mb-1">
                    Surprise Packaging
                  </h3>
                  <p className="text-white/90 text-[12px] leading-tight">
                    Premium packaging for a special unboxing.
                  </p>
                </div>
              </div>

              {/* Card 3: Trusted Crafters */}
              <div className="bg-[#74BE4A] rounded-[16px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px] mb-1">
                    Trusted Crafters
                  </h3>
                  <p className="text-white/90 text-[12px] leading-tight">
                    Verified sellers so you can shop with confidence.
                  </p>
                </div>
              </div>

              {/* Card 4: Fast Delivery */}
              <div className="bg-[#74BE4A] rounded-[16px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px] mb-1">
                    Fast Delivery
                  </h3>
                  <p className="text-white/90 text-[12px] leading-tight">
                    Quick delivery because surprises shouldn't wait.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end items-end h-full min-h-[400px]">
            {/* Background Purple Card */}
            <div className="absolute bottom-0 right-0 w-[90%] h-[85%] bg-[#59489C] rounded-[24px] z-0 overflow-hidden">
              {/* Optional Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)",
                }}
              />
            </div>

            {/* Person Image */}
            <div className="relative z-10 w-[80%] max-w-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1554528148-18c7d3d248b1?q=80&w=1000&auto=format&fit=crop"
                alt="Woman holding gift"
                width={400}
                height={500}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
