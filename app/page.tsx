import Link from "next/link"
import Hero from "@/components/hero"
import ServiceCard from "@/components/service-card"
import { FadeUp } from "@/components/animation-wrappers"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Vehicle Rentals"
        subtitle="Simple. Straightforward. Reliable."
        ctaText="Start Booking"
        ctaHref="/contact"
        backgroundImage="/images/erik-mclean-zrns2r5azu0-unsplash.jpg"
      />

      {/* Services Highlight Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 border-b-2 border-black pb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-700 text-sm">Choose from a wide range of vehicles for any journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Economy Cars"
              description="Fuel efficient and easy to park"
              features={["Affordable rates", "Good mileage", "Compact size"]}
            />
            <ServiceCard
              title="Family Vehicles"
              description="Spacious for the whole family"
              features={["Seats up to 7", "Extra storage", "Climate control"]}
            />
            <ServiceCard
              title="Luxury Cars"
              description="Premium travel in style"
              features={["Premium interiors", "Advanced tech", "Concierge service"]}
            />
            <ServiceCard
              title="Commercial Vans"
              description="For business and cargo needs"
              features={["Large cargo space", "Reliable", "Competitive rates"]}
            />
            <ServiceCard
              title="Trucks & Haulers"
              description="Heavy-duty solutions"
              features={["High capacity", "Powerful engine", "Professional grade"]}
            />
            <ServiceCard
              title="Long-term Leasing"
              description="Flexible lease options"
              features={["Monthly savings", "Maintenance included", "Easy upgrades"]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-100 border-y-2 border-black">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Why TransportHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold mb-1">Competitive Pricing</h3>
                <p className="text-sm text-gray-700">Transparent pricing with no hidden fees</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold mb-1">24/7 Support</h3>
                <p className="text-sm text-gray-700">Always available when you need us</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold mb-1">Well-Maintained Fleet</h3>
                <p className="text-sm text-gray-700">Regular service and inspection for safety</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold mb-1">Quick Booking</h3>
                <p className="text-sm text-gray-700">Book in minutes with our easy system</p>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <img
                src="/images/sara-kurfess-xcm3fgx8lb8-unsplash.jpg"
                alt="Fleet showcase"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 border-b-2 border-black pb-8">Customer Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "John Mitchell",
                role: "Business Owner",
                text: "TransportHub made corporate travel seamless and hassle-free.",
              },
              {
                name: "Sarah Johnson",
                role: "Tourist",
                text: "Smooth booking process and the car was in perfect condition.",
              },
              {
                name: "Michael Chen",
                role: "Event Manager",
                text: "Reliable service and great support for all our event needs.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border-2 border-black p-6 rounded-none">
                <p className="text-sm text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="border-t-2 border-black pt-4">
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white border-t-2 border-black">
        <div className="container-custom text-center">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Rent?</h2>
            <p className="text-sm mb-8 max-w-2xl mx-auto text-gray-300">
              Book your vehicle now and enjoy special rates on your first rental.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-colors duration-300 inline-block"
            >
              Book Your Ride
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
