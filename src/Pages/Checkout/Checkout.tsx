'use client'

import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Separator } from "../../components/ui/separator"
import { Lock, Banknote, CreditCardIcon } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Alert, AlertDescription } from "../../components/ui/alert"
import Footer from '../../components/shared/Footer'
import Navbar from '../../components/shared/Navbar'
import { SignedIn } from '@clerk/clerk-react'
import { SignedOut } from '@clerk/clerk-react'

interface CartItem {
  id: number
  company: string
  description: string
  price: number
}

interface OrderDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  zipCode: string
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  required: boolean;
}


export default function Checkout() {
  const [cartItems] = useState<CartItem[]>([
    { id: 1, company: "TechCorp", description: "50% off annual subscription", price: 30 },
    { id: 2, company: "FitnessPro", description: "Buy one month, get one free", price: 24 },
  ])

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card')
  const [loading, setLoading] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, ...rest }, ref) => (
    <input id={id} ref={ref} {...rest} />
  ));
  Input.displayName = 'Input';

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const orderDetails: OrderDetails = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      zipCode: formData.get('zipCode') as string,
    }

    if (paymentMethod === 'cod') {
      try {
        const response = await fetch('/api/place-cod-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderDetails,
            items: cartItems,
            total,
          }),
        })

        if (response.ok) {
          setOrderSuccess(true)
        } else {
          throw new Error('Failed to place order')
        }
      } catch (error) {
        console.error('Error placing order:', error)
        alert('There was an error placing your order. Please try again.')
      }
    } else {
      // Handle card payment logic here
      alert('Card payment processing would go here')
    }

    setLoading(false)
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-green-600">Order Placed Successfully!</CardTitle>
            <CardDescription className="text-center">
              We've sent the order details to your email and phone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertDescription>
                Please keep cash ready for delivery. Our delivery partner will contact you soon.
              </AlertDescription>
            </Alert>
            <Button
              className="w-full"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navbar/>
      <SignedIn>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Please enter your details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input className="firstName"
                       id="firstName" 
                       placeholder="John" 
                       required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input className="lastName" placeholder='Doe' required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input className="email" placeholder='johndoe@gmail.com' type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input className="phone" placeholder='1234567890' type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input className="address" placeholder='abc 5th street' required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input className="city" placeholder='New York' required />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input className="zipCode" placeholder='0082301' required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you want to pay</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup
                    defaultValue="card"
                    onValueChange={(value) => setPaymentMethod(value as 'card' | 'cod')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCardIcon className="mr-2 h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center">
                        <Banknote className="mr-2 h-4 w-4" />
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" placeholder="MM/YY" required/>
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123"  required/>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input id="cardholderName" placeholder="John Doe" required />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your order details</CardDescription>
                </CardHeader>
                <CardContent>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <div>
                        <p className="font-semibold">{item.company}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Tax</p>
                      <p>${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : `Place Order (${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Pay Now'})`}
                  </Button>
                </CardFooter>
              </Card>
              <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
                <Lock className="mr-2 h-4 w-4" />
                Your information is secure
              </div>
            </div>
          </div>
        </form>
      </main>
      </SignedIn>

      <SignedOut>
        <div className="text-center py-16">
          <h2>Please sign in to view and buy coupons.</h2>
        </div>
      </SignedOut>

      <Footer />
    </div>
  )
}