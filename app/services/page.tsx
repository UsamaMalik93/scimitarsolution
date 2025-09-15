import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  BarChart3, 
  Users, 
  PenTool, 
  Target, 
  Globe, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic with our proven SEO strategies.",
      icon: <Search className="h-8 w-8" />,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
      price: "Starting at $500/month",
      duration: "3-6 months to see results"
    },
    {
      title: "Social Media Management",
      description: "Engage your audience across all platforms with compelling content and strategies.",
      icon: <Users className="h-8 w-8" />,
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting", "Influencer Outreach"],
      price: "Starting at $800/month",
      duration: "Immediate engagement boost"
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that converts visitors into customers.",
      icon: <PenTool className="h-8 w-8" />,
      features: ["Blog Writing", "Video Content", "Infographics", "Email Marketing", "Content Strategy"],
      price: "Starting at $600/month",
      duration: "2-4 weeks for content creation"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic with strategic Google and Facebook ads.",
      icon: <Target className="h-8 w-8" />,
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Ad Optimization", "Conversion Tracking"],
      price: "Starting at $1,000/month + ad spend",
      duration: "Immediate traffic boost"
    },
    {
      title: "Web Design & Development",
      description: "Create stunning, conversion-optimized websites that drive results.",
      icon: <Globe className="h-8 w-8" />,
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization", "Maintenance"],
      price: "Starting at $2,500",
      duration: "4-8 weeks for completion"
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance with detailed insights and data-driven recommendations.",
      icon: <BarChart3 className="h-8 w-8" />,
      features: ["Google Analytics Setup", "Custom Dashboards", "Monthly Reports", "ROI Analysis", "Performance Tracking"],
      price: "Starting at $300/month",
      duration: "Ongoing monitoring"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business, competitors, and target audience to create a customized strategy."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our analysis, we develop a comprehensive marketing strategy tailored to your goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team executes the strategy with precision, ensuring every detail is handled professionally."
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance and optimize campaigns for maximum ROI and results."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to grow your business 
              and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of digital marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-primary">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we work with you to achieve your marketing goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-muted transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re not just another marketing agency. We&apos;re your strategic partner 
                in growth, committed to delivering exceptional results that matter.
              </p>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 500+ successful campaigns",
                  "Custom strategies tailored to your business goals",
                  "Transparent reporting and regular communication",
                  "Cutting-edge tools and technology",
                  "Dedicated account managers for each client",
                  "Flexible pricing options for all budgets"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl opacity-90">
              Let&apos;s discuss your marketing goals and create a strategy that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
