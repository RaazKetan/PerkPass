// components/HeroSection.js
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Unlock Exclusive Discounts</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-600">
        List your unused corporate perks or explore amazing deals
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button size="lg" className="text-lg px-8 py-6">
          Learn More <ArrowRight className="ml-2" />
        </Button>
      </div>
    </header>
  )
}
