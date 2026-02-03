"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  color: string;
  hue: number;
}

const products: Product[] = [
  { id: "1", title: "Toys & Kids Products", color: "bg-yellow-300", hue: 45 },
  { id: "2", title: "Handmade & Crafted", color: "bg-amber-900", hue: 30 },
  { id: "3", title: "Personalized Gifts", color: "bg-teal-600", hue: 180 },
  { id: "4", title: "Toys & Kids Products", color: "bg-orange-600", hue: 20 },
  { id: "5", title: "Home & Desk Decor", color: "bg-teal-800", hue: 200 },
  { id: "6", title: "Gift Gifts", color: "bg-red-200", hue: 0 },
  { id: "7", title: "Photo Frames", color: "bg-gray-400", hue: 0 },
  { id: "8", title: "Perfumes", color: "bg-amber-100", hue: 40 },
];

export default function ShowcaseSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="categories" className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide mb-2">
            SHOWCASE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What can you sell on Surprez?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Sell products that bring joy, emotion, and meaning to each
            celebration
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group`}
            >
              <div
                className={`w-full h-full ${product.color} flex items-center justify-center text-center p-4 opacity-90 group-hover:opacity-100 transition-opacity`}
              >
                <div>
                  <p className="text-sm md:text-base font-semibold text-foreground">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Button
            variant="ghost"
            className="text-primary hover:text-primary font-semibold text-base"
          >
            View All Categories →
          </Button>
        </div>
      </div>
    </section>
  );
}
