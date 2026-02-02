'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RegistrationHeader() {
  return (
    <header className="w-full bg-primary text-white py-3 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          Surprez
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/help" className="text-sm hover:opacity-90">
            Help
          </Link>
          <Link href="/support" className="text-sm hover:opacity-90">
            Contact Support
          </Link>
          <Button
            variant="outline"
            className="text-primary border-white hover:bg-white hover:text-primary bg-transparent"
          >
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  )
}
