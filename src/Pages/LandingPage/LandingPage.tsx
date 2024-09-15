
import HeroSection from "./Hero"
import Navbar from "../../components/shared/Navbar"
import FeatureSection from "./FeatureSection"
import Testimonials from "./Testimonials"
import HowItWorksSection from "./HowItWorks"
import Perks from "./Perks"
// import { Button } from "../../components/ui/button"
import Footer from "../../components/shared/Footer"
// import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react"

export default function LandingPage() {
  // const {isSignedIn} = useUser()
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>

      {/* {!isSignedIn && (
       <div className="flex justify-center py-8 space-x-4">
       <SignInButton mode="modal">
         <Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Login</Button>
       </SignInButton>
       <SignUpButton mode="modal">
         <Button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">Signup</Button>
       </SignUpButton>
     </div>

      )} */}

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