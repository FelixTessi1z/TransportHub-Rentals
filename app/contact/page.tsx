"use client"

import type React from "react"

import { useState } from "react"
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/animation-wrappers"
import Hero from "@/components/hero"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Contact us for any inquiries or bookings"
        backgroundImage="/images/peter-broomfield-m3m-lnr90um-unsplash.jpg"
      />

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <SlideInLeft className="lg:col-span-2">
              <div>
                <FadeUp>
                  <h2 className="mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </FadeUp>

                {submitted && (
                  <FadeUp className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                  </FadeUp>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <FadeUp delay={0.1}>
                    <div>
                      <label htmlFor="name" className="block font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.2}>
                    <div>
                      <label htmlFor="email" className="block font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.3}>
                    <div>
                      <label htmlFor="phone" className="block font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.4}>
                    <div>
                      <label htmlFor="message" className="block font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your inquiry..."
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      />
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.5}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 inline-block w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </FadeUp>
                </form>
              </div>
            </SlideInLeft>

            {/* Contact Info */}
            <SlideInRight>
              <div className="space-y-8">
                <FadeUp delay={0.2}>
                  <div className="bg-light p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <div className="bg-light p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-gray-600 mb-2">info@transporthub.com</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <div className="bg-light p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Headquarters</h4>
                    <p className="text-gray-600 mb-2">123 Fleet Drive</p>
                    <p className="text-gray-600">Transport City, TC 12345</p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.5}>
                  <div className="bg-light p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Sun: By appointment</p>
                  </div>
                </FadeUp>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Branches List Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Our Branches</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.15}>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  city: "Downtown Location",
                  address: "123 Fleet Drive, Transport City",
                  phone: "+1 (555) 123-4567",
                },
                {
                  city: "Airport Branch",
                  address: "456 Aviation Blvd, TC Airport",
                  phone: "+1 (555) 234-5678",
                },
                {
                  city: "Midtown Hub",
                  address: "789 Central Ave, Transport City",
                  phone: "+1 (555) 345-6789",
                },
                {
                  city: "Waterfront Station",
                  address: "321 Harbor Lane, Transport City",
                  phone: "+1 (555) 456-7890",
                },
                {
                  city: "North Branch",
                  address: "654 North St, North District",
                  phone: "+1 (555) 567-8901",
                },
                {
                  city: "South Plaza",
                  address: "987 South Rd, South District",
                  phone: "+1 (555) 678-9012",
                },
              ].map((branch, index) => (
                <StaggerItem key={index}>
                  <li className="card p-6">
                    <h4 className="font-semibold mb-2">{branch.city}</h4>
                    <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                    <p className="text-primary font-semibold text-sm">{branch.phone}</p>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>
      </section>

      {/* Service Zones Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Our Service Zones</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We operate in the following service zones. Contact us for deliveries outside these areas.
            </p>
          </FadeUp>

          <div className="max-w-2xl mx-auto">
            <FadeUp delay={0.2}>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">1.</span>
                  <span className="text-gray-700">Downtown Metropolitan Area - All districts and neighborhoods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">2.</span>
                  <span className="text-gray-700">Airport Terminal Zone - Includes all terminal pickup points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">3.</span>
                  <span className="text-gray-700">
                    University District - Campus areas and surrounding neighborhoods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">4.</span>
                  <span className="text-gray-700">Harbor District - Waterfront and harbor areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">5.</span>
                  <span className="text-gray-700">Business Park - Corporate and industrial zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">6.</span>
                  <span className="text-gray-700">Suburban Outskirts - Extended service areas within 30 miles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary bg-light px-3 py-1 rounded min-w-fit">7.</span>
                  <span className="text-gray-700">Highway Corridor - Interstate and major highway access points</span>
                </li>
              </ol>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <FadeUp>
            <h2 className="text-center mb-12">Find Us on the Map</h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-lg overflow-hidden h-96 bg-gradient-primary">
              <img
                src="/images/sara-kurfess-xcm3fgx8lb8-unsplash.jpg"
                alt="TransportHub locations map"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <FadeUp>
            <h2 className="text-center mb-12">Contact FAQs</h2>
          </FadeUp>

          <StaggerContainer staggerDelay={0.1}>
            <div className="space-y-4">
              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">What are your customer service hours?</h4>
                  <p className="text-gray-600 text-sm">
                    We're available 24/7 for emergencies and roadside assistance. For general inquiries, we're open
                    Mon-Fri 8 AM-6 PM, Sat 9 AM-5 PM.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">How quickly will you respond to my inquiry?</h4>
                  <p className="text-gray-600 text-sm">
                    We aim to respond to all emails within 2 hours during business hours. For urgent matters, call our
                    hotline directly.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="card p-6">
                  <h4 className="font-semibold mb-2">Do you offer delivery outside our service zones?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we can arrange deliveries to areas outside our standard zones. Please contact us for a custom
                    quote and delivery timeline.
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
