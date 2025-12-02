import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/animation-wrappers"
import Hero from "@/components/hero"

export const metadata = {
  title: "About Us - TransportHub",
  description: "Learn about TransportHub's mission, values, and commitment to excellence in vehicle rentals.",
}

const founder = { name: "Felix Kwadwo Junior", title: "Founder & CEO" }

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About TransportHub"
        subtitle="Redefining mobility and customer experience"
        backgroundImage="/images/peter-broomfield-m3m-lnr90um-unsplash.jpg"
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <SlideInLeft>
              <div>
                <h2 className="mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  At TransportHub, we believe that reliable transportation should be accessible, affordable, and
                  hassle-free. Our mission is to empower travelers and businesses with a diverse fleet of premium
                  vehicles backed by exceptional service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to setting new standards in the rental industry by combining cutting-edge technology,
                  transparent pricing, and personalized customer care.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="bg-light rounded-lg p-8">
                <h3 className="mb-4 text-primary">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Transparent pricing with no hidden fees",
                    "24/7 customer support and roadside assistance",
                    "Carefully maintained fleet with latest technology",
                    "Competitive rates for all budget ranges",
                    "Easy booking and flexible rental terms",
                    "Insurance and protection plans included",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Meet Our Leadership</h2>
          </FadeUp>
          <div className="max-w-4xl mx-auto">
            <StaggerItem>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/the-20profile-20pic.png"
                      alt={founder.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-xl text-primary font-semibold mb-6">{founder.title}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      With over 5 years of experience in the transportation and hospitality industries, Felix founded
                      TransportHub to revolutionize how people rent vehicles. His vision is to create a seamless,
                      customer-centric platform that prioritizes reliability and excellence.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Felix's leadership has guided TransportHub to become a trusted name in vehicle rentals, serving
                      thousands of satisfied customers across multiple regions. He remains deeply involved in shaping
                      our company culture and ensuring every interaction with our brand exceeds expectations.
                    </p>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-2xl font-bold text-primary">5+</p>
                        <p className="text-sm text-gray-600">Years Experience</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">10k+</p>
                        <p className="text-sm text-gray-600">Happy Customers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">500+</p>
                        <p className="text-sm text-gray-600">Active Vehicles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Our Core Values</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">🎯</div>
                  <h4 className="font-bold mb-3 text-lg">Customer First</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every decision we make is guided by what's best for our customers, ensuring satisfaction and trust.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">💎</div>
                  <h4 className="font-bold mb-3 text-lg">Excellence</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We maintain the highest standards in vehicle quality, service delivery, and professional conduct.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">🤝</div>
                  <h4 className="font-bold mb-3 text-lg">Integrity</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transparent communication and honest dealings form the foundation of our business relationships.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">🚀</div>
                  <h4 className="font-bold mb-3 text-lg">Innovation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We continuously evolve our offerings with cutting-edge technology and industry best practices.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">🌍</div>
                  <h4 className="font-bold mb-3 text-lg">Sustainability</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We're committed to environmentally responsible practices and offer eco-friendly vehicle options.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">👥</div>
                  <h4 className="font-bold mb-3 text-lg">Community</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We support local communities through partnerships and corporate social responsibility initiatives.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center text-white">
              <h3 className="text-white mb-4">Ready to Experience Premium Vehicle Rentals?</h3>
              <p className="mb-8 max-w-2xl mx-auto text-gray-100">
                Join thousands of satisfied customers who trust TransportHub for their transportation needs.
              </p>
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 inline-block"
              >
                Book Your Next Rental
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

export default AboutPage
