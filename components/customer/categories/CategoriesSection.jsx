"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ages = [
  { id: 1, range: "0-12", label: "MONTHS" },
  { id: 2, range: "1-3", label: "YEAR" },
  { id: 3, range: "4-7", label: "YEAR" },
  { id: 4, range: "8-10", label: "YEAR" },
  { id: 5, range: "11-14", label: "YEAR" },
  { id: 6, range: "14+", label: "YEAR" },
];

const categories = [
  {
    id: 1,
    title: "Toys",
    image: "/customer/home/categories/toys.png",
  },
  {
    id: 2,
    title: "Flowers",
    image: "/customer/home/categories/flowers.png",
  },
  {
    id: 3,
    title: "Frames",
    image: "/customer/home/categories/frames.png",
  },
  {
    id: 4,
    title: "Hampers",
    image: "/customer/home/categories/hampers.png",
  },
  {
    id: 5,
    title: "Handmade Gifts",
    image: "/customer/home/categories/handmade.png",
  },
  {
    id: 6,
    title: "Frames",
    image: "/customer/home/categories/frames.png",
  },
  {
    id: 7,
    title: "Hampers",
    image: "/customer/home/categories/hampers.png",
  },
  {
    id: 8,
    title: "Handmade Gifts",
    image: "/customer/home/categories/handmade.png",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* ================= SHOP BY AGE ================= */}
        <div>
          <h2 className="text-[20px] font-bold text-black mb-6">Shop By Age</h2>

          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
            {ages.map((age) => (
              <Link
                href={`/age/${age.range}`}
                key={age.id}
                className="w-24 h-24 sm:w-[130px] sm:h-[130px] rounded-full bg-[#74BE4A] flex flex-col items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300 group"
              >
                <span className="text-3xl sm:text-[42px] font-black text-white leading-none group-hover:text-secondary transition-colors">
                  {age.range}
                </span>
                <span className="text-[11px] sm:text-[13px] font-bold text-secondary mt-1 group-hover:text-white transition-colors">
                  {age.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= SHOP BY CATEGORIES ================= */}
        <div>
          <h2 className="text-[20px] font-bold text-black mb-6">
            Shop By Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                href={`/category/${category.title.toLowerCase().replace(" ", "-")}`}
                key={category.id}
                className="group flex flex-col items-center gap-3"
              >
                {/* Full Image Card */}
                <div className="w-full aspect-square rounded-[24px] overflow-hidden relative shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle overlay for better contrast if needed, mostly transparent here as per design */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                {/* Label */}
                <span className="text-[20px] font-medium text-black group-hover:text-secondary transition-colors">
                  {category.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-16">
            <Button className="bg-secondary hover:bg-[#4a3c82] text-white font-medium h-12 px-10 rounded-full shadow-sm">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
