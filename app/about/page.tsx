import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, CheckCircle, Globe, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              About <span className="text-primary">Scimitar Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of digital marketing experts dedicated to helping 
              businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, Scimitar Solutions began with a simple mission: to democratize 
                digital marketing and make it accessible to businesses of all sizes. What 
                started as a small team of three has grown into a full-service digital 
                marketing agency serving clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every business deserves access to world-class marketing 
                strategies, regardless of their size or budget. Our approach combines 
                cutting-edge technology with human creativity to deliver results that 
                matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Work With Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Global Reach</h3>
                  <p className="text-muted-foreground">Serving clients in 25+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses with innovative marketing solutions that drive 
                  sustainable growth and create lasting value for our clients and their customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrity, innovation, and client success are at the core of everything we do. 
                  We believe in transparent communication and measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for excellence in every project, continuously learning and adapting 
                  to stay ahead of industry trends and deliver exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                description: "10+ years in digital marketing, former Google executive",
                image: "👩‍💼"
              },
              {
                name: "Michael Chen",
                role: "Head of Strategy",
                description: "Expert in data-driven marketing and analytics",
                image: "👨‍💻"
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                description: "Award-winning designer and content strategist",
                image: "👩‍🎨"
              },
              {
                name: "David Kim",
                role: "SEO Specialist",
                description: "Technical SEO expert with 8+ years experience",
                image: "👨‍🔧"
              },
              {
                name: "Lisa Thompson",
                role: "Social Media Manager",
                description: "Social media strategist and community builder",
                image: "👩‍💻"
              },
              {
                name: "James Wilson",
                role: "Analytics Lead",
                description: "Data scientist specializing in marketing attribution",
                image: "👨‍📊"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that speak to our success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Scimitar Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
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
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Our Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Discovery & Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Strategy Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span>Monitoring & Optimization</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help your business grow and achieve its marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
