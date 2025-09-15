import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Target, Users, Zap, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Scimitar Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver results that matter to your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Targeted Strategies</CardTitle>
                <CardDescription>
                  Custom marketing strategies tailored to your business goals and target audience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data-Driven Results</CardTitle>
                <CardDescription>
                  Analytics and insights that drive measurable growth and ROI for your business
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Experienced professionals dedicated to your success and business growth
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SEO Optimization",
                description: "Boost your search rankings and organic traffic",
                icon: <Zap className="h-6 w-6" />
              },
              {
                title: "Social Media",
                description: "Engage your audience across all platforms",
                icon: <Users className="h-6 w-6" />
              },
              {
                title: "Content Marketing",
                description: "Create compelling content that converts",
                icon: <Target className="h-6 w-6" />
              },
              {
                title: "Analytics & Reporting",
                description: "Track performance with detailed insights",
                icon: <BarChart3 className="h-6 w-6" />
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                content: "Scimitar Solutions transformed our online presence. Our traffic increased by 300% in just 6 months!",
                rating: 5
              },
              {
                name: "Michael Chen",
                company: "E-commerce Plus",
                content: "The team's expertise in digital marketing is unmatched. Highly recommend their services.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                company: "Local Business Co.",
                content: "Professional, reliable, and results-driven. They exceeded our expectations in every way.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
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
              Let's discuss how we can help you achieve your marketing goals and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
