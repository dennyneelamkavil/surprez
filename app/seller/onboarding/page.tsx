"use client";

import React, { useState } from "react";
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

export default function OnboardingPage() {
  const router = useRouter();
  const [businessType, setBusinessType] = useState<
    "individual" | "small-shop" | "brand"
  >("individual");

  const [formData, setFormData] = useState({
    businessName: "",
    displayName: "",
    primaryCategory: "",
    addressLine: "",
    pincode: "",
    city: "",
    state: "",
    gstNumber: "",
  });

  const categories = [
    "Toys & Kids Products",
    "Handmade & Crafted",
    "Personalized Crafts",
    "Home & Desk Decor",
    "Party Gifts",
    "Photo Frames",
    "Perfumes",
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    // Navigate to dashboard or next step
    router.push("/seller/dashboard");
  };

  // Helper class for consistent input styling
  const inputClass =
    "w-full bg-[#EEEEEE] border-transparent focus:border-[#74BE4A] focus:bg-white transition-colors h-11 text-[16px] md:text-[16px] rounded-md placeholder:text-gray-400";
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

      <form className="space-y-8">
        {/* Section 1: Business Type */}
        <div>
          <h2 className={sectionHeaderClass}>1. Business Type</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "individual", label: "Individual" },
              { id: "small-shop", label: "Small Shop" },
              { id: "brand", label: "Brand" },
            ].map((type) => {
              const isSelected = businessType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setBusinessType(type.id as any)}
                  className={`relative px-6 py-2 rounded-sm border text-[16px] font-medium transition-all
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

        {/* Section 2: Shop Information */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>2. Shop Information</h2>

          {/* Shop/Business Name */}
          <div>
            <label className={labelClass}>Shop / Business Name</label>
            <Input
              type="text"
              name="businessName"
              placeholder="e.g. Creative Crafts"
              value={formData.businessName}
              onChange={handleInputChange}
              className={inputClass}
            />
            <p className="text-[12px] text-[#C2C2C2] mt-1">
              This name will be shown to customers
            </p>
          </div>

          {/* Display Name */}
          <div>
            <label className={labelClass}>
              Display Name <span className="text-[#AAAAAA]">(Optional)</span>
            </label>
            <Input
              type="text"
              name="displayName"
              placeholder="Same as business name"
              value={formData.displayName}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>

          {/* Primary Category */}
          <div>
            <label className={labelClass}>Primary Category</label>
            <Select
              value={formData.primaryCategory}
              onValueChange={(value) =>
                handleSelectChange("primaryCategory", value)
              }
            >
              <SelectTrigger className={`${inputClass} px-3`}>
                <SelectValue placeholder="Search category (e.g. Toys)" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Section 3: Business Address */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>3. Business Address</h2>

          {/* Address Line */}
          <div>
            <label className={labelClass}>Address Line</label>
            <Input
              type="text"
              name="addressLine"
              placeholder="Flat, House no., Building, Company, Apartment"
              value={formData.addressLine}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>

          {/* Pincode and City */}
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
                placeholder="Auto-filled"
                value={formData.city}
                onChange={handleInputChange}
                className={`${inputClass} bg-gray-100 text-gray-500`}
                disabled
              />
            </div>
          </div>

          {/* State */}
          <div>
            <label className={labelClass}>State</label>
            <Select
              value={formData.state}
              onValueChange={(value) => handleSelectChange("state", value)}
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

        {/* Section 4: Tax & Compliance */}
        <div className="space-y-5">
          <h2 className={sectionHeaderClass}>4. Tax & Compliance</h2>
          <div>
            <label className={labelClass}>
              GST Number <span className="text-[#AAAAAA]">(Optional)</span>
            </label>
            <Input
              type="text"
              name="gstNumber"
              placeholder="Enter GSTIN"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className={inputClass}
            />
            <p className="text-[12px] text-[#C2C2C2] mt-1">
              Required only if applicable to your business type
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <Button
            type="button"
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#74BE4A] to-[#328A00] text-white font-semibold h-12 rounded-lg mt-6 shadow-sm text-[24px]"
          >
            Continue
          </Button>

          <Button
            type="button"
            onClick={handleBack}
            className="text-[#AAAAAA] hover:text-gray-600 bg-transparent hover:bg-transparent text-[24px] font-semibold transition-colors"
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
