import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";

export default function StandardsBanner() {
  return (
    <section className="w-full bg-primary py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-tr-xl rounded-bl-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Left Content Wrapper */}
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="flex-shrink-0">
              <BadgeCheck className="w-14 h-14 text-white fill-secondary" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[18px] font-semibold text-black leading-tight mb-1">
                Only original, handmade, and high quality gift products are
                allowed.
              </h3>
              <p className="text-[#777777] text-[16px] font-medium">
                We maintain high standards to ensure the best experience for our
                community.
              </p>
            </div>
          </div>

          {/* Right Action Link */}
          <div className="flex-shrink-0">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-[16px] hover:opacity-80 transition-opacity"
            >
              Learn More About Our Standards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
