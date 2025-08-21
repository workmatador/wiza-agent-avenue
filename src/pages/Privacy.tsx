import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - WIZA | B2B Travel Visa Processing</title>
        <meta 
          name="description" 
          content="Read WIZA's privacy policy to understand how we protect and handle your personal and business data in our B2B travel visa processing platform."
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Last updated: August 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-professional-lg">
              <CardContent className="p-8 prose prose-lg max-w-none">
                <div className="space-y-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Welcome to WIZA ("WIZA", "we", "us", or "our"). At WIZA, we are committed to protecting and respecting your privacy.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      This Privacy Policy describes our policies and procedures on the collection, use, disclosure, and transfer of your information by WIZA when you use our Service. This Privacy Policy forms part of the Terms of Use for the Services. Capitalized terms that have been used here but are undefined shall have the same meaning as attributed to them in the Terms of Use.
                    </p>
                    <p className="text-muted-foreground mb-8">
                      By using the Service, you agree to the collection, storage, and use of the Personal Data that you provide (including any changes thereto as provided by you) in accordance with this Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">DEFINITIONS</h2>
                    <p className="text-muted-foreground mb-4">The capitalized terms shall have the meaning as defined under:</p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li><strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.</li>
                      <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                      <li><strong>Application</strong> means the website ("Site") and the software program provided by the Company and accessed or downloaded by you on any electronic device, named WIZA.</li>
                      <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to WIZA.</li>
                      <li><strong>Country</strong> refers to the jurisdiction where WIZA operates.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">INFORMATION WE COLLECT</h2>
                    <h3 className="text-xl font-medium text-primary mb-3">Personal Data</h3>
                    <p className="text-muted-foreground mb-4">
                      While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personal Data may include, but is not limited to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Company name and business details</li>
                      <li>Travel agency license information</li>
                      <li>Address, State, Province, ZIP/Postal code, City</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Usage Data</h3>
                    <p className="text-muted-foreground mb-4">
                      We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">HOW WE USE YOUR INFORMATION</h2>
                    <p className="text-muted-foreground mb-4">WIZA uses the collected data for various purposes:</p>
                    <ul className="space-y-1 text-muted-foreground ml-6">
                      <li>To provide and maintain our Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                      <li>To provide customer support</li>
                      <li>To gather analysis or valuable information so that we can improve our Service</li>
                      <li>To monitor the usage of our Service</li>
                      <li>To detect, prevent and address technical issues</li>
                      <li>To process visa applications and related services</li>
                      <li>To comply with legal obligations and embassy requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">DATA SHARING AND DISCLOSURE</h2>
                    <p className="text-muted-foreground mb-4">
                      WIZA may disclose your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Comply with a legal obligation</li>
                      <li>Protect and defend the rights or property of WIZA</li>
                      <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>Protect the personal safety of users of the Service or the public</li>
                      <li>Protect against legal liability</li>
                      <li>Process visa applications with relevant embassies and consulates</li>
                      <li>Share with trusted business partners who assist us in providing services</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">DATA SECURITY</h2>
                    <p className="text-muted-foreground mb-4">
                      The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">DATA RETENTION</h2>
                    <p className="text-muted-foreground mb-4">
                      WIZA will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">YOUR DATA PROTECTION RIGHTS</h2>
                    <p className="text-muted-foreground mb-4">
                      Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                      <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                      <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                      <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                      <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                      <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">COOKIES AND TRACKING TECHNOLOGIES</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
                    <p className="text-muted-foreground mb-4">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">CONTACT US</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6">
                      <li>By email: info@wizafortravel.com</li>
                      <li>By phone: +91 78994 91283</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;