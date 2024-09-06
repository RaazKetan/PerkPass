
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Search, Filter, ShoppingCart } from 'lucide-react'
import Navbar from "../components/shared/Navbar"

interface Coupon {
  id: number
  company: string
  description: string
  originalPrice: number
  discountedPrice: number
  expiryDate: string
  category: string
  image: string
}

const coupons: Coupon[] = [
  { id: 1, company: "Nike", description: "50% off annual subscription", originalPrice: 1000, discountedPrice: 300, expiryDate: "2023-12-31", category: "Software", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, company: "Adidas", description: "Buy one month, get one free", originalPrice: 800, discountedPrice: 240, expiryDate: "2023-11-30", category: "Fitness", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, company: "Myntra", description: "20% off sustainable products", originalPrice: 500, discountedPrice: 150, expiryDate: "2023-10-31", category: "Lifestyle", image: "/placeholder.svg?height=250&width=300" },
  { id: 4, company: "GeekForGeeks", description: "Free dessert with any main course", originalPrice: 300, discountedPrice: 90, expiryDate: "2023-09-30", category: "Food", image: "/placeholder.svg?height=180&width=300" },
  { id: 5, company: "Ajio", description: "10% off flight bookings", originalPrice: 2000, discountedPrice: 600, expiryDate: "2023-12-15", category: "Travel", image: "/placeholder.svg?height=280&width=300" },
  { id: 6, company: "Amazon", description: "3 months free on annual subscriptions", originalPrice: 1200, discountedPrice: 360, expiryDate: "2023-11-15", category: "Education", image: "/placeholder.svg?height=220&width=300" },
]

export default function BuyCoupons() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>
          <Button variant="ghost" className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart (0)
          </Button>
        </div>
      </header> */}
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Available Coupons</h2>
          <div className="flex w-full md:w-auto space-x-2">
            <div className="relative flex-grow md:flex-grow-0">
              <Input type="text" className="pl-10 pr-4 py-2" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {coupons.map((coupon) => (
            <Card key={coupon.id} className="flex flex-col">
              <img src={coupon.image} alt={coupon.company} className="w-full h-auto object-cover rounded-t-lg" />
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{coupon.company}</span>
                  <Badge>{coupon.category}</Badge>
                </CardTitle>
                <CardDescription>{coupon.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold text-green-600">₹{coupon.discountedPrice}</p>
                <p className="text-sm text-gray-500 line-through">₹{coupon.originalPrice}</p>
                <p className="text-sm text-gray-600 mt-2">Expires: {coupon.expiryDate}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PerkPass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}