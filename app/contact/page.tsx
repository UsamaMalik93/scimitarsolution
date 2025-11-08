"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, User, Building, MessageSquare, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    
    try {
      // Using Resend API to send emails directly
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: ""
          });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact us directly at info@scimitarsolutions.net');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      content: "info@scimitarsolutions.net",
      subtitle: "We'll respond within 24 hours",
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      href: "mailto:info@scimitarsolutions.net"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      content: "+92 51 6167826",
      subtitle: "Mon-Fri 9AM-6PM EST",
      gradient: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
      iconBg: "from-cyan-500/20 to-teal-500/20",
      href: "tel:+92516167826"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      content: "77-B, Street 10, Pakistan Colony\nBanigala, Islamabad, Pakistan",
      subtitle: "By appointment only",
      gradient: "from-teal-500/20 via-blue-500/20 to-cyan-500/20",
      iconBg: "from-teal-500/20 to-blue-500/20",
      href: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      subtitle: "",
      gradient: "from-blue-500/20 via-teal-500/20 to-cyan-500/20",
      iconBg: "from-blue-500/20 to-teal-500/20",
      href: "#"
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
                <span className="text-foreground dark:text-white">Get In</span>{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Touch
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
                Let&apos;s discuss your goals and explore how we can help your business succeed.
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

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,191,255,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,206,209,0.06),transparent_50%)]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={mounted ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                  >
                    <Sparkles className="h-5 w-5 text-primary" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold">Send us a message</h2>
                </div>
                <p className="text-foreground/80 dark:text-foreground/70 text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="text-center py-16 glass-card border-primary/30 bg-card/95 dark:bg-card/90 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
                      <CardContent className="space-y-6 relative z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        >
                          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glass-button border border-green-500/30">
                            <CheckCircle className="h-12 w-12 text-green-500" />
                          </div>
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-green-500">Message Sent!</h3>
                        <p className="text-foreground/80 dark:text-foreground/70 text-lg max-w-md mx-auto">
                          Thank you for your message. We&apos;ll get back to you soon.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 glass-card p-8 md:p-10 rounded-2xl border-primary/30 bg-card/95 dark:bg-card/90 shadow-2xl relative overflow-hidden group"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          className="space-y-2 group/field"
                        >
                          <Label htmlFor="name" className="text-foreground font-semibold flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            Name *
                          </Label>
                          <div className="relative">
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Your full name"
                              className="pl-10 h-12 transition-all duration-300 border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40"
                            />
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          className="space-y-2 group/field"
                        >
                          <Label htmlFor="email" className="text-foreground font-semibold flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            Email *
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your@email.com"
                              className="pl-10 h-12 transition-all duration-300 border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40"
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          className="space-y-2 group/field"
                        >
                          <Label htmlFor="company" className="text-foreground font-semibold flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary" />
                            Company
                          </Label>
                          <div className="relative">
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="pl-10 h-12 transition-all duration-300 border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40"
                            />
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </motion.div>
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          className="space-y-2 group/field"
                        >
                          <Label htmlFor="phone" className="text-foreground font-semibold flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            Phone
                          </Label>
                          <div className="relative">
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+92 51 6167826"
                              className="pl-10 h-12 transition-all duration-300 border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40"
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="space-y-2 group/field"
                      >
                        <Label htmlFor="subject" className="text-foreground font-semibold flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Subject *
                        </Label>
                        <div className="relative">
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="What's this about?"
                            className="pl-10 h-12 transition-all duration-300 border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40"
                          />
                          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="space-y-2 group/field"
                      >
                        <Label htmlFor="message" className="text-foreground font-semibold flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          Message *
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project..."
                            rows={6}
                            className="pl-10 pt-3 transition-all duration-300 resize-none border-primary/20 focus:border-primary focus:ring-primary/20 group-hover/field:border-primary/40 min-h-[150px]"
                          />
                          <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-2"
                      >
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl font-semibold text-base h-14 rounded-xl transition-all duration-300 hover:shadow-2xl" 
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={mounted ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Contact Information</h2>
                <p className="text-foreground/80 dark:text-foreground/70 text-lg">
                  Prefer to reach out directly? Here are all the ways you can contact us.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial={mounted ? "hidden" : "visible"}
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                animate={mounted ? undefined : "visible"}
                className="space-y-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <Card 
                      className={`glass-card border-primary/30 bg-card/95 dark:bg-card/90 hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer ${method.href !== '#' ? 'hover:border-primary/50' : ''}`}
                      onClick={() => method.href !== '#' && window.open(method.href)}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500"></div>
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${method.iconBg} glass-button border border-primary/20 group-hover:border-primary/40 transition-all duration-300 flex-shrink-0`}
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
                            >
                              {method.icon}
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {method.title}
                            </h3>
                            <p className="text-foreground/80 dark:text-foreground/70 whitespace-pre-line leading-relaxed">
                              {method.content}
                            </p>
                            {method.subtitle && (
                              <p className="text-sm text-foreground/70 dark:text-foreground/60 mt-2">
                                {method.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Decorative bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
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
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto leading-relaxed"> 
                Let&apos;s discuss how we can help to achieve your goals.
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
                <Button size="lg" asChild className="glass-button shadow-xl font-semibold text-base h-12 px-8 bg-primary hover:bg-primary/90 text-black">
                  <a href="mailto:info@scimitarsolutions.net">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us Now
                  </a>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 glass-button shadow-xl font-semibold text-base h-12 px-8" asChild>
                  <a href="tel:+92516167826">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
