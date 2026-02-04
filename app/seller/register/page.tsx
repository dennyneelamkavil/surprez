"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    router.push("/seller/onboarding");
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-gray-100/50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[24px] font-bold text-secondary mb-2">
          Create your seller account
        </h1>
        <p className="text-[#7D7D7D] font-medium text-[16px]">
          Set up your account and start selling in a few steps.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Full Name
          </label>
          <Input
            type="text"
            name="fullName"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] md:text-[16px] rounded-md placeholder:text-gray-400"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] md:text-[16px] rounded-md placeholder:text-gray-400"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Mobile Number
          </label>
          <Input
            type="tel"
            name="mobileNumber"
            placeholder="+91 98765 43210"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] md:text-[16px] rounded-md placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] md:text-[16px] rounded-md placeholder:text-gray-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-[12px] text-[#C2C2C2] mt-1.5">
            Must be at least 8 characters
          </p>
        </div>

        {/* Continue Button */}
        <Button
          type="button"
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-[#74BE4A] to-[#328A00] text-white font-semibold h-12 rounded-lg mt-6 shadow-sm text-[24px]"
        >
          Register & Continue
        </Button>
      </form>

      {/* Sign In Link */}
      <p className="text-center text-[20px] font-medium text-[#919191] mt-6">
        Already registered?{" "}
        <Link href="/seller/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
