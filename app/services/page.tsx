"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  TrendingUp, 
  Settings, 
  Wrench, 
  Truck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
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

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "Bid and Proposal Management",
      description: "We assist foreign companies in navigating Pakistan&apos;s procurement landscape. Our team ensures full compliance with local regulations, competitive positioning, and successful bid submissions for both public and private customers.",
      icon: <FileText className="h-8 w-8 text-primary-foreground" />,
      image: "/images/aircraft1.jpg", // Add your aircraft image here
      imageAlt: "Aircraft procurement",
      features: [
        "Full compliance with local regulations",
        "Competitive positioning",
        "Successful bid submissions",
        "Documentation management",
        "Stakeholder engagement",
        "Local Representative services"
      ],
      sectors: ["Aviation", "Defence", "Public Sector", "Private Sector"]
    },
    {
      title: "Marketing & Business Development",
      description: "Scimitar Solutions serves as your in-country marketing and business development partner. We promote your brand, products, and services to key stakeholders including government agencies, airport authorities, and private sector clients.",
      icon: <TrendingUp className="h-8 w-8 text-primary-foreground" />,
      image: "/images/aircraft.jpg", // Add your business development image here
      imageAlt: "Business development",
      features: [
        "Strategic brand promotion",
        "Stakeholder engagement",
        "Government agency outreach",
        "Airport authority relations",
        "Private sector client development",
        "Localized messaging"
      ],
      sectors: ["Aviation", "Defence", "Government", "Private Sector"]
    },
    {
      title: "Installation & Commissioning",
      description: "Our technical specialists deploy and commission advanced equipment at civil and military sites across Pakistan. With vast experience ranging from NAVAIDS (TACAN, VORTAC), Drones and proving services at Naval sites.",
      icon: <Settings className="h-8 w-8 text-primary-foreground" />,
      image: "/images/drone2.jpg", // Add your drone image here
      imageAlt: "Drone installation",
      features: [
        "NAVAIDS deployment (TACAN, VORTAC)",
        "Drone systems installation",
        "Naval site proving services",
        "Equipment calibration",
        "Operational readiness",
        "Seamless integration"
      ],
      sectors: ["Aviation", "Defence", "Naval", "Civil Aviation"]
    },
    {
      title: "Aviation MRO Services",
      description: "We provide tailored Maintenance, Repair, and Overhaul (MRO) solutions for aircraft and ground support equipment. Our services are designed to meet the needs of both Civil and Defence aviation sectors.",
      icon: <Wrench className="h-8 w-8 text-primary-foreground" />,
      image: "/images/aircraft-maintenance.jpg", // Add your aircraft maintenance image here
      imageAlt: "Aircraft maintenance",
      features: [
        "Aircraft maintenance",
        "Ground support equipment MRO",
        "Civil aviation support",
        "Defence aviation support",
        "International standards compliance",
        "Safety and reliability assurance"
      ],
      sectors: ["Civil Aviation", "Defence Aviation", "Aircraft", "Ground Support"]
    },
    {
      title: "Operations & Logistics",
      description: "Scimitar Solutions delivers end-to-end operations and logistics support designed for mission-critical aviation and defence environments. Our team ensures seamless coordination across supply chains, maintenance cycles, and deployment schedules.",
      icon: <Truck className="h-8 w-8 text-primary-foreground" />,
      image: "/images/naval-ship1.jpg", // Add your naval ship image here
      imageAlt: "Naval operations",
      features: [
        "Supply chain coordination",
        "Maintenance cycle management",
        "Deployment scheduling",
        "Mission-critical support",
        "Operational efficiency",
        "Maximum readiness"
      ],
      sectors: ["Aviation", "Defence", "Logistics", "Operations"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Assessment",
      description: "We analyze your requirements, understand your objectives, and assess the Pakistan market landscape for your aviation or defence needs."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our assessment, we develop a comprehensive strategy tailored to your specific sector requirements and business goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team executes the strategy with precision, ensuring compliance, quality, and seamless integration with local operations."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "We provide continuous monitoring, optimization, and support to ensure maximum operational efficiency and readiness."
    }
  ];

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
                <span className="text-foreground dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Services
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
              className="space-y-6"
            >
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 dark:text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
                Scimitar Solutions offers a specialized suite of services designed to support 
                foreign companies entering and operating within Pakistan&apos;s Aviation and Defence sectors.
              </p>
              <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Our expertise spans strategic representation, regulatory navigation, and technical deployment.
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

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <motion.div
            variants={containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ opacity: 1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="visible"
                whileHover={{ y: -12, scale: 1.02 }}
                style={{ opacity: 1, y: 0 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full glass-card hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/95 dark:bg-card/90 overflow-hidden group relative">
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none z-10"></div>
                  
                  {/* Service Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Enhanced gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"></div>
                    
                    {/* Icon overlay with animation */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="absolute top-4 right-4 w-14 h-14 bg-primary/90 backdrop-blur-md rounded-xl flex items-center justify-center glass-button border border-primary/50 shadow-lg z-20"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "easeInOut"
                        }}
                        className="text-primary-foreground"
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full"></div>
                  </div>
                  
                  <CardHeader className="pb-4 pt-6 relative z-10">
                    <CardTitle className="text-xl mb-3 font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-foreground/80 dark:text-foreground/70 line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col pt-0 pb-6 relative z-10">
                    <div className="space-y-5 flex-grow">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-1 h-5 bg-gradient-to-b from-primary to-cyan-400 rounded-full"></div>
                          <h4 className="font-semibold text-sm text-primary uppercase tracking-wide">Key Features</h4>
                        </div>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start space-x-3 text-sm text-foreground/80 dark:text-foreground/70 group/item"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                                className="mt-0.5 flex-shrink-0"
                              >
                                <CheckCircle className="h-4 w-4 text-primary" />
                              </motion.div>
                              <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2 border-t border-primary/10">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-primary rounded-full"></div>
                          <h4 className="font-semibold text-sm text-primary uppercase tracking-wide">Sectors</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.sectors.map((sector, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-xs font-medium bg-gradient-to-br from-primary/20 to-cyan-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 text-foreground/90 dark:text-foreground/80 hover:border-primary/50 hover:bg-primary/30 transition-all duration-300 cursor-pointer"
                            >
                              {sector}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,206,209,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,191,255,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent mb-4">
                Our Process
              </h2>
            </motion.div>
            <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              How we work with you to achieve your goals in Pakistan&apos;s Aviation and Defence sectors
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            
            <motion.div
              variants={containerVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
              style={{ opacity: 1 }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="visible"
                  whileHover={{ y: -12, scale: 1.02 }}
                  style={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <Card className="h-full glass-card hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/95 dark:bg-card/90 overflow-hidden group relative">
                    {/* Glowing border effect on hover */}
                    <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none z-10"></div>
                    
                    <CardContent className="p-6 text-center relative z-10">
                      {/* Numbered Circle */}
                      <div className="relative mb-6 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Outer glow ring */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-cyan-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Main circle */}
                          <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-primary to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-primary/50 group-hover:border-primary/80 transition-all duration-500">
                            <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                            
                            {/* Inner glow */}
                            <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                          </div>
                          
                          {/* Animated pulse ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 border-2 border-primary/50 rounded-full"
                          ></motion.div>
                        </motion.div>
                        
                        {/* Connecting line to next step - desktop only */}
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 left-full w-full h-0.5">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.2 }}
                              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-left"
                            ></motion.div>
                          </div>
                        )}
                      </div>
                      
                      {/* Step Title */}
                      <motion.h3 
                        className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {step.title}
                      </motion.h3>
                      
                      {/* Step Description */}
                      <p className="text-foreground/80 dark:text-foreground/70 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                      
                      {/* Decorative bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                    
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </Card>
                </motion.div>
              ))}
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
                  Aviation & Defence Market?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your goals and create a strategy that delivers real results in Pakistan&apos;s specialized sectors.
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
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-black hover:bg-primary/10 hover:border-primary/50 shadow-xl font-semibold px-8" asChild>
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
