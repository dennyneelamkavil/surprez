"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  title: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Toys & Kids Products",
    image: "/seller/categories/toys.jpg", // Yellow Toy Car
  },
  {
    id: "2",
    title: "Handmade & Crafted",
    image: "/seller/categories/handmade.jpg", // Gift Wrapping
  },
  {
    id: "3",
    title: "Personalized Crafts",
    image: "/seller/categories/personalized.png", // Flower Bouquet
  },
  {
    id: "4",
    title: "Surprise Boxes",
    image: "/seller/categories/kids.png", // Gift Box
  },
  {
    id: "5",
    title: "Home & Desk Decor",
    image: "/seller/categories/home-decor.png", // Interior Decor
  },
  {
    id: "6",
    title: "Party Gifts",
    image: "/seller/categories/party.png", // Party/Tea Set
  },
  {
    id: "7",
    title: "Photo Frames",
    image: "/seller/categories/photo-frames.png", // Frame
  },
  {
    id: "8",
    title: "Perfumes",
    image: "/seller/categories/perfumes.png", // Perfume
  },
];

export default function ShowcaseSection() {
  return (
    <section
      id="categories"
      className="w-full bg-white py-16 md:py-24 border-t border-[#D0D0D0]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-wider mb-2">
            SHOWCASE
          </p>
          <h2 className="text-[36px] md:text-4xl font-extrabold text-secondary mb-4">
            What can you sell on Surprez?
          </h2>
          <p className="text-[#9C9C9C] max-w-2xl mx-auto font-semibold text-[16px] md:text-base">
            Sell products that bring joy, emotion, and meaning to every
            celebration
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] md:text-base font-semibold text-gray-900 text-center">
                {product.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-[16px] text-secondary font-semibold hover:opacity-80 transition-opacity underline"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
