// components/FeatureSection.js
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Gift, DollarSign, Shield, Users } from "lucide-react"

const features = [
  { title: "Exclusive Deals", description: "Access corporate discounts usually reserved for employees", icon: Gift },
  { title: "Extra Income", description: "Employees can monetize their unused perks", icon: DollarSign },
  { title: "Secure Platform", description: "Verified employees and secure transactions", icon: Shield },
  { title: "Win-Win", description: "Companies, employees, and the public all benefit", icon: Users },
]

export default function FeatureSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PerkPass?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
