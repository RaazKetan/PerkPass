import React from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ArrowRight, Briefcase, DollarSign, Gift, Search, Shield, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">PerkPass</h1>
          <div className="space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Unlock Exclusive Discounts</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
          List your unused corporate perks or explore amazing deals
        </p>
      </header>

      {/* Login Options */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2" />
                For Employees
              </CardTitle>
              <CardDescription>List your unused corporate discount coupons</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                Employee Login / Sign Up
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2" />
                For Coupon Explorers
              </CardTitle>
              <CardDescription>Discover and purchase exclusive corporate discounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                Explorer Login / Sign Up
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PerkPass?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Exclusive Deals", description: "Access corporate discounts usually reserved for employees", icon: Gift },
              { title: "Extra Income", description: "Employees can monetize their unused perks", icon: DollarSign },
              { title: "Secure Platform", description: "Verified employees and secure transactions", icon: Shield },
              { title: "Win-Win", description: "Companies, employees, and the public all benefit", icon: Users },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">For Employees</h3>
              <ol className="space-y-4">
                {[
                  "Sign up and verify your employee status",
                  "List your unused corporate discount coupons",
                  "Set the price at 30% of the original discount value",
                  "Receive payment when your coupon is purchased",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">For Coupon Explorers</h3>
              <ol className="space-y-4">
                {[
                  "Sign up as a coupon explorer",
                  "Browse available corporate discounts",
                  "Purchase coupons at discounted rates",
                  "Redeem coupons and enjoy exclusive savings",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", role: "Employee", quote: "I've made over $500 selling my unused perks on PerkPass!" },
              { name: "Mike R.", role: "Coupon Explorer", quote: "I got a fantastic deal on a gym membership. Highly recommended!" },
              { name: "Emily T.", role: "HR Manager", quote: "PerkPass has increased the value of our employee benefits program." },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join PerkPass today and start listing or exploring exclusive discounts!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              List Your Coupons <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Explore Coupons <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PerkPass</h3>
              <p className="text-sm text-gray-400">Connecting employees and the public for amazing deals.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2023 PerkPass. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}