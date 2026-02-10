"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/lib/fonts";

export default function HeroGridSection() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-5">
        {/* ================= TOP ROW (2:1 Split) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 h-auto lg:h-[406px]">
          {/* Card 1: Large Green (Thoughtful Gifting) */}
          <div className="lg:col-span-4 bg-primary rounded-[32px] relative overflow-hidden flex flex-col justify-center px-8 md:px-12 py-10 min-h-[350px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.04]"
              style={{
                backgroundImage: "url('/customer/herogrid/green-bg.png')",
              }}
            />
            <div className="relative z-10 max-w-md">
              <h1 className="text-[32px] font-bold text-white leading-[1.1] mb-4 uppercase">
                Thoughtful Gifting,
                <br />
                <span
                  className={`${montserrat.className} text-[48px] font-extrabold`}
                >
                  {" "}
                  Made Simple
                </span>
              </h1>
              <p className="text-[#F2F2F2] text-[20px] font-medium mb-8 max-w-sm leading-relaxed">
                Turn Simple Moments Into Lasting Memories With Thoughtful Gifts
                Delivered Right On Time.
              </p>
              <Button className="bg-black text-white hover:bg-black rounded-full px-8 py-6 text-[20px] font-semibold transition-transform hover:scale-105">
                Explore Surprises <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Image (Woman holding gift) */}
            <div className="absolute bottom-0 right-0 h-[100%] w-[50%] pointer-events-none">
              <Image
                src="/customer/herogrid/woman.png"
                alt="Woman holding gift"
                fill
                className="object-contain object-top scale-114"
              />
            </div>
          </div>

          {/* Card 2: Small Purple (Made For Love) */}
          <div className="bg-secondary col-span-2 rounded-[32px] relative overflow-hidden flex flex-col items-center text-center pt-10 px-1 min-h-[350px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.1]"
              style={{
                backgroundImage: "url('/customer/herogrid/gift-stack-bg.jpg')",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-[32px] font-semibold text-white mb-2">
                Made For Love
              </h2>
              <p className="text-white text-[20px] font-medium">
                Because Every Surprise Deserves A Smile.
              </p>
            </div>

            {/* Image (Gift Stack) */}
            <div className="absolute bottom-8 w-[100%] h-[60%]">
              <Image
                src="/customer/herogrid/gift-stack.png"
                alt="Gift Stack"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Corner Arrow */}
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= BOTTOM ROW (1:1 Split) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-auto lg:h-[276px] overflow-visible">
          {/* Card 3: Purple Wide (Every Moment Matters) */}
          <div className="bg-secondary rounded-[32px] relative overflow-hidden flex items-center justify-between px-8 md:px-12 py-8 min-h-[280px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-contain bg-no-repeat z-0 opacity-[0.4]"
              style={{
                backgroundImage: "url('/customer/herogrid/man-bg.png')",
                backgroundPosition: "right -30px bottom -42px",
              }}
            />
            {/* Image (Man with gift) */}
            <div className="absolute bottom-4 left-0 h-[100%] w-[40%] pointer-events-none">
              <Image
                src="/customer/herogrid/man.png"
                alt="Man with gift"
                fill
                className="object-contain scale-130"
              />
            </div>

            {/* Text Content (Right Aligned visually) */}
            <div className="ml-auto text-center max-w-md relative z-10">
              <h2 className="text-[32px] font-semibold text-white mb-2 leading-tight">
                Every Moment Matters
              </h2>
              <p className="text-white text-[20px] font-medium">
                Birthdays, Anniversaries, Just Because.
              </p>
            </div>

            {/* Corner Arrow */}
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20 cursor-pointer">
              <ArrowUpRight className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Card 4: Green Wide (Delivery) */}
          <div className="bg-primary rounded-[32px] relative flex items-center px-8 md:px-12 py-8 min-h-[280px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.04]"
              style={{
                backgroundImage: "url('/customer/herogrid/green-bg.png')",
              }}
            />
            {/* Text Content (Left Aligned) */}
            <div className="absolute top-14 left-8 max-w-md z-10 text-center">
              <h2 className="text-[32px] font-bold text-white mb-2 leading-tight">
                Surprises, Delivered Fast
              </h2>
              <p className="text-white/90 text-[20px] font-medium">
                Same Day Delivery, Perfectly Timed.
              </p>
            </div>

            {/* Image (Delivery Man) */}
            <div className="absolute bottom-3.5 right-0 h-[100%] w-[50%] pointer-events-none">
              <Image
                src="/customer/herogrid/delivery.png"
                alt="Delivery man"
                fill
                className="object-contain scale-180"
              />
            </div>

            {/* Corner Arrow */}
            <button className="absolute bottom-6 left-6 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20 cursor-pointer">
              <ArrowUpRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
