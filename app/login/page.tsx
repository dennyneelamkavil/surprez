"use client";

import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="h-screen w-full bg-[#F8F7FC] flex items-center justify-center p-4 lg:p-6 overflow-hidden">
      <div className="w-full max-w-[1200px] h-full max-h-[850px] bg-[#F8F7FC] rounded-[32px] flex flex-col lg:flex-row overflow-hidden relative">
        {/* ================= LEFT COLUMN (FORM) ================= */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10 h-full">
          {/* Logo */}
          <div className="mb-6 lg:mb-8">
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
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-10 w-full max-w-[420px]">
            {/* Headers */}
            <h1 className="text-[22px] lg:text-[28px] font-bold text-black text-center mb-1">
              Welcome To Surprez 🎁
            </h1>
            <p className="text-[12px] lg:text-[13px] font-semibold text-[#74BE4A] text-center mb-6 lg:mb-8">
              Enter Your Mobile Number To Receive A One Time Password
            </p>

            {/* Input Field */}
            <div className="relative mb-5 lg:mb-6">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full bg-[#EEEEEE] rounded-xl h-[48px] lg:h-[52px] pl-12 pr-4 text-[14px] lg:text-[15px] text-black outline-none focus:ring-2 focus:ring-[#74BE4A] transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mb-6 lg:mb-8">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded border-gray-300 text-[#74BE4A] focus:ring-[#74BE4A]"
              />
              <label
                htmlFor="terms"
                className="text-[11px] lg:text-[12px] text-gray-400 font-medium select-none cursor-pointer leading-tight"
              >
                I Agree to the{" "}
                <Link href="/terms" className="text-[#74BE4A] hover:underline">
                  Terms
                </Link>{" "}
                &{" "}
                <Link
                  href="/privacy"
                  className="text-[#74BE4A] hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-[#59489C] to-[#1C1236] hover:opacity-95 text-white font-semibold h-[48px] lg:h-[52px] rounded-xl flex items-center justify-center gap-2 text-[15px] lg:text-[16px] transition-transform active:scale-[0.98] shadow-md">
              SEND OTP <ArrowRight className="w-5 h-5 ml-1" />
            </button>

            {/* Help Link */}
            <p className="text-center mt-5 lg:mt-6 text-[12px] lg:text-[13px] text-gray-500 font-medium">
              Having Trouble?{" "}
              <Link
                href="/help"
                className="text-[#59489C] font-bold hover:underline"
              >
                Get Help
              </Link>
            </p>
          </div>

          {/* Footer Text */}
          <p className="mt-6 lg:mt-10 text-[13px] lg:text-[14px] text-gray-400 font-medium flex items-center gap-1">
            Made With <span className="text-red-400">♥</span> For Gift Lovers
          </p>
        </div>

        {/* ================= RIGHT COLUMN (IMAGE & BANNER) ================= */}
        <div className="hidden lg:flex w-[55%] p-4 pl-0 relative h-full">
          <div className="w-full h-full bg-[#74BE4A] rounded-[32px] overflow-hidden relative flex flex-col items-center pt-10 xl:pt-16 shadow-inner">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.04]"
              style={{
                backgroundImage: "url('/bg/surprez-white.png')",
              }}
            />

            {/* Text Overlay */}
            <div className="relative z-20 text-center flex flex-col items-center px-8 w-full">
              <h2 className="text-[30px] xl:text-[40px] font-black text-white uppercase tracking-tight leading-none drop-shadow-sm mb-4">
                BECAUSE <span className="text-[#59489C]">EVERY GIFT</span>{" "}
                MATTERS
              </h2>
              <div className="bg-white px-5 py-2 rounded-full shadow-sm">
                <p className="text-[#74BE4A] text-[12px] xl:text-[14px] font-bold tracking-wide">
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
