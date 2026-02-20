import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/* ================= HELPERS ================= */

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="text-[16px] font-medium text-[#8A8A8A] hover:text-secondary transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href = "#",
  src,
  alt,
}: {
  href?: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center hover:opacity-80 transition"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="object-contain"
      />
    </Link>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 text-[20px] font-bold text-black uppercase tracking-wide">
      {children}
    </h4>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Footer() {
  return (
    <footer className="bg-[#F7F5FF] text-[#4D4D4D] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Image
              src="/logos/logo.png"
              alt="Surprez"
              width={110}
              height={45}
              className="object-contain"
            />
            <p className="text-[16px] font-medium leading-6 text-[#4D4D4D] max-w-xs">
              Making Every Occasion Memorable With Thoughtfully Curated Gifts
              Delivered With Love And Care.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <SocialIcon
                src="/icons/facebook.svg"
                alt="Facebook"
                href="https://facebook.com"
              />
              <SocialIcon
                src="/icons/instagram.svg"
                alt="Instagram"
                href="https://instagram.com"
              />
              <SocialIcon
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                href="https://linkedin.com"
              />
              <SocialIcon
                src="/icons/x.svg"
                alt="X (Twitter)"
                href="https://x.com"
              />
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Shop */}
            <div>
              <SectionHeader>Shop</SectionHeader>
              <ul className="space-y-3">
                <li>
                  <FooterLink>All Gifts</FooterLink>
                </li>
                <li>
                  <FooterLink>Birthday</FooterLink>
                </li>
                <li>
                  <FooterLink>Anniversary</FooterLink>
                </li>
                <li>
                  <FooterLink>Best Sellers</FooterLink>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <SectionHeader>Support</SectionHeader>
              <ul className="space-y-3">
                <li>
                  <FooterLink>Contact Us</FooterLink>
                </li>
                <li>
                  <FooterLink>FAQs</FooterLink>
                </li>
                <li>
                  <FooterLink>Shipping</FooterLink>
                </li>
                <li>
                  <FooterLink>Return</FooterLink>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <SectionHeader>Company</SectionHeader>
              <ul className="space-y-3">
                <li>
                  <FooterLink>About Us</FooterLink>
                </li>
                <li>
                  <FooterLink>Careers</FooterLink>
                </li>
                <li>
                  <FooterLink>Blog</FooterLink>
                </li>
                <li>
                  <FooterLink>Privacy</FooterLink>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <SectionHeader>Get in Touch</SectionHeader>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:hello@surprez.com"
                    className="text-[16px] font-medium text-[#8A8A8A] hover:text-primary underline"
                  >
                    hello@surprez.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a
                    href="tel:+919876541230"
                    className="text-[16px] font-medium text-[#8A8A8A] hover:text-primary underline"
                  >
                    +91 9876541230
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= NEWSLETTER SECTION ================= */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-[16px] font-semibold text-black">
              Get Special Offers & Updates
            </h3>
            <p className="text-[15px] font-medium text-[#777777]">
              Subscribe To Our Newsletter For Exclusive Deals And Gifting
              Inspiration
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <Input
              type="email"
              placeholder="Enter your mail"
              className="h-11 w-full md:w-64 text-[15px] text-black font-medium placeholder:text-[#A2A2A2] placeholder:text-[15px] rounded-full border-secondary focus-visible:ring-secondary focus-visible:border-secondary focus-visible:ring-1 focus-visible:ring-offset-0"
            />
            <Button className="h-11 px-8 rounded-full text-[20px] font-medium bg-primary hover:bg-[#63a33f] text-white transition-colors">
              Subscribe
            </Button>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-[#DCDCDC] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[18px] font-medium text-[#898989]">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            © 2025 Surprez. All Rights Reserved.
          </div>

          {/* Center: Made With Love */}
          <div className="flex items-center gap-1 font-medium text-secondary">
            Made with ❤️ for gift lovers
          </div>

          {/* Right: Legal Links */}
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-secondary">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
