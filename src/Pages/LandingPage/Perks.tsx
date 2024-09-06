import { Button } from "../../components/ui/button";
import { ArrowRight } from 'lucide-react';

export default function Perks() {
return(
  <section className="bg-blue-600 text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-xl mb-8">Join PerkPass today and start listing or exploring exclusive discounts!</p>
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
        Register Coupons <ArrowRight className="ml-2" />
      </Button>
      <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
        Buy Coupons <ArrowRight className="ml-2" />
      </Button>
    </div>
  </div>
</section>
)
}