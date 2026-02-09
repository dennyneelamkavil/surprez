"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Toys",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop", // Toys/Blocks
  },
  {
    id: 2,
    title: "Flowers",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1000&auto=format&fit=crop", // Bouquet
  },
  {
    id: 3,
    title: "Frames",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop", // Frame
  },
  {
    id: 4,
    title: "Hampers",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1000&auto=format&fit=crop", // Hamper Basket
  },
  {
    id: 5,
    title: "Handmade Gifts",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop", // Hands holding gift
  },
];

const occasions = [
  {
    id: 1,
    title: "Birthday",
    image: "https://images.unsplash.com/photo-1558636508-e0db3836bd6d?q=80&w=1000&auto=format&fit=crop", // Cake
  },
  {
    id: 2,
    title: "Anniversary",
    image: "https://images.unsplash.com/photo-1621112904891-5af487401484?q=80&w=1000&auto=format&fit=crop", // Couple Hands
  },
  {
    id: 3,
    title: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop", // Wedding Party
  },
  {
    id: 4,
    title: "Valentines Day",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop", // Love Balloon
  },
  {
    id: 5,
    title: "Thank You",
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=1000&auto=format&fit=crop", // Thank You Note
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-16 bg-[#EEF7EB]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* ================= EXPLORE CATEGORIES ================= */}
        <div>
          <h2 className="text-[22px] font-bold text-black mb-8">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link href="#" key={cat.id} className="group flex flex-col items-center gap-3">
                {/* Purple Card */}
                <div className="w-full aspect-square bg-[#59489C] rounded-[24px] flex items-center justify-center p-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md overflow-hidden relative">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Label */}
                <span className="text-[16px] font-medium text-black group-hover:text-[#59489C] transition-colors">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= SHOP BY OCCASION ================= */}
        <div>
          <h2 className="text-[22px] font-bold text-black mb-8">Shop By Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {occasions.map((occasion) => (
              <Link href="#" key={occasion.id} className="group flex flex-col items-center gap-3">
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
                <span className="text-[16px] font-medium text-black group-hover:text-[#59489C] transition-colors">
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