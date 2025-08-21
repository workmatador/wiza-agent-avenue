import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to your backend
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your interest in WIZA. We'll contact you within 24 hours to discuss your visa processing needs.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact WIZA - Start Your B2B Visa Processing Partnership</title>
        <meta 
          name="description" 
          content="Contact WIZA to start your B2B travel visa processing partnership. Get in touch with our expert team to discuss how we can support your travel agency's visa needs."
        />
        <meta name="keywords" content="contact WIZA, B2B visa processing, travel agent partnership, visa processing inquiry, professional visa services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's Start Your Partnership Journey
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Ready to streamline your visa processing? Contact our team of experts 
              to learn how WIZA can support your travel agency's growth.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-professional-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will reach out to discuss your visa processing needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Travel Agency Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your agency name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your visa processing needs</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your current visa processing challenges, volume expectations, and what you'd like to achieve with WIZA..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Start Partnership Discussion
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-gradient-card shadow-professional-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-primary mb-6">Why Choose WIZA?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">40+ years of travel industry expertise</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">Dedicated B2B focus for travel agents</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">Streamlined visa processing workflows</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">Expert support throughout the process</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary shadow-professional-md">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Our partnership specialists are standing by to discuss how WIZA can 
                      transform your visa processing operations.
                    </p>
                    <div className="space-y-3 text-primary-foreground/90">
                      <p className="flex items-center justify-center space-x-2">
                        <span>📧</span>
                        <span>info@wizafortravel.com</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <span>📞</span>
                        <span>+91 7899491283</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <span>⏰</span>
                        <span>Response within 24 hours</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">How do I onboard with WIZA?</h4>
                  <p className="text-muted-foreground text-sm">
                    Simply contact us using the form above or reach out directly. Our partnership team will 
                    guide you through our streamlined onboarding process, which typically takes 1-2 business days.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">What makes WIZA different from other visa processors?</h4>
                  <p className="text-muted-foreground text-sm">
                    WIZA is built exclusively for travel agents, by professionals with 40+ years in the industry. 
                    We understand your unique challenges and provide B2B-focused solutions, not generic consumer services.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">What visa destinations do you support?</h4>
                  <p className="text-muted-foreground text-sm">
                    We process visas for all major travel destinations worldwide, leveraging our extensive network 
                    of embassy and consulate relationships built over four decades in the travel industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;