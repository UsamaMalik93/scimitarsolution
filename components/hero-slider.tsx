"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Users, Target, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Transform Your Business with Digital Marketing",
      subtitle: "We help businesses grow through innovative marketing strategies, data-driven insights, and cutting-edge digital solutions.",
      cta: "Get Started Today",
      ctaLink: "/contact",
      secondaryCta: "Learn More",
      secondaryCtaLink: "/about",
      background: "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10",
      icon: <Target className="h-16 w-16 text-primary" />,
      stats: { value: "500+", label: "Happy Clients" }
    },
    {
      id: 2,
      title: "Boost Your Online Presence with SEO",
      subtitle: "Increase your search rankings and organic traffic with our proven SEO strategies that deliver measurable results.",
      cta: "Get SEO Audit",
      ctaLink: "/contact",
      secondaryCta: "View Services",
      secondaryCtaLink: "/services",
      background: "bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10",
      icon: <Zap className="h-16 w-16 text-primary" />,
      stats: { value: "300%", label: "Traffic Increase" }
    },
    {
      id: 3,
      title: "Engage Your Audience on Social Media",
      subtitle: "Build a strong social media presence that connects with your audience and drives meaningful engagement.",
      cta: "Start Social Media",
      ctaLink: "/contact",
      secondaryCta: "View Projects",
      secondaryCtaLink: "/projects",
      background: "bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10",
      icon: <Users className="h-16 w-16 text-primary" />,
      stats: { value: "400%", label: "Engagement Boost" }
    },
    {
      id: 4,
      title: "Create Compelling Content That Converts",
      subtitle: "Develop content strategies that resonate with your audience and drive conversions across all channels.",
      cta: "Content Strategy",
      ctaLink: "/contact",
      secondaryCta: "See Our Work",
      secondaryCtaLink: "/projects",
      background: "bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10",
      icon: <Play className="h-16 w-16 text-primary" />,
      stats: { value: "250%", label: "Conversion Rate" }
    }
  ];

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
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative sm:py-64 md:py-10 overflow-hidden">
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative h-[500px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              } ${slide.background}`}
            >
              <div className="container h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                  {/* Content */}
                  <div className="space-y-8 text-center lg:text-left">
                    <div className="space-y-6">
                      <div className="flex justify-center lg:justify-start">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          {slide.icon}
                        </div>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-muted-foreground max-w-2xl">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start">
                      <Card className="w-fit shadow-lg">
                        <CardContent className="p-6 text-center">
                          <div className="text-3xl font-bold text-primary mb-1">
                            {slide.stats.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {slide.stats.label}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg" asChild className="shadow-lg">
                        <Link href={slide.ctaLink}>
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild className="shadow-lg">
                        <Link href={slide.secondaryCtaLink}>
                          {slide.secondaryCta}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
                          <div className="w-48 h-48 bg-primary/30 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 bg-primary/40 rounded-full flex items-center justify-center">
                              {slide.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 hover:bg-background rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 hover:bg-background rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === index 
                  ? 'bg-primary scale-125 shadow-lg' 
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
