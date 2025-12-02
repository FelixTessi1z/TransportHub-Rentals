import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/animation-wrappers"
import Hero from "@/components/hero"

export const metadata = {
  title: "Pricing - TransportHub",
  description: "Transparent and competitive pricing for all our vehicle rental options.",
}

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Simple & Transparent Pricing"
        subtitle="Competitive rates with no hidden fees"
        backgroundImage="/images/obi-azkjevydrnm-unsplash.jpg"
      />

      {/* Pricing Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="mb-4">Choose Your Perfect Rental Plan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select the plan that best fits your needs. All plans include insurance, roadside assistance, and 24/7
                support.
              </p>
            </div>
          </FadeUp>

          {/* Pricing Tier Cards */}
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Economy Plan */}
              <StaggerItem>
                <div className="card p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Economy</h3>
                    <p className="text-gray-600 text-sm">Perfect for solo travelers</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold text-primary">$35</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Weekly: $200 | Monthly: $750</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Economy Car</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Fuel efficient</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Easy to park</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Basic insurance</span>
                    </li>
                  </ul>

                  <a
                    href="/contact"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
                  >
                    Book Now
                  </a>
                </div>
              </StaggerItem>

              {/* Standard Plan - Featured */}
              <StaggerItem>
                <div className="card p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border-2 border-primary relative scale-105 md:scale-100 md:transform md:translate-y-4 lg:scale-105 lg:translate-y-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                  <div className="mb-6 pt-2">
                    <h3 className="text-xl font-bold mb-2">Standard</h3>
                    <p className="text-gray-600 text-sm">Best for families</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold text-primary">$75</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Weekly: $420 | Monthly: $1,600</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Family Vehicle (7-seater)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Spacious interior</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Climate control</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Premium insurance</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Free GPS</span>
                    </li>
                  </ul>

                  <a
                    href="/contact"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
                  >
                    Book Now
                  </a>
                </div>
              </StaggerItem>

              {/* Premium Plan */}
              <StaggerItem>
                <div className="card p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Premium</h3>
                    <p className="text-gray-600 text-sm">Luxury experience</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-bold text-primary">$95</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Weekly: $540 | Monthly: $2,000</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Luxury Sedan</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Premium interiors</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Advanced features</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">Concierge service</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700 text-sm">VIP support</span>
                    </li>
                  </ul>

                  <a
                    href="/contact"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
                  >
                    Book Now
                  </a>
                </div>
              </StaggerItem>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Special Offers & Discounts</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="card p-6 border-t-4 border-primary">
                  <h4 className="mb-2">Long-term Discount</h4>
                  <p className="text-gray-600 mb-4 text-sm">Monthly rentals get 20% off regular rates</p>
                  <p className="text-2xl font-bold text-primary">20% OFF</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6 border-t-4 border-secondary">
                  <h4 className="mb-2">Corporate Program</h4>
                  <p className="text-gray-600 mb-4 text-sm">Flexible billing and dedicated support for businesses</p>
                  <p className="text-2xl font-bold text-secondary">Up to 15% OFF</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6 border-t-4 border-primary">
                  <h4 className="mb-2">Loyalty Rewards</h4>
                  <p className="text-gray-600 mb-4 text-sm">Earn points on every rental, redeem for discounts</p>
                  <p className="text-2xl font-bold text-primary">1 POINT PER $1</p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideInLeft>
              <div>
                <h3 className="mb-6">What's Included in Every Rental</h3>
                <ul className="space-y-3">
                  {[
                    "Basic insurance coverage",
                    "Unlimited mileage",
                    "Roadside assistance 24/7",
                    "Free GPS navigation system",
                    "Vehicle maintenance & repairs",
                    "Comprehensive accident support",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div>
                <h3 className="mb-6">Optional Add-ons</h3>
                <ul className="space-y-3">
                  {[
                    "Premium collision waiver (CDW)",
                    "Additional driver",
                    "Child safety seats",
                    "Airport delivery/pickup",
                    "Premium fuel package",
                    "VIP concierge service",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-secondary font-bold text-lg">+</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <aside className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8 text-center">
            <FadeUp>
              <h3 className="text-white mb-4">Book Your First Rental Today</h3>
              <p className="mb-6 text-gray-100">
                Get 10% off your first booking when you sign up for our loyalty program. No hidden fees, transparent
                pricing, and 24/7 support.
              </p>
              <a
                href="/contact"
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300 inline-block"
              >
                Get 10% Off Now
              </a>
            </FadeUp>
          </aside>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <FadeUp>
            <h3 className="text-center mb-12">Pricing FAQs</h3>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1}>
            <div className="space-y-4">
              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">Are taxes included in the quoted price?</h4>
                  <p className="text-gray-600 text-sm">
                    No, all quoted prices are before applicable taxes. Sales tax will be added at checkout based on your
                    location.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">Can I modify my booking after payment?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, you can modify your booking up to 24 hours before pickup. Changes may incur adjustment fees.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-600 text-sm">
                    We accept all major credit cards, debit cards, digital wallets, and bank transfers for corporate
                    clients.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
