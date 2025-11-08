"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="glass-card border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,191,255,0.05),transparent_70%)]"></div>
      <div className="container py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Image
                src="/scimitar-logo.png"
                alt="Scimitar Solutions Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-xl text-blue-900 dark:text-white">Scimitar Solutions</span>
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Trusted Engineering & Integration Partner for
Aerospace & Defence
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2">
              {[
                "Bid & Proposal Management",
                "Marketing & Business Development",
                "Installation & Commissioning",
                "Aviation MRO Services"
              ].map((service, index) => (
                <motion.p
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                >
                  {service}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@scimitarsolutions.net</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+92 51 6167826</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">77-B, Street 10, Pakistan Colony, Banigala, Islamabad, Pakistan</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Scimitar Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
