"use client"

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, Shield, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroSlider } from "@/components/hero-slider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 gradient-ocean-subtle"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,206,209,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,191,255,0.03)_50%,transparent_100%)]"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent mb-4">
                Why Choose Scimitar Solutions?
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto leading-relaxed"
            >
              Your trusted partner for entering and operating in Pakistan&apos;s Aviation and Defence sectors
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial={mounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate={mounted ? undefined : "visible"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {[
              {
                icon: <Shield className="h-7 w-7 text-primary" />,
                title: "Regulatory Expertise",
                description: "Deep understanding of Pakistan&apos;s aviation and defence regulations, ensuring full compliance and successful market entry",
                gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
                iconBg: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: <Settings className="h-7 w-7 text-primary" />,
                title: "Technical Excellence",
                description: "Proven track record in installation, commissioning, and MRO services for NAVAIDS, drones, and naval systems",
                gradient: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
                iconBg: "from-cyan-500/20 to-teal-500/20"
              },
              {
                icon: <Plane className="h-7 w-7 text-primary" />,
                title: "Local Representation",
                description: "Comprehensive in-country support including bid management, business development, and stakeholder engagement",
                gradient: "from-teal-500/20 via-blue-500/20 to-cyan-500/20",
                iconBg: "from-teal-500/20 to-blue-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full"
              >
                <Card className="relative h-full glass-card hover:shadow-2xl transition-all duration-500 border-primary/30 bg-card/95 dark:bg-card/90 overflow-hidden group">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
                  
                  <CardHeader className="relative z-10 pb-6">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.iconBg} glass-button border border-primary/20 group-hover:border-primary/40 transition-all duration-300`}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,206,209,0.05),transparent_50%)]"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for foreign companies in Pakistan&apos;s Aviation and Defence sectors
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={mounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            animate={mounted ? undefined : "visible"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              {
                title: "Bid & Proposal Management",
                description: "Navigate Pakistan&apos;s procurement landscape with confidence",
                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                image: "/images/aircraft2.jpg",
                imageAlt: "Aircraft procurement"
              },
              {
                title: "Marketing & Business Development",
                description: "Strategic outreach to government and private sector stakeholders",
                icon: <ArrowRight className="h-6 w-6 text-primary" />,
                image: "/images/aircraft3.jpg",
                imageAlt: "Business development"
              },
              {
                title: "Installation & Commissioning",
                description: "Technical deployment of NAVAIDS, drones, and naval systems",
                icon: <Settings className="h-6 w-6 text-primary" />,
                image: "/images/drone1.jpg",
                imageAlt: "Drone installation"
              },
              {
                title: "Aviation MRO Services",
                description: "Maintenance, repair, and overhaul for aircraft and ground support",
                icon: <Plane className="h-6 w-6 text-primary" />,
                image: "/images/aircraft-maintenance.jpg",
                imageAlt: "Aircraft maintenance"
              },
              {
                title: "Operations & Logistics",
                description: "End-to-end support for mission-critical operations",
                icon: <Shield className="h-6 w-6 text-primary" />,
                image: "/images/naval-ship1.jpg",
                imageAlt: "Naval operations"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center h-full glass-card hover:shadow-2xl transition-all duration-300 border-primary/20 bg-card/95 dark:bg-card/90 overflow-hidden group">
                  {/* Service Image */}
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-foreground/80 dark:text-foreground/70">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" asChild className="glass-button shadow-xl text-foreground font-semibold">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 text-foreground" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/20 relative overflow-hidden">
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,191,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,206,209,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(0,191,255,0.03)_50%,transparent_100%)]"></div>
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="container relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Ready to Enter Pakistan&apos;s{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  Market?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can help you achieve your goals in Pakistan&apos;s Aviation and Defence sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="shadow-xl glass-button bg-primary hover:bg-primary/90 text-black font-semibold px-8">
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 text-black" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 shadow-xl font-semibold px-8" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
