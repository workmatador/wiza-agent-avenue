import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business-travel.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WIZA - B2B Travel Visa Processing Platform | By Agents, For Agents</title>
        <meta 
          name="description" 
          content="WIZA is a B2B travel visa processing platform built by agents, for agents. 40+ years of travel industry experience. Professional visa services for travel agencies worldwide."
        />
        <meta name="keywords" content="B2B visa processing, travel visa services, travel agent platform, professional visa processing, business travel visas" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Professional business travel and visa processing"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                B2B Travel Visa Processing
                <span className="block text-accent">By Agents, For Agents</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Streamline your visa processing with WIZA—built on 40+ years of travel industry expertise. 
                Professional, reliable, and exclusively designed for travel agents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="text-lg font-semibold min-w-[200px]">
                    Start Partnership
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="secondary" className="text-lg font-semibold min-w-[200px]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Trusted by Travel Professionals Worldwide
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🛡️</span>
                  <span className="font-medium">40+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌍</span>
                  <span className="font-medium">Global Embassy Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span className="font-medium">Fast Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🤝</span>
                  <span className="font-medium">B2B Exclusive</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Professional Visa Processing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive visa solutions designed specifically for travel agents and their clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-card shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-primary-foreground">📋</span>
                  </div>
                  <CardTitle className="text-primary">Document Processing</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Expert review and processing of visa applications with meticulous attention to embassy requirements.
                  </p>
                </CardContent>
              </Card>
              
              
              <Card className="bg-gradient-card shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-success-foreground">📱</span>
                  </div>
                  <CardTitle className="text-primary">Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Keep your clients informed with live updates on application status and processing milestones.
                  </p>
                </CardContent>
              </Card>
              
              
              <Card className="bg-gradient-card shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-accent-foreground">🎯</span>
                  </div>
                  <CardTitle className="text-primary">Expert Consultation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Professional guidance on visa requirements, documentation, and best practices for successful applications.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>

        {/* Why Choose WIZA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why Travel Agents Choose WIZA
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Built with decades of travel industry insight, WIZA understands the unique challenges 
                  travel agents face when processing visas for their clients.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-accent-foreground">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Industry-First B2B Platform</h4>
                      <p className="text-muted-foreground">
                        Unlike generic consumer platforms, WIZA is purpose-built for travel professionals, 
                        with workflows designed around agency needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-accent-foreground">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">40+ Years of Expertise</h4>
                      <p className="text-muted-foreground">
                        Our team brings four decades of travel industry experience, ensuring deep understanding 
                        of visa requirements and embassy procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-accent-foreground">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Dedicated Partnership Support</h4>
                      <p className="text-muted-foreground">
                        Your success is our success. We provide dedicated account management and 
                        24/7 support to ensure smooth operations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/about">
                    <Button size="lg" className="font-semibold">
                      Learn About Our Story
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 shadow-professional-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Competitive wholesale pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Priority processing queue</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Comprehensive training program</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Marketing support materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Visa Processing?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Join the network of professional travel agents who trust WIZA for reliable, 
              efficient visa processing. Contact us today to start your partnership.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg font-semibold px-8 py-4">
                Start Your Partnership Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/lovable-uploads/85666f82-b58d-442a-b3e7-4f0b912d34ca.png" 
                    alt="WIZA" 
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  Professional B2B travel visa processing platform. 
                  By agents, for agents.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Visa Processing</li>
                  <li>Document Review</li>
                  <li>Express Services</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms & Conditions</Link></li>
                  <li><Link to="/payments-refunds" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Payments & Refunds</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>info@wizafortravel.com</li>
                  <li>+91 7899491283</li>
                  <li>10, Sankey Road, Next to BDA Head Office, Kumara Park West, Seshadripuram, Bengaluru - 560 020</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
              <p>&copy; 2025 WIZA. All rights reserved. Built on 40+ years of travel industry expertise.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;