"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get the appropriate logo based on theme
  const getLogoSrc = () => {
    if (!mounted) {
      // Return default logo during SSR to prevent hydration mismatch
      return "/logo.png"
    }
    return resolvedTheme === "light" ? "/light-mode-logo.png" : "/logo.png"
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-background/80 dark:bg-background/80 border-b border-primary/10' 
          : 'bg-transparent backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3"
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={getLogoSrc()}
                alt="Scimitar Solutions Logo"
                width={52}
                height={52}
                className="object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary to-cyan-400 bg-clip-text text-transparent dark:text-white leading-tight">
                Scimitar Solutions
              </span>
              <span className="text-xs text-foreground/70 dark:text-white/70 hidden sm:block font-medium">
                Aviation & Defence
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item, index) => {
            const active = isActive(item.href)
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    active
                      ? 'text-primary font-bold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span className="relative z-20">{item.name}</span>
                  
                  {/* Active indicator */}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/15 rounded-lg border border-primary/30 z-0"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 z-0"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 h-1 bg-primary rounded-full z-10"
                    initial={{ width: 0, x: "-50%" }}
                    animate={active ? { width: "70%", x: "-50%" } : { width: 0, x: "-50%" }}
                    whileHover={{ width: "70%", x: "-50%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden glass-button"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[400px] p-0 [&>button]:hidden glass-card border-l border-primary/10"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between p-6 border-b border-primary/10"
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={getLogoSrc()}
                      alt="Scimitar Solutions Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-blue-900 dark:text-gray-100">
                        Scimitar Solutions
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Aviation & Defence
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </motion.div>
                </motion.div>
                
                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8 overflow-y-auto">
                  <div className="space-y-2">
                    {navigation.map((item, index) => {
                      const active = isActive(item.href)
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 group relative ${
                              active
                                ? 'text-primary bg-primary/10 border border-primary/20'
                                : 'text-foreground hover:text-primary hover:bg-muted/50'
                            } glass-button`}
                          >
                            <span className="relative z-10 flex items-center justify-between w-full">
                              {item.name}
                              {active && (
                                <motion.div
                                  layoutId="mobileActiveTab"
                                  className="absolute right-0 w-1.5 h-1.5 bg-primary rounded-full"
                                  initial={false}
                                />
                              )}
                            </span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>
                
                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="p-6 border-t border-primary/10 glass-card"
                >
                  <div className="space-y-4">
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-3">Get in touch</p>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="flex items-center space-x-2">
                          <span className="text-xs">📧</span>
                          <span className="text-xs">info@scimitarsolutions.net</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="text-xs">📞</span>
                          <span className="text-xs">+92 51 6167826</span>
                        </p>
                        <p className="text-xs pt-1">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
