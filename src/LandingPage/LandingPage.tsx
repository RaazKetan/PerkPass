
import HeroSection from "../components/shared/Hero"
import Navbar from "../components/shared/Navbar"
import FeatureSection from "../components/shared/FeatureSection"
import Testimonials from "../components/shared/Testimonials"
import HowItWorksSection from "../components/shared/HowItWorks"
import Perks from "../components/shared/Perks"
import Footer from "../components/shared/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Feature Highlights */}
      <FeatureSection/>

      {/* How It Works */}
    <HowItWorksSection/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Call to Action */}
     <Perks/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}