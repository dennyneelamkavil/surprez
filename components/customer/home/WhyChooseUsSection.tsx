"use client";

import Image from "next/image";
import { Gift, Package, ShieldCheck, Truck } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#FFF89C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-0 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 col-span-1 lg:col-span-4">
            {/* Text Header */}
            <div>
              <h2 className="text-[24px] font-bold text-secondary uppercase tracking-wide mb-4">
                Why Choose Surprez
              </h2>
              <p className="text-[20px] font-medium leading-relaxed text-[#9B9B9B] text-justify">
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
              <div className="bg-primary rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-2.5 rounded-lg flex-shrink-0">
                  <Gift className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    Curated Gifts
                  </h3>
                  <p className="text-[#F1F1F1] text-[16px] font-semibold leading-tight">
                    Every item is handpicked for quality and uniqueness.
                  </p>
                </div>
              </div>

              {/* Card 2: Surprise Packaging */}
              <div className="bg-primary rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-2.5 rounded-lg flex-shrink-0">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    Surprise Packaging
                  </h3>
                  <p className="text-[#F1F1F1] text-[16px] font-semibold leading-tight">
                    Premium packaging for a special unboxing.
                  </p>
                </div>
              </div>

              {/* Card 3: Trusted Crafters */}
              <div className="bg-primary rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-2.5 rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    Trusted Crafters
                  </h3>
                  <p className="text-[#F1F1F1] text-[16px] font-semibold leading-tight">
                    Verified sellers so you can shop with confidence.
                  </p>
                </div>
              </div>

              {/* Card 4: Fast Delivery */}
              <div className="bg-primary rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-white p-2.5 rounded-lg flex-shrink-0">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    Fast Delivery
                  </h3>
                  <p className="text-[#F1F1F1] text-[16px] font-semibold leading-tight">
                    Quick delivery because surprises shouldn't wait.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end items-end h-full min-h-[400px] col-span-1 lg:col-span-3 overflow-visible">
            {/* Background Purple Card */}
            <div className="absolute bottom-0 right-0 w-[90%] h-[85%] bg-secondary rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] z-0 overflow-hidden">
              <Image
                src="/bg/surprez.png"
                alt="background pattern"
                width={512}
                height={341}
                className="absolute top-[-17px] left-[-50px] w-[712px] h-[541px] scale-[1.6] -rotate-[22.64deg] opacity-[0.04] mix-blend-difference pointer-events-none select-none"
              />
            </div>

            {/* Person Image */}
            <div className="relative z-10 w-[100%] max-w-[400px] bottom-20 right-10">
              <Image
                src="/customer/why/why.png"
                alt="Woman holding gift"
                width={400}
                height={500}
                className="object-contain drop-shadow-xl scale-130"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
