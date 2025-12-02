"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Book Now",
  ctaHref = "/contact",
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative bg-white border-b-2 border-black py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg mb-8 text-gray-100 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href={ctaHref}
              className="px-8 py-3 bg-white text-black font-semibold rounded-none hover:bg-gray-200 transition-colors duration-300 inline-block"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
