import { Users, Zap, Star, ShoppingCart } from 'lucide-react'

const features = [
  {
    icon: ShoppingCart,
    title: 'Targeted Gift Buyers',
    description: 'Connect with customers actively searching for handmade gift items across our platform',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Delivery',
    description: 'Our logistics partners ensure your products reach customers quickly and safely, every time',
  },
  {
    icon: Users,
    title: 'Timely Payouts',
    description: 'Receive quick and reliable payment schedules to keep your business growing smoothly',
  },
  {
    icon: Star,
    title: 'Trusted Marketplace',
    description:
      'Join our verified platform with trusted buyers and secure payment protection for every transaction',
  },
]

export default function WhySellSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary tracking-wide mb-2">WHY SELL ON SURPREZ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to grow your gifting business
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We handle the complexities so you can focus on what you do best
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-full p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
