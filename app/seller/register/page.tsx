'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RegistrationHeader from '@/components/registration-header'
import ProgressIndicator from '@/components/progress-indicator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContinue = () => {
    router.push('/register/step-2')
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <RegistrationHeader />
      <ProgressIndicator step={1} />

      <main className="flex-1 px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-2xl mx-auto relative">
          {/* Decorative confetti background */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <svg
              viewBox="0 0 1200 800"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Colorful decorative elements */}
              <circle cx="100" cy="150" r="40" fill="#FF69B4" />
              <path d="M150 200 L180 250 Q200 270 150 290" fill="#87CEEB" />
              <rect x="200" y="100" width="30" height="30" fill="#FFD700" />
              <circle cx="300" cy="300" r="25" fill="#FF69B4" />
              <path d="M350 150 L380 200 Q400 220 350 240" fill="#87CEEB" />
              <circle cx="1100" cy="500" r="35" fill="#FF69B4" />
              <path d="M1000 600 L1030 650 Q1050 670 1000 690" fill="#87CEEB" />
              <rect x="1050" y="400" width="25" height="25" fill="#FFD700" />
            </svg>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                Create your seller account
              </h1>
              <p className="text-gray-600">
                Set up your account and start selling in a few steps
              </p>
            </div>

            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-muted border-0 placeholder:text-gray-400"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-muted border-0 placeholder:text-gray-400"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  placeholder="+91 98765 43210"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full bg-muted border-0 placeholder:text-gray-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-muted border-0 placeholder:text-gray-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Continue Button */}
              <Button
                type="button"
                onClick={handleContinue}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-lg mt-8"
              >
                Register & Continue
              </Button>
            </form>

            {/* Sign In Link */}
            <p className="text-center text-gray-600 mt-6">
              Already registered?{' '}
              <a href="#" className="text-primary font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
