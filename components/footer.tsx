import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-dark font-bold">
                TH
              </div>
              <span className="font-bold text-lg">TransportHub</span>
            </div>
            <p className="text-gray-400">Your trusted partner for premium vehicle rentals worldwide.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-secondary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Car Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Van Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Truck Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Long-term Leasing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@transporthub.com</p>
            <p className="text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400">Available 24/7 for your queries</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} TransportHub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
