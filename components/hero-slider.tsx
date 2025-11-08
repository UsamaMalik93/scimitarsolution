"use client"

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Your Gateway to Pakistan's Aviation & Defence Sectors",
      subtitle: "Trusted Engineering & Integration Partner for Aerospace anf Defence.",
      cta: "Get Started Today",
      ctaLink: "/contact",
      secondaryCta: "Our Services",
      secondaryCtaLink: "/services",
      background: "gradient-ocean-subtle",
      image: "/images/aircraft.jpg", // Add your aircraft image here
      imageAlt: "Aircraft in flight",
    },
    {
      id: 2,
      title: "Bid & Proposal Management Expertise",
      subtitle: "Navigate Pakistan's procurement landscape with confidence. Our team ensures full compliance with local regulations, competitive positioning, and successful bid submissions for both public and private customers.",
      cta: "Learn More",
      ctaLink: "/services",
      secondaryCta: "Contact Us",
      secondaryCtaLink: "/contact",
      background: "gradient-ocean-subtle",
      image: "/images/drone.jpg", // Add your drone image here
      imageAlt: "Military drone",
    },
    {
      id: 3,
      title: "Technical Installation & Commissioning",
      subtitle: "Our technical specialists deploy and commission advanced equipment at civil and military sites across Pakistan. Experience with NAVAIDS (TACAN, VORTAC), Drones, and Naval proving services.",
      cta: "View Services",
      ctaLink: "/services",
      secondaryCta: "Get Consultation",
      secondaryCtaLink: "/contact",
      background: "gradient-ocean-subtle",
      image: "/images/naval-ship.jpg", // Add your naval ship image here
      imageAlt: "Naval ship",
    },
    {
      id: 4,
      title: "Aviation MRO & Operations Support",
      subtitle: "Comprehensive Maintenance, Repair, and Overhaul solutions for aircraft and ground support equipment. End-to-end operations and logistics support for mission-critical aviation and defence environments.",
      cta: "Explore Services",
      ctaLink: "/services",
      secondaryCta: "About Us",
      secondaryCtaLink: "/about",
      background: "gradient-ocean-subtle",
      image: "/images/aircraft-maintenance.jpg", // Add your aircraft maintenance image here
      imageAlt: "Aircraft maintenance",
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-64 md:py-0 overflow-hidden min-h-[600px]">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-ocean-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,206,209,0.1),transparent_50%)]"></div>
      </div>

      <div
        className="relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <AnimatePresence mode="wait" custom={1} initial={false}>
            {slides.map((slide, index) => {
              if (index !== currentSlide) return null;
              
              return (
                <motion.div
                  key={slide.id}
                  custom={1}
                  variants={slideVariants}
                  initial={mounted ? "enter" : "center"}
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <div className="container h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                      {/* Content */}
                      <motion.div
                        variants={contentVariants}
                        initial={mounted ? "hidden" : "visible"}
                        animate="visible"
                        className="space-y-8 text-center lg:text-left z-10"
                      >
                        <motion.div variants={itemVariants} className="space-y-6">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                            {slide.title}
                          </h1>
                          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {slide.subtitle}
                          </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="lg" asChild className="shadow-xl glass-button text-foreground font-semibold">
                              <Link href={slide.ctaLink}>
                                {slide.cta}
                                <ArrowRight className="ml-2 h-4 w-4 text-foreground" />
                              </Link>
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button size="lg" variant="outline" asChild className="shadow-xl glass-button text-foreground border-foreground/20 hover:bg-foreground/5 font-semibold">
                              <Link href={slide.secondaryCtaLink}>
                                {slide.secondaryCta}
                              </Link>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Image with Glassmorphism Effect */}
                      <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end relative"
                      >
                        <div className="relative w-full max-w-lg">
                          {/* Glass card container */}
                          <motion.div
                            animate={{
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="glass-card rounded-2xl overflow-hidden border-primary/30 shadow-2xl relative group"
                          >
                            {/* Image */}
                            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                              <Image
                                src={slide.image}
                                alt={slide.imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                            <div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
                          </motion.div>

                          {/* Floating decorative elements */}
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              x: [0, 10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute -top-6 -right-6 w-12 h-12 bg-primary/30 rounded-full glass-button blur-sm"
                          ></motion.div>
                          <motion.div
                            animate={{
                              y: [0, 15, 0],
                              x: [0, -10, 0],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                            className="absolute -bottom-6 -left-6 w-8 h-8 bg-cyan-500/30 rounded-full glass-button blur-sm"
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
             glass-nav rounded-full p-3 shadow-xl 
             transition-all duration-200 text-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
             glass-nav rounded-full p-3 shadow-xl 
             transition-all duration-200 text-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </motion.button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary shadow-lg'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
