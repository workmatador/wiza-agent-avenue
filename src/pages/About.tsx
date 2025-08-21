import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About WIZA - 40+ Years of Travel Visa Expertise | B2B Travel Solutions</title>
        <meta 
          name="description" 
          content="Learn about WIZA's 40+ years of travel industry experience. We're a B2B travel visa processing platform built by agents, for agents. Trusted by travel professionals worldwide."
        />
        <meta name="keywords" content="travel visa processing, B2B travel solutions, visa agents, travel industry experience, professional visa services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Built on 40+ Years of Travel Industry Excellence
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              WIZA is more than a platform—we're your trusted partner in travel visa processing, 
              designed by industry veterans who understand the challenges agents face every day.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    For over four decades, we've been at the forefront of the travel industry, 
                    working alongside travel agents and understanding their unique challenges. 
                    This deep industry knowledge led us to create WIZA—a B2B platform designed 
                    specifically for agents, by agents.
                  </p>
                  <p>
                    We recognized that travel agents needed a reliable, efficient partner for 
                    visa processing that could handle the complexities of modern travel requirements 
                    while maintaining the personal touch that defines exceptional service.
                  </p>
                  <p>
                    Today, WIZA serves as the bridge between travel agents and their clients' 
                    visa needs, ensuring smooth, professional processing backed by decades 
                    of industry expertise.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={aboutTeamImage}
                  alt="WIZA professional team working on travel visa processing"
                  className="rounded-lg shadow-professional-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card shadow-professional-md">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Trust & Reliability</h3>
                  <p className="text-muted-foreground">
                    Four decades of consistent service delivery and unwavering commitment 
                    to our agent partners.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-professional-md">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-accent-foreground">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Efficiency</h3>
                  <p className="text-muted-foreground">
                    Streamlined processes and expert handling ensure quick turnaround times 
                    for all visa applications.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-professional-md">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-success-foreground">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Partnership</h3>
                  <p className="text-muted-foreground">
                    We're not just a service provider—we're your strategic partner in 
                    delivering exceptional travel experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose WIZA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-8">Why Travel Agents Choose WIZA</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Industry Expertise</h4>
                      <p className="text-muted-foreground text-sm">Deep understanding of visa requirements across all major destinations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">B2B Focus</h4>
                      <p className="text-muted-foreground text-sm">Exclusively designed for travel agents and their unique business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Reliable Support</h4>
                      <p className="text-muted-foreground text-sm">Dedicated support team with extensive travel industry knowledge</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Proven Track Record</h4>
                      <p className="text-muted-foreground text-sm">40+ years of successful visa processing and client satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Streamlined Process</h4>
                      <p className="text-muted-foreground text-sm">Efficient workflows designed to save you time and reduce complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-primary">Professional Network</h4>
                      <p className="text-muted-foreground text-sm">Strong relationships with embassies and consulates worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Partner with Industry Leaders?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the network of travel professionals who trust WIZA for their visa processing needs. 
              Let's discuss how we can support your business growth.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="font-semibold">
                Start Your Partnership
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;