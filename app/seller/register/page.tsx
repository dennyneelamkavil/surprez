"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { sellerApi } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("seller_token");
    if (token) {
      router.replace("/seller/onboarding");
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await sellerApi.post<{
        token: string;
        seller: {
          id: string;
          email: string;
          businessName: string;
          status: string;
        };
      }>("/auth/register", formData);

      // store onboarding token
      localStorage.setItem("seller_token", res.token);

      router.push("/seller/onboarding");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Business Name */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Business Name
          </label>
          <Input
            type="text"
            name="businessName"
            placeholder="e.g. Rahul Crafts"
            value={formData.businessName}
            onChange={handleInputChange}
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] rounded-md placeholder:text-gray-400"
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
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] rounded-md placeholder:text-gray-400"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-[18px] font-semibold text-black mb-1.5">
            Mobile Number
          </label>
          <Input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] rounded-md placeholder:text-gray-400"
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
              className="w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] rounded-md placeholder:text-gray-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-[12px] text-[#C2C2C2] mt-1.5">
            Must be at least 8 characters
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-[14px] font-medium">{error}</p>
        )}

        {/* Continue Button */}
        <Button
          type="button"
          onClick={handleContinue}
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#74BE4A] to-[#328A00] text-white font-semibold h-12 rounded-lg mt-6 shadow-sm text-[24px]"
        >
          {loading ? "Registering..." : "Register & Continue"}
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
