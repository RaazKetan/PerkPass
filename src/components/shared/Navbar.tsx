// components/Navbar.js
import { Button } from "../ui/button"
import { Briefcase, Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>
        <div className="space-x-4 flex">
          <Button variant="outline" className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Register Coupons
          </Button>
          <Button variant="default" className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            Buy Coupons
          </Button>
        </div>
      </div>
    </nav>
  )
}
