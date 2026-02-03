import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

/* ================= HELPERS ================= */

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="text-[13px] text-gray-600 hover:text-[#6C5CE7] transition-colors"
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
    <h4 className="mb-3 text-[12px] font-bold uppercase tracking-wider text-gray-900">
      {children}
    </h4>
  );
}

function MiddleSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 text-[12px] font-bold uppercase tracking-wider text-[#7B61FF]">
      {children}
    </h4>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function Footer() {
  return (
    <footer className="bg-[#F7F5FF] text-[#4D4D4D] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4 pr-4">
            <Image
              src="/logo.png"
              alt="Surprez"
              width={110}
              height={45}
              className="object-contain"
            />
            <p className="text-[13px] leading-relaxed text-gray-600">
              A Curated Marketplace For Handcrafted And Meaningful Gifts. Join
              Our Community Of Talented Makers.
            </p>
          </div>

          {/* Company */}
          <div>
            <SectionHeader>Company</SectionHeader>
            <ul className="space-y-2">
              <li>
                <FooterLink>About Surprez</FooterLink>
              </li>
              <li>
                <FooterLink>Our Story & Mission</FooterLink>
              </li>
              <li>
                <FooterLink>Press & Media</FooterLink>
              </li>
              <li>
                <FooterLink>Careers</FooterLink>
              </li>
            </ul>
          </div>

          {/* Sell on Surprez */}
          <div>
            <SectionHeader>Sell on Surprez</SectionHeader>
            <ul className="space-y-2">
              <li>
                <FooterLink>Become A Seller</FooterLink>
              </li>
              <li>
                <FooterLink>Seller Handbook</FooterLink>
              </li>
              <li>
                <FooterLink>Success Stories</FooterLink>
              </li>
              <li>
                <FooterLink>Marketplace Policies</FooterLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <SectionHeader>Support</SectionHeader>
            <ul className="space-y-2">
              <li>
                <FooterLink>FAQS</FooterLink>
              </li>
              <li>
                <FooterLink>Help Center</FooterLink>
              </li>
              <li>
                <FooterLink>Contact Support</FooterLink>
              </li>
              <li>
                <FooterLink>Safety Guidelines</FooterLink>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <SectionHeader>Get in touch</SectionHeader>
            <ul className="space-y-3 text-[13px]">
              <li className="flex items-center gap-2">
                {/* Lime green icon style matching image */}
                <Mail className="w-4 h-4 text-primary" />
                <Link
                  href="mailto:sellers@surprez.com"
                  className="text-gray-500 underline decoration-gray-300 underline-offset-2"
                >
                  sellers@surprez.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                {/* Lime green icon style matching image */}
                <Phone className="w-4 h-4 text-primary" />
                <Link href="tel:+919876541230" className="text-gray-500">
                  +91 9876541230
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= MIDDLE SECTION (Legal + Social) ================= */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
            {/* Left Side: Legal Columns */}
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <MiddleSectionHeader>Legal</MiddleSectionHeader>
                <Link
                  href="#"
                  className="text-[13px] text-gray-800 font-medium"
                >
                  Terms of Use
                </Link>
              </div>
              <div className="flex flex-col">
                <MiddleSectionHeader>Privacy</MiddleSectionHeader>
                <Link
                  href="#"
                  className="text-[13px] text-gray-800 font-medium"
                >
                  Data Protection
                </Link>
              </div>
              <div className="flex flex-col">
                <MiddleSectionHeader>Cookies</MiddleSectionHeader>
                <Link
                  href="#"
                  className="text-[13px] text-gray-800 font-medium"
                >
                  Cookie Settings
                </Link>
              </div>
            </div>

            {/* Right Side: Socials */}
            <div className="flex flex-col items-start gap-1">
              <MiddleSectionHeader>Follow Us On</MiddleSectionHeader>
              <div className="flex gap-3">
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
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-gray-200 pt-6 text-center text-[12px] text-gray-400">
          © 2026 Surprez Inc. All Rights Reserved. Hand-Crafted With Love For
          Creators Everywhere.
        </div>
      </div>
    </footer>
  );
}
