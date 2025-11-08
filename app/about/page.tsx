"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Award, TrendingUp, CheckCircle, Plane, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-ocean-subtle relative overflow-hidden">
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,206,209,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,191,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,191,255,0.05)_50%,transparent_100%)]"></div>
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"
        ></motion.div>
        
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            {/* Decorative line above title */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"
            ></motion.div>
            
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground dark:text-white">About</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Scimitar Solutions
                </span>
              </h1>
              
              {/* Underline accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-primary to-cyan-400 mx-auto rounded-full"
              ></motion.div>
            </motion.div>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 dark:text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
                Your trusted partner for entering and operating in Pakistan&apos;s Aviation and Defence sectors.
              </p>
              <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                We specialize in supporting foreign companies with strategic representation, regulatory navigation, and technical deployment.
              </p>
            </motion.div>
            
            {/* Decorative elements below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/50"></div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-primary rounded-full"
              ></motion.div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400/50"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={mounted ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Scimitar Solutions offers a specialized suite of services designed to support 
                foreign companies entering and operating within Pakistan&apos;s Aviation and Defence sectors. 
                Our expertise spans strategic representation, regulatory navigation, and technical deployment.
              </p>
              <p className="text-lg text-muted-foreground">
                We understand the unique challenges of operating in Pakistan&apos;s specialized sectors. 
                Our team combines deep local knowledge with international best practices to ensure 
                your success in navigating complex regulatory environments, building strategic relationships, 
                and delivering technical excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="glass-button text-foreground font-semibold">
                    <Link href="/contact">Work With Us</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild className="glass-button text-foreground border-foreground/20 hover:bg-foreground/5 font-semibold">
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={mounted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="aspect-square rounded-2xl overflow-hidden glass-card relative group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/aircraft3.jpg"
                    alt="Aviation and Defence"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center space-y-4 z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center mx-auto glass-button border border-primary/50"
                  >
                    <Plane className="h-12 w-12 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">Aviation & Defence</h3>
                    <p className="text-white/90 drop-shadow-md">Serving specialized sectors</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,206,209,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={mounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            animate={mounted ? undefined : "visible"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Mission",
                description: "To empower foreign companies with innovative solutions that enable successful market entry and operations in Pakistan&apos;s Aviation and Defence sectors, ensuring compliance, efficiency, and operational excellence."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Values",
                description: "Integrity, regulatory compliance, and client success are at the core of everything we do. We believe in transparent communication, technical excellence, and measurable results in mission-critical environments."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in every project, from bid management to technical deployment. Our team continuously adapts to industry standards and regulatory requirements to deliver exceptional results."
              }
            ].map((card, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="text-center h-full glass-card hover:shadow-2xl transition-all duration-300 border-primary/20 bg-card/95 dark:bg-card/90">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary"
                    >
                      {card.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 dark:text-foreground/70">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,191,255,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Scimitar Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in Pakistan&apos;s Aviation and Defence sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={mounted ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                "Deep understanding of Pakistan&apos;s aviation and defence regulations",
                "Proven track record in bid and proposal management",
                "Technical expertise in NAVAIDS, drones, and naval systems",
                "Comprehensive MRO services for civil and defence aviation",
                "Strong relationships with government agencies and stakeholders",
                "End-to-end operations and logistics support"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={mounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 dark:text-foreground/70">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="glass-card border-primary/20 bg-card/95 dark:bg-card/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-foreground">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Our Services</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Bid & Proposal Management",
                    "Marketing & Business Development",
                    "Installation & Commissioning",
                    "Aviation MRO Services",
                    "Operations & Logistics"
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold glass-button">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80 dark:text-foreground/70">{service}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                Let&apos;s discuss how we can help your company succeed in Pakistan&apos;s Aviation and Defence sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="shadow-xl glass-button bg-primary hover:bg-primary/90 text-black font-semibold px-8">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 shadow-xl font-semibold px-8" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
