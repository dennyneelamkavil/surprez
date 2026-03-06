"use client";

import { Gift, Heart, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Gift,
    title: "Curated with Care",
    description: "Gifts chosen to delight, always.",
  },
  {
    id: 2,
    icon: Heart,
    title: "Joy Assured",
    description: "Smiles guaranteed with every surprise.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Safe payments, trusted gateways.",
  },
  {
    id: 4,
    icon: Truck,
    title: "On Time Delivery",
    description: "Surprises delivered right.",
  },
];

export default function FeaturesBanner() {
  return (
    <section className="w-full py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x divide-gray-200">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center px-6"
              >
                {/* Circular Icon */}
                <div className="w-[60px] h-[60px] rounded-full bg-secondary flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="text-[18px] font-semibold text-[#59489C7D] mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#B2B2B2] font-medium tracking-wide">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
