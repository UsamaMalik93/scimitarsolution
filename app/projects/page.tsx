"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
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

export default function Projects() {
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
                <span className="text-foreground dark:text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Projects
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
                We are Working on it...
              </p>
            </motion.div>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="glass-button shadow-xl bg-primary hover:bg-primary/90 text-black font-semibold px-8">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 shadow-xl font-semibold px-8" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
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
      
      {/* Process Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,191,255,0.05),transparent_50%)]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
              Our proven process ensures every project delivers exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={mounted ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            animate={mounted ? undefined : "visible"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business, goals, and target audience to understand your unique needs."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Based on our analysis, we develop a customized strategy tailored to your objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "Our expert team implements the strategy with precision and attention to detail."
              },
              {
                step: "04",
                title: "Optimization",
                description: "We continuously monitor and optimize for maximum performance and ROI."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center"
              >
                <Card className="glass-card border-primary/20 bg-card/95 dark:bg-card/90 hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 glass-button"
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-foreground/80 dark:text-foreground/70">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  Next Project?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Join our portfolio of successful clients and let us help you achieve 
                your goals with proven strategies and expert execution.
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
                <Button size="lg" asChild className="shadow-xl glass-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 shadow-xl font-semibold px-8" asChild>
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
