import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Security from '@/components/Security'
import Showcase from '@/components/Showcase'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Security />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  )
}