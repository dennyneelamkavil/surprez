import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero'
import WhySellSection from '@/components/sections/why-sell'
import HowItWorksSection from '@/components/sections/how-it-works'
import ShowcaseSection from '@/components/sections/showcase'
import StandardsBanner from '@/components/sections/standards-banner'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhySellSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <StandardsBanner />
      </main>
      <Footer />
    </div>
  )
}
