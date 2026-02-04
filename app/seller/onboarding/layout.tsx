import Image from "next/image";
import { ProgressHeader } from "@/components/seller/layout";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
      {/* ================= BACKGROUND IMAGES ================= */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-[75vh] z-0 flex opacity-65">
        {/* Left Half */}
        <div className="relative w-1/2 h-full rotate-180">
          <Image
            src="/seller/registration/reg-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Half */}
        <div className="relative w-1/2 h-full rotate-180">
          <Image
            src="/seller/registration/reg-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center pt-8 pb-12 px-4">
        <div className="w-full max-w-[520px]">
          <ProgressHeader step={2} total={2} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
