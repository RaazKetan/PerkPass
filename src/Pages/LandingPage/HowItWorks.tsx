// components/HowItWorksSection.js
export default function HowItWorksSection() {
    const employeeSteps = [
      "Sign up and verify your employee status",
      "List your unused corporate discount coupons",
      "Set the price at 30% of the original discount value",
      "Receive payment when your coupon is purchased",
    ]
  
    const explorerSteps = [
      "Sign up as a coupon explorer",
      "Browse available corporate discounts",
      "Purchase coupons at discounted rates",
      "Redeem coupons and enjoy exclusive savings",
    ]
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <HowItWorksSteps title="For Employees" steps={employeeSteps} />
            <HowItWorksSteps title="For Coupon Explorers" steps={explorerSteps} />
          </div>
        </div>
      </section>
    )
  }
  
  function HowItWorksSteps({ title, steps }: { title: string, steps: string[] }) {
    return (
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  }
  