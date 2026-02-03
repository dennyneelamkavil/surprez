"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserPlus, Box, ClipboardCheck, Rocket } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register Your Business",
    description:
      "Sign up with your business details and get verified within 24 hours.",
    image: "/seller/howitworks/register.png", // Handshake/Meeting
  },
  {
    number: "02",
    icon: Box,
    title: "List Your Products",
    description:
      "Add your gift items with photos, descriptions, and pricing in minutes.",
    image: "/seller/howitworks/list-products.png", // Boxes/Inventory
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Get Approved",
    description:
      "Our team reviews your listings to ensure quality standards are met.",
    image: "/seller/howitworks/approved.png", // Checking/Approval
  },
  {
    number: "04",
    icon: Rocket,
    title: "Start Selling",
    description:
      "Go live and reach thousands of customers looking for the perfect gift.",
    image: "/seller/howitworks/start-selling.png", // Laptop/Selling
  },
];

export default function HowItWorksSection() {
  const router = useRouter();

  return (
    <section id="how-it-works" className="w-full bg-[#FBF8F6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-wider mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-[36px] md:text-4xl font-extrabold text-black mb-4 relative z-10">
            Start selling in 4 simple steps
          </h2>
          <p className="text-[#9C9C9C] text-[16px] font-semibold max-w-lg mx-auto">
            Getting started is quick and easy. We'll guide you through every
            step.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative h-[320px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-2 pb-2">
                  {/* Icon Box */}
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-2 shadow-sm border-3 border-primary">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <h3 className="text-white font-extrabold text-[20px] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#F6F6F6] text-[14px] font-medium leading-relaxed">
                    {step.description}
                  </p>

                  {/* Number (Bottom Right) */}
                  <div className="absolute bottom-0 right-2">
                    <span
                      className="text-[64px] font-extrabold text-transparent select-none"
                      style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => router.push("/seller/register")}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 rounded-lg text-[20px] shadow-md transition-transform hover:scale-105"
          >
            Start Selling Now &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
