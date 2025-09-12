import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Target,
  Globe,
  Smartphone,
  BarChart3,
  Star,
  Calendar,
  DollarSign,
  Eye
} from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform Redesign",
      client: "TechStore Inc.",
      category: "Web Design & Development",
      image: "🛒",
      description: "Complete redesign of an e-commerce platform resulting in 300% increase in conversions and 150% boost in sales.",
      results: {
        conversion: "+300%",
        sales: "+150%",
        traffic: "+200%",
        roi: "450%"
      },
      technologies: ["React", "Next.js", "Stripe", "Shopify"],
      duration: "3 months",
      testimonial: "MarketingPro transformed our online presence completely. The results speak for themselves!",
      rating: 5
    },
    {
      title: "SaaS Product Launch Campaign",
      client: "CloudTech Solutions",
      category: "Digital Marketing",
      image: "☁️",
      description: "Comprehensive digital marketing campaign for a new SaaS product, achieving 10,000+ signups in the first month.",
      results: {
        signups: "10,000+",
        leads: "+500%",
        engagement: "+400%",
        roi: "320%"
      },
      technologies: ["Google Ads", "Facebook Ads", "Content Marketing", "SEO"],
      duration: "6 months",
      testimonial: "The team's expertise in SaaS marketing is unmatched. Highly recommend their services.",
      rating: 5
    },
    {
      title: "Local Restaurant Chain Marketing",
      client: "Bella's Kitchen",
      category: "Local SEO & Social Media",
      image: "🍽️",
      description: "Local SEO and social media strategy for a restaurant chain, increasing foot traffic by 250% and online orders by 400%.",
      results: {
        footTraffic: "+250%",
        onlineOrders: "+400%",
        socialFollowers: "+300%",
        roi: "280%"
      },
      technologies: ["Local SEO", "Google My Business", "Instagram", "Facebook"],
      duration: "4 months",
      testimonial: "Our restaurant business has never been better. The local marketing strategy was perfect!",
      rating: 5
    },
    {
      title: "B2B Lead Generation Campaign",
      client: "Manufacturing Corp",
      category: "Lead Generation",
      image: "🏭",
      description: "Strategic B2B lead generation campaign using LinkedIn and content marketing, generating 500+ qualified leads.",
      results: {
        leads: "500+",
        conversion: "+180%",
        costPerLead: "-60%",
        roi: "380%"
      },
      technologies: ["LinkedIn Ads", "Content Marketing", "Email Marketing", "CRM"],
      duration: "5 months",
      testimonial: "The quality of leads we're getting now is incredible. ROI has exceeded our expectations.",
      rating: 5
    },
    {
      title: "Mobile App Marketing Launch",
      client: "FitnessApp",
      category: "App Marketing",
      image: "📱",
      description: "Complete marketing strategy for a fitness mobile app, achieving 50,000+ downloads in the first quarter.",
      results: {
        downloads: "50,000+",
        appStore: "4.8★",
        retention: "+200%",
        roi: "420%"
      },
      technologies: ["ASO", "Social Media", "Influencer Marketing", "Paid Ads"],
      duration: "6 months",
      testimonial: "The app marketing strategy was spot-on. We're now a top-rated fitness app!",
      rating: 5
    },
    {
      title: "Healthcare Practice Growth",
      client: "MedCenter Plus",
      category: "Healthcare Marketing",
      image: "🏥",
      description: "Specialized healthcare marketing campaign focusing on patient acquisition and brand awareness.",
      results: {
        patients: "+150%",
        appointments: "+200%",
        onlineReviews: "+400%",
        roi: "250%"
      },
      technologies: ["Google Ads", "SEO", "Review Management", "Content Marketing"],
      duration: "8 months",
      testimonial: "Our patient base has grown significantly. The healthcare marketing expertise was invaluable.",
      rating: 5
    }
  ];

  const categories = [
    "All Projects",
    "Web Design & Development", 
    "Digital Marketing",
    "Local SEO & Social Media",
    "Lead Generation",
    "App Marketing",
    "Healthcare Marketing"
  ];

  const stats = [
    { label: "Projects Completed", value: "200+", icon: <Target className="h-6 w-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="h-6 w-6" /> },
    { label: "Average ROI", value: "350%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Years Experience", value: "5+", icon: <Calendar className="h-6 w-6" /> }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful marketing campaigns and digital solutions 
              that have driven real results for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.results).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-2 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Rating */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="pt-4 border-t">
                    <p className="text-sm italic text-muted-foreground">
                      "{project.testimonial}"
                    </p>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures every project delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl opacity-90">
              Join our portfolio of successful clients and let us help you achieve 
              your marketing goals with proven strategies and expert execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
