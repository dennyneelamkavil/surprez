import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export default function StandardsBanner() {
  return (
    <section className="w-full bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="flex items-start gap-4 flex-1">
            <Shield className="w-8 h-8 text-primary-foreground flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-primary-foreground mb-2">
                Only original, handmade, and high quality gift products are allowed.
              </h3>
              <p className="text-sm text-primary-foreground/90 max-w-xl">
                We maintain high standards to ensure the best experience for our community of Talented
                Makers.
              </p>
            </div>
          </div>

          {/* Right button */}
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/20 font-semibold whitespace-nowrap"
          >
            Learn More About Our Standards →
          </Button>
        </div>
      </div>
    </section>
  )
}
