import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animation-wrappers"
import Hero from "@/components/hero"
import ServiceCard from "@/components/service-card"

export const metadata = {
  title: "Services - TransportHub",
  description: "Explore our comprehensive vehicle rental services for all your transportation needs.",
}

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="A complete range of vehicle rental solutions tailored to your needs"
        backgroundImage="/images/ildar-garifullin-ceyfl-1yhra-unsplash.jpg"
      />

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Vehicle Categories</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <StaggerItem>
                <ServiceCard
                  title="Economy Cars"
                  description="Compact and fuel-efficient vehicles perfect for solo travelers and city driving"
                  features={["Automatic transmission", "Air conditioning", "Backup camera", "Insurance included"]}
                />
              </StaggerItem>

              <StaggerItem>
                <ServiceCard
                  title="Compact SUVs"
                  description="Versatile SUVs combining comfort and off-road capability"
                  features={["All-wheel drive", "Higher clearance", "Spacious interior", "Towing capacity"]}
                />
              </StaggerItem>

              <StaggerItem>
                <ServiceCard
                  title="Family Vehicles"
                  description="Spacious vehicles designed for group travel and family trips"
                  features={["Seats 7-8 passengers", "DVD entertainment", "Extra storage", "Climate zones"]}
                />
              </StaggerItem>

              <StaggerItem>
                <ServiceCard
                  title="Luxury Sedans"
                  description="Premium vehicles for a sophisticated travel experience"
                  features={["Leather interiors", "Premium sound system", "Advanced tech", "Concierge service"]}
                />
              </StaggerItem>

              <StaggerItem>
                <ServiceCard
                  title="Commercial Vans"
                  description="Professional-grade vans for business and cargo needs"
                  features={["Large cargo bay", "Reliable engines", "Competitive rates", "24/7 support"]}
                />
              </StaggerItem>

              <StaggerItem>
                <ServiceCard
                  title="Trucks & Haulers"
                  description="Heavy-duty solutions for construction and transport needs"
                  features={["High towing capacity", "Powerful engine", "Professional grade", "Cargo insurance"]}
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">How Our Rental Process Works</h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              <FadeUp delay={0.1}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Browse Our Fleet</h4>
                    <p className="text-gray-600">
                      Visit our website or showroom to explore our wide selection of vehicles. Filter by category,
                      price, and features to find the perfect match for your needs.
                    </p>
                  </div>
                </li>
              </FadeUp>

              <FadeUp delay={0.2}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Select Dates & Rental Period</h4>
                    <p className="text-gray-600">
                      Choose your rental dates and duration. We offer hourly, daily, weekly, and monthly rental options
                      to suit your schedule.
                    </p>
                  </div>
                </li>
              </FadeUp>

              <FadeUp delay={0.3}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Booking & Payment</h4>
                    <p className="text-gray-600">
                      Finalize your reservation with our secure online booking system. Accept our rental terms and
                      complete payment via your preferred method.
                    </p>
                  </div>
                </li>
              </FadeUp>

              <FadeUp delay={0.4}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vehicle Pickup</h4>
                    <p className="text-gray-600">
                      Visit our location at your scheduled time. Our team will prepare the vehicle, explain features,
                      and complete a quick vehicle walkthrough.
                    </p>
                  </div>
                </li>
              </FadeUp>

              <FadeUp delay={0.5}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enjoy Your Journey</h4>
                    <p className="text-gray-600">
                      Drive with confidence! Our 24/7 support team is available if you need any assistance during your
                      rental period.
                    </p>
                  </div>
                </li>
              </FadeUp>

              <FadeUp delay={0.6}>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Return & Checkout</h4>
                    <p className="text-gray-600">
                      Return the vehicle at the scheduled time. Quick inspection, final payment settling, and you're all
                      set! Join our loyalty program for future benefits.
                    </p>
                  </div>
                </li>
              </FadeUp>
            </ol>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Additional Services & Add-ons</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">GPS Navigation Systems</h4>
                  <p className="text-gray-600 mb-3">Advanced GPS with real-time traffic updates</p>
                  <p className="font-semibold text-primary">$5/day</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">Child Safety Seats</h4>
                  <p className="text-gray-600 mb-3">Certified safety seats for children of various ages</p>
                  <p className="font-semibold text-primary">$3/day</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">Additional Driver</h4>
                  <p className="text-gray-600 mb-3">Add an authorized driver to your rental agreement</p>
                  <p className="font-semibold text-primary">$4/day</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">Fuel Service</h4>
                  <p className="text-gray-600 mb-3">Return with full tank or pre-purchase fuel package</p>
                  <p className="font-semibold text-primary">Pay at market rate</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">Airport Delivery</h4>
                  <p className="text-gray-600 mb-3">Vehicle delivered and returned at airport terminals</p>
                  <p className="font-semibold text-primary">$25/delivery</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="mb-2">Premium Insurance</h4>
                  <p className="text-gray-600 mb-3">Enhanced coverage with zero deductible</p>
                  <p className="font-semibold text-primary">$8/day</p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
