import { Button } from "../../components/ui/button"
// import { Input } from "../../components/ui/input"
import { Filter} from 'lucide-react'
import CouponsCard from "./CouponsCard"

export default function CouponsMain() {
    return(
        <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Available Coupons</h2>
          <div className="flex w-full md:w-auto space-x-2">
            <div className="relative flex-grow md:flex-grow-0">
              {/* <Input type="text" className="pl-10 pr-4 py-2" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>

    {/* Coupon Card */}
       <CouponsCard/>

      </main>
    )
}