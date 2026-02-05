"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sellerApi } from "@/lib/api";

export default function OnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sellerType, setSellerType] = useState<"vendor" | "craft_maker">(
    "craft_maker",
  );

  const [formData, setFormData] = useState({
    legalName: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    gstin: "",
    businessType: "",
  });

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  useEffect(() => {
    const token = localStorage.getItem("seller_token");
    if (!token) {
      router.replace("/seller/register");
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = async () => {
    setError(null);
    setLoading(true);

    try {
      await sellerApi.post("/onboarding", {
        sellerType,
        businessType: formData.businessType || undefined,
        legalName: formData.legalName || undefined,
        gstin: formData.gstin || undefined,
        businessAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: "India",
        },
      });

      localStorage.removeItem("seller_token");
      router.push("/seller/register/success");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] rounded-md placeholder:text-gray-400";
  const labelClass = "block text-[18px] font-semibold text-black mb-1.5";
  const sectionHeaderClass =
    "text-[16px] font-medium text-[#676767] mb-3 uppercase tracking-wider";

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-gray-100/50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[24px] font-bold text-secondary mb-2">
          Set up your shop
        </h1>
        <p className="text-[#7D7D7D] font-medium text-[16px]">
          Add your business details to continue
        </p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* Section 1: Business Type */}
        <div>
          <h2 className={sectionHeaderClass}>1. Business Type</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "craft_maker", label: "Craft Maker" },
              { id: "vendor", label: "Vendor" },
            ].map((type, idx) => {
              const isSelected = sellerType === type.id;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSellerType(type.id as any)}
                  className={`relative px-6 py-2 rounded-sm border text-[16px] font-medium transition-all cursor-pointer
                    ${
                      isSelected
                        ? "border-primary bg-[#F0FDF4] text-[#2D7648]"
                        : "border-[#E5E5E5] bg-white text-black hover:border-gray-300"
                    }`}
                >
                  {type.label}

                  {isSelected && (
                    <span className="absolute -top-3 -right-3 rounded-full p-[2px]">
                      <CheckCircle2 className="w-5 h-5 text-white fill-primary" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Legal Information */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>2. Legal Information</h2>

          <div>
            <label className={labelClass}>
              Legal Name <span className="text-[#AAAAAA]">(Optional)</span>
            </label>
            <Input
              type="text"
              name="legalName"
              placeholder="Enter legal name"
              value={formData.legalName}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Business Type <span className="text-[#AAAAAA]">(Optional)</span>
            </label>
            <Select
              value={formData.businessType}
              onValueChange={(v) => handleSelectChange("businessType", v)}
            >
              <SelectTrigger className={`${inputClass} px-3`}>
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "individual",
                  "proprietorship",
                  "partnership",
                  "llp",
                  "private_limited",
                  "public_limited",
                ].map((t) => (
                  <SelectItem key={t} value={t}>
                    {t.replace("_", " ").toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Section 3: Business Address */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>3. Business Address</h2>

          <div>
            <label className={labelClass}>Address</label>
            <Input
              type="text"
              name="address"
              placeholder="Enter business address"
              value={formData.address}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Pincode</label>
              <Input
                type="text"
                name="pincode"
                placeholder="000 000"
                value={formData.pincode}
                onChange={handleInputChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>City</label>
              <Input
                type="text"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>State</label>
            <Select
              value={formData.state}
              onValueChange={(v) => handleSelectChange("state", v)}
            >
              <SelectTrigger className={`${inputClass} px-3`}>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Section 4: Tax */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>4. Tax & Compliance</h2>

          <div>
            <label className={labelClass}>
              GST Number <span className="text-[#AAAAAA]">(Optional)</span>
            </label>
            <Input
              type="text"
              name="gstin"
              placeholder="Enter GSTIN"
              value={formData.gstin}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-[14px] font-medium">{error}</p>
        )}

        {/* Actions */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <Button
            type="button"
            onClick={handleContinue}
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#74BE4A] to-[#328A00] text-white font-semibold h-12 rounded-lg mt-6 shadow-sm text-[24px]"
          >
            {loading ? "Submitting..." : "Submit & Continue"}
          </Button>

          <Button
            type="button"
            onClick={() => router.back()}
            className="text-[#AAAAAA] bg-transparent hover:bg-transparent text-[24px] font-semibold"
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
