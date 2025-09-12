"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl">MarketingPro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0 [&>button]:hidden">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">M</span>
                    </div>
                    <span className="font-bold text-xl">MarketingPro</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Additional Mobile Menu Items */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="space-y-1">
                      <Link
                        href="/services"
                        className="flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>Our Services</span>
                      </Link>
                      <Link
                        href="/projects"
                        className="flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>Our Projects</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>Get Free Consultation</span>
                      </Link>
                    </div>
                  </div>
                </nav>
                
                {/* Footer */}
                <div className="p-6 border-t bg-muted/30">
                  <div className="space-y-6">
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-2">Get in touch</p>
                      <div className="space-y-1 text-muted-foreground">
                        <p>info@marketingpro.com</p>
                        <p>+1 (555) 123-4567</p>
                        <p className="text-xs">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                        asChild
                      >
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                        asChild
                      >
                        <Link href="/contact">Get Free Quote</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
