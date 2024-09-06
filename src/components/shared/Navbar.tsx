// components/Navbar.js
import { Button } from "../ui/button"
import { Briefcase, Search, ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const isBuyCouponsPage = location.pathname === "/buy-coupons"

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>
        <div className="space-x-4 flex">
          <Button variant="outline" className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Register Coupons
          </Button>
          {isBuyCouponsPage ? (
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center text-slate-100">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart (0)
            </Button>
            {/* <Button variant="ghost" className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button> */}
          </div>
        ) : 
        <Link to="/buy-coupons">
          <Button variant="default" className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            Buy Coupons
          </Button>
          </Link>}
        </div>
      </div>
    </nav>
  )
}
