"use client";

import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="h-screen w-full bg-[#F5F2FF] flex items-center justify-center p-4 lg:p-6 overflow-hidden">
      <div className="w-full max-w-[1000px] h-full max-h-[850px] flex flex-col lg:flex-row overflow-hidden relative">
        {/* ================= LEFT COLUMN (FORM) ================= */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10 h-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logos/logo.png"
              alt="Surprez"
              width={140}
              height={45}
              className="object-contain"
              priority
            />
          </Link>

          {/* Form Card */}
          <div className="bg-white -mt-8 rounded-[16px] shadow-xl p-10 w-full max-w-[420px]">
            {/* Headers */}
            <h1 className="text-[22px] lg:text-[24px] font-bold text-black text-center mb-1">
              Welcome To Surprez 🎁
            </h1>
            <p className="text-[12px] lg:text-[14px] font-medium text-primary text-center mb-6 lg:mb-8 max-w-[250px] mx-auto">
              Enter Your Mobile Number To Receive A One Time Password
            </p>

            {/* Input Field */}
            <div className="relative mb-5 lg:mb-6">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-[#E8E8E8] focus:bg-white rounded-xl h-[48px] lg:h-[52px] pl-12 pr-4 text-[14px] lg:text-[15px] text-black outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-[#919191]"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="terms"
                className="text-[10px] text-gray-[#D9D9D9] font-medium select-none cursor-pointer leading-tight"
              >
                I Agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms
                </Link>{" "}
                &{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-gradient-to-r from-[#59489C] to-[#1F1936] hover:opacity-95 text-white font-semibold h-[48px] lg:h-[52px] rounded-xl flex items-center justify-center gap-2 text-[16px] lg:text-[20px] transition-transform active:scale-[0.98] shadow-md">
              SEND OTP <ArrowRight className="w-5 h-5 ml-1" />
            </Button>

            {/* Help Link */}
            <p className="text-center mt-5 lg:mt-6 text-[12px] lg:text-[14px] text-gray-[#7B7B7B] font-medium">
              Having Trouble?{" "}
              <Link
                href="/help"
                className="text-secondary font-semibold hover:underline"
              >
                Get Help
              </Link>
            </p>
          </div>

          {/* Footer Text */}
          <p className="mt-6 text-[13px] lg:text-[18px] text-gray-400 font-medium flex items-center gap-1">
            Made with ❤️ for gift lovers
          </p>
        </div>

        {/* ================= RIGHT COLUMN (IMAGE & BANNER) ================= */}
        <div className="hidden lg:flex w-[50%] p-4 pl-0 relative h-full">
          <div className="w-full h-full bg-primary rounded-tl-[30px] rounded-br-[30px] overflow-hidden relative flex flex-col items-center pt-10 xl:pt-16 shadow-inner">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.04]"
              style={{
                backgroundImage: "url('/bg/surprez-white.png')",
              }}
            />

            {/* Text Overlay */}
            <div className="relative z-20 text-center flex flex-col items-center px-8 w-full">
              <h2 className="text-[28px] font-black text-white uppercase tracking-tight leading-none mb-1">
                BECAUSE <span className="text-secondary">EVERY GIFT</span>{" "}
                MATTERS
              </h2>
              <div className="bg-white px-4 h-[22px] rounded-full">
                <p className="text-primary text-[14px] font-medium tracking-wide">
                  Log In To Share Happiness Through Thoughtful Surprises.
                </p>
              </div>
            </div>

            {/* Main Image */}
            <div className="absolute bottom-4 xl:bottom-9 w-full h-[65%] xl:h-[75%] z-10 flex justify-center">
              <Image
                src="/login/family.png"
                alt="Couple sharing a gift"
                fill
                className="object-contain object-top scale-160"
                priority
              />
              {/* Bottom Gradient to blend image softly */}
              <div className="absolute -bottom-9 w-full h-[75%] bg-gradient-to-t from-black/50 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
