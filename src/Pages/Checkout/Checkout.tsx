import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Separator } from "../../components/ui/separator"
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react'

interface CartItem {
  id: number
  company: string
  description: string
  price: number
}

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [cartItems] = useState<CartItem[]>([
    { id: 1, company: "TechCorp", description: "50% off annual subscription", price: 30 },
    { id: 2, company: "FitnessPro", description: "Buy one month, get one free", price: 24 },
  ])

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  const renderCartSummary = () => (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold">{item.company}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
        <Separator className="my-4" />
        <div className="flex justify-between items-center font-bold">
          <p>Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  )

  const renderShippingForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>Enter your email to receive your digital coupons</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setStep(2)} className="w-full">Continue to Payment</Button>
      </CardFooter>
    </Card>
  )

  const renderPaymentForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input id="nameOnCard" required />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setStep(3)} className="w-full">Place Order</Button>
      </CardFooter>
    </Card>
  )

  const renderOrderConfirmation = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" />
          Order Confirmed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Thank you for your purchase! Your coupons will be sent to your email shortly.</p>
        <p className="font-semibold">Order Number: #PK12345</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Return to Coupon Marketplace</Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" className="mr-4" onClick={() => setStep(Math.max(1, step - 1))}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-blue-600">PerkPass Checkout</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className={`flex md:w-full items-center ${step >= 1 ? 'text-blue-600 dark:text-blue-500' : ''} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${step >= 1 ? 'text-blue-600 dark:text-blue-500' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Shipping
                </span>
              </li>
              <li className={`flex md:w-full items-center ${step >= 2 ? 'text-blue-600 dark:text-blue-500' : ''} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${step >= 2 ? 'text-blue-600 dark:text-blue-500' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  Payment
                </span>
              </li>
              <li className={`flex items-center ${step >= 3 ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${step >= 3 ? 'text-blue-600 dark:text-blue-500' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                Confirmation
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {step === 1 && renderShippingForm()}
              {step === 2 && renderPaymentForm()}
              {step === 3 && renderOrderConfirmation()}
            </div>
            <div className="md:col-span-1">
              {renderCartSummary()}
            </div>
          </div>
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