import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"


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

export default function CouponsCard() {
    return(
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
    )
}