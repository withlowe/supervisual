import Link from "next/link"
import { Instagram, Twitter, Youtube, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white mt-24 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-6">Supervisual</h3>
            <p className="text-gray-400 max-w-xs">Simple, powerful ideas visualized in black and white.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/works" className="text-gray-400 hover:text-white transition-colors">
                Works
              </Link>
              <Link href="/notes" className="text-gray-400 hover:text-white transition-colors">
                Notes
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="mailto:hello@supervisual.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Supervisual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
