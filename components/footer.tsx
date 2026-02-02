import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Surprez</h3>
            <p className="text-sm opacity-90 mb-4">
              A Curated Marketplace for Handcrafted and Meaningful Gifts Join Our Community Of Talented Makers.
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <p>© 2025 Surprez Inc.</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  About Surprez
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Sell on Surprez */}
          <div>
            <h4 className="font-semibold mb-4">SELL ON SURPREZ</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Seller Handbook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Marketplace Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Security Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8">
          {/* Legal and social */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex gap-6 text-sm opacity-90">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Terms of Use
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Data Protection
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Cookie Settings
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs opacity-75 pt-4 border-t border-background/20">
          <p>© 2025 Surprez Inc. All Rights Reserved. Hand-Crafted With Love For Creators Everywhere</p>
        </div>
      </div>
    </footer>
  )
}
