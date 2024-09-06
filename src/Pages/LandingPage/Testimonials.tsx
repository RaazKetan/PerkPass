// components/TestimonialsSection.js
import { Card, CardContent } from "../../components/ui/card"

const testimonials = [
  { name: "Sarah L.", role: "Employee", quote: "I've made over $500 selling my unused perks on PerkPass!" },
  { name: "Mike R.", role: "Coupon Explorer", quote: "I got a fantastic deal on a gym membership. Highly recommended!" },
  { name: "Emily T.", role: "HR Manager", quote: "PerkPass has increased the value of our employee benefits program." },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  )
}
