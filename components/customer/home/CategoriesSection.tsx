"use client";

import Image from "next/image";
import Link from "next/link";

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
];

const occasions = [
  {
    id: 1,
    title: "Birthday",
    image: "/customer/home/categories/birthday.jpg",
  },
  {
    id: 2,
    title: "Anniversary",
    image: "/customer/home/categories/anniversary.jpg",
  },
  {
    id: 3,
    title: "Wedding",
    image: "/customer/home/categories/wedding.jpg",
  },
  {
    id: 4,
    title: "Valentines Day",
    image: "/customer/home/categories/valentines.jpg",
  },
  {
    id: 5,
    title: "Thank You",
    image: "/customer/home/categories/thanks.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative w-full py-16 bg-[#E9F5E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.025] scale-130"
          style={{
            backgroundImage: "url('/bg/boxes.jpg')",
          }}
        />
        {/* ================= EXPLORE CATEGORIES ================= */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-8">
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                href="#"
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
        </div>

        {/* ================= SHOP BY OCCASION ================= */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-8">
            Shop By Occasion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {occasions.map((occasion) => (
              <Link
                href="#"
                key={occasion.id}
                className="group flex flex-col items-center gap-3"
              >
                {/* Full Image Card */}
                <div className="w-full aspect-square rounded-[24px] overflow-hidden relative shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle overlay for better contrast if needed, mostly transparent here as per design */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                {/* Label */}
                <span className="text-[20px] font-medium text-black group-hover:text-secondary transition-colors">
                  {occasion.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
