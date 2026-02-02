"use client";

import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    "Toys & Kids Products",
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
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                Set up your shop
              </h1>
              <p className="text-gray-600">
                Add your business details to continue
              </p>
            </div>

            <form className="space-y-6">
              {/* Section 1: Business Type */}
              <div className="pb-6 border-b">
                <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  1. Business Type
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "individual", label: "Individual" },
                    { id: "small-shop", label: "Small Shop" },
                    { id: "brand", label: "Brand" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setBusinessType(
                          type.id as "individual" | "small-shop" | "brand",
                        )
                      }
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                        businessType === type.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 text-foreground hover:border-primary"
                      }`}
                    >
                      {type.label}
                      {businessType === type.id && (
                        <span className="ml-2 text-green-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 2: Shop Information */}
              <div className="pb-6 border-b">
                <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  2. Shop Information
                </h2>
                <div className="space-y-4">
                  {/* Shop/Business Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Shop / Business Name
                    </label>
                    <Input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Creative Crafts"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full bg-muted border-0 placeholder:text-gray-400"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      This name will be shown to customers
                    </p>
                  </div>

                  {/* Display Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Display Name{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <Input
                      type="text"
                      name="displayName"
                      placeholder="Same as business name"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full bg-muted border-0 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Primary Category */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Category
                    </label>
                    <Select
                      value={formData.primaryCategory}
                      onValueChange={(value) =>
                        handleSelectChange("primaryCategory", value)
                      }
                    >
                      <SelectTrigger className="w-full bg-muted border-0">
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
              </div>

              {/* Section 3: Business Address */}
              <div className="pb-6 border-b">
                <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  3. Business Address
                </h2>
                <div className="space-y-4">
                  {/* Address Line */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Address Line
                    </label>
                    <Input
                      type="text"
                      name="addressLine"
                      placeholder="Flat, House no., Building, Company, Apartment"
                      value={formData.addressLine}
                      onChange={handleInputChange}
                      className="w-full bg-muted border-0 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Pincode and City */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Pincode
                      </label>
                      <Input
                        type="text"
                        name="pincode"
                        placeholder="000 000"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full bg-muted border-0 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City
                      </label>
                      <Input
                        type="text"
                        name="city"
                        placeholder="Auto-filled"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-muted border-0 placeholder:text-gray-400"
                        disabled
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State
                    </label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) =>
                        handleSelectChange("state", value)
                      }
                    >
                      <SelectTrigger className="w-full bg-muted border-0">
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
              </div>

              {/* Section 4: Tax & Compliance */}
              <div className="pb-6">
                <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  4. Tax & Compliance
                </h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    GST Number{" "}
                    <span className="text-gray-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <Input
                    type="text"
                    name="gstNumber"
                    placeholder="Enter GSTIN"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    className="w-full bg-muted border-0 placeholder:text-gray-400"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Required only if applicable to your business type
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button
                  type="button"
                  onClick={handleContinue}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-lg"
                >
                  Continue
                </Button>
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="ghost"
                  className="w-full text-gray-600 font-medium h-12 rounded-lg hover:bg-gray-100"
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
