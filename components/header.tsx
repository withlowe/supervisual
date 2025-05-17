"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Works", href: "/works" },
    { name: "Notes", href: "/notes" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-8">
            Supervisual
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <Link href="/shop" className="p-2">
            <ShoppingBag className="h-5 w-5" />
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                    Supervisual
                  </Link>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
