import { Truck, Wallet, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Target,
    title: "Targeted Gift Buyers",
    description:
      "Connect with customers actively searching for meaningful, personalized gifts for their loved ones.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description:
      "Our logistics partners ensure your products reach customers on time, every time.",
  },
  {
    icon: Wallet,
    title: "Timely Payouts",
    description:
      "Receive your earnings on schedule with transparent payment tracking and zero hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Marketplace",
    description:
      "Join a verified platform with buyer protection and seller support you can count on",
  },
];

export default function WhySellSection() {
  return (
    <section
      id="why-sell"
      className="w-full bg-white py-16 md:py-24 border-t border-[#D0D0D0]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-wider mb-3">
            WHY SELL ON SURPREZ
          </p>
          <h2 className="text-[36px] md:text-5xl font-extrabold text-black mb-4 leading-tight">
            Everything you need to <br className="hidden md:block" />
            grow your gifting business
          </h2>
          <p className="text-[#9C9C9C] text-[16px] md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
            We handle the complexities so you can focus on what you do best{" "}
            <br className="hidden md:block" />
            creating amazing products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            // Apply top margin to every second item on large screens to create the staggered effect
            const staggerClass = index % 2 !== 0 ? "lg:mt-16" : "mt-0";

            return (
              <div
                key={index}
                className={`relative overflow-hidden bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start gap-6 border-4 border-[#EAE5FF] ${staggerClass}`}
              >
                <Image
                  src="/bg/surprez.png"
                  alt=""
                  width={512}
                  height={341}
                  className="absolute top-[-17px] left-[-50px] w-[512px] h-[341px] scale-[1.6] -rotate-[22.64deg] opacity-[0.04] mix-blend-difference pointer-events-none select-none"
                />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-[20px] text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white text-[12px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
