"use client";

import { Gift, Wand2, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Gift,
    title: "1. Choose A Gift",
    description: "Browse Thousands Of Unique Items From Verified Sellers.",
  },
  {
    id: 2,
    icon: Wand2,
    title: "2. Personalize It",
    description: "Add A Custom Note, Wrapping, Or Special Instructions.",
  },
  {
    id: 3,
    icon: Truck,
    title: "3. Deliver Happiness",
    description: "We Ship It Safely To Their Doorstep With A Smile.",
  },
];

export default function HowSurprezWorksSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-[24px] font-bold text-secondary mb-16">
          How Surprez Works
        </h2>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
          {/* Connecting Line (Absolute Background) */}
          <div className="hidden md:block absolute top-[60px] left-[17%] w-[760px] h-[2px] bg-primary -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center w-full md:w-1/3 px-4"
              >
                {/* Icon Circle */}
                <div className="w-[120px] h-[120px] bg-[#E3E0EE] rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <Icon
                    className="w-12 h-12 text-secondary"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-[20px] font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-[16px] text-[#939393] font-medium max-w-[250px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
