"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Package, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: User,
    title: "Register Your Business",
    description:
      "Set up your seller account with basic information about your craft",
  },
  {
    number: "02",
    icon: Package,
    title: "List Your Products",
    description:
      "Upload stunning photos and details about your handmade gift items",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Get Approved",
    description:
      "Our team reviews your products to ensure quality standards are met",
  },
  {
    number: "04",
    icon: Zap,
    title: "Start Selling",
    description:
      "Go live and begin receiving orders from gift-buyers worldwide",
  },
];

export default function HowItWorksSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide mb-2">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start selling in 4 simple steps
          </h2>
          <p className="text-foreground/60">
            Getting started on Surprez is easy, quick, and straightforward
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-6 overflow-hidden group hover:shadow-lg transition-shadow"
              >
                {/* Step background placeholder */}
                <div
                  className="absolute inset-0 opacity-5 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="50" fontSize="80" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fill="currentColor">${step.number}</text></svg>')`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block bg-secondary text-secondary-foreground rounded-full p-3 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-4xl font-bold text-foreground/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => router.push("/seller/register")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-base"
          >
            Start Selling Now →
          </Button>
        </div>
      </div>
    </section>
  );
}
