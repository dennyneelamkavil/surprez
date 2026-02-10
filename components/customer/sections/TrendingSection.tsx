"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingProducts = [
  {
    id: 1,
    title: "Gourmet Chocolate Box",
    subtitle: "Premium Assorted Truffles",
    price: "₹300.00",
    image:
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop", // Chocolate Box
  },
  {
    id: 2,
    title: "Summer Breeze Bouquet",
    subtitle: "Fresh Seasonal Flowers",
    price: "₹199.00",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1000&auto=format&fit=crop", // Bouquet
  },
  {
    id: 3,
    title: "Artisan Custom Mug",
    subtitle: "Handmade Craft",
    price: "₹450.00",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop", // Mug
  },
  {
    id: 4,
    title: "Zen Candle Set",
    subtitle: "Vanilla Scents",
    price: "₹199.00",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1000&auto=format&fit=crop", // Candles
  },
  {
    id: 5,
    title: "Buzz Lightyear Action Figure",
    subtitle: "Collector Edition Toy",
    price: "₹1,299.00",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop", // Toy
  },
  {
    id: 6,
    title: "Modern Indoor Plant",
    subtitle: "Minimal Home Decor",
    price: "₹699.00",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop", // Plant
  },
  {
    id: 7,
    title: "Fiddle Leaf Plant",
    subtitle: "Fresh Green Home Accent",
    price: "₹799.00",
    image:
      "https://images.unsplash.com/photo-1599598425947-321245e320f7?q=80&w=1000&auto=format&fit=crop", // Fiddle Leaf
  },
  {
    id: 8,
    title: "Batman Rubber Duck",
    subtitle: "Fun Collectible Gift",
    price: "₹299.00",
    image:
      "https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=1000&auto=format&fit=crop", // Duck/Toy
  },
];

export default function TrendingSection() {
  return (
    <section className="relative w-full py-16 bg-secondary overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.025] scale-125 z-0"
        style={{
          backgroundImage: "url('/bg/boxes.jpg')",
        }}
      />
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <h2 className="text-[24px] font-bold text-white mb-8">Trending Now</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[20px] p-3 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Heart/Wishlist Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm group cursor-pointer">
                  <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-1">
                <h3 className="font-semibold text-[18px] text-gray-900 leading-tight mb-1">
                  {product.title}
                </h3>
                <p className="text-[14px] text-[#747474] mb-4 font-medium">
                  {product.subtitle}
                </p>

                {/* Price & Action Row */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[20px] font-bold text-secondary">
                    {product.price}
                  </span>
                  <Button className="h-8 px-4 bg-primary hover:bg-[#63a33f] text-white text-[16px] font-semibold uppercase tracking-wide rounded-md">
                    View Gift
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <Link href="/trending">
          <Button className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-[20px] shadow-lg transition-transform hover:scale-105">
            View All Trending <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
