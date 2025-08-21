import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Policy = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation and Refund Policy - WIZA | B2B Travel Visa Processing</title>
        <meta 
          name="description" 
          content="Understand WIZA's cancellation and refund policy for B2B travel visa processing services. Learn about our terms for cancellations, refunds, and rescheduling."
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Cancellation and Refund Policy
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Last updated: November 2024
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
                      This Cancellation and Refund Policy outlines the terms and conditions for canceling visa processing services and requesting refunds from WIZA. Please read this policy carefully to understand your rights and obligations regarding cancellations and refunds.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">How to Cancel</h2>
                    <p className="text-muted-foreground mb-4">
                      Visa processing services may be cancelled by contacting our dedicated support team through the following methods:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                      <li>Email: support@wiza.com</li>
                      <li>Phone: +1 (800) WIZA-B2B</li>
                      <li>Through your account dashboard</li>
                      <li>Via your designated account manager</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      If you have applied for multiple visas, or visas for multiple persons, please clearly identify the specific visa application(s) to be cancelled, including:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Application reference number</li>
                      <li>Applicant name(s)</li>
                      <li>Destination country</li>
                      <li>Application date</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      Cancellation requests will be confirmed in writing, and any applicable refund will be processed back to the original payment method after deduction of applicable cancellation charges.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Cancellations & Refunds</h2>
                    <p className="text-muted-foreground mb-4">
                      All cancellation charges are levied on a per visa, per person basis. The refund amount depends on the timing of your cancellation request and the stage of processing.
                    </p>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Early Cancellation (Within 24 Hours)</h3>
                    <p className="text-muted-foreground mb-4">
                      If you cancel your visa application within 24 hours of booking and before processing has begun:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Standard Processing: $25 USD cancellation fee per visa application</li>
                      <li>Express Processing: $50 USD cancellation fee per visa application</li>
                      <li>VIP Processing: $75 USD cancellation fee per visa application</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Standard Cancellation Policy</h3>
                    <p className="text-muted-foreground mb-4">
                      For cancellations made after 24 hours but before document submission:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>50% of service fees are refundable</li>
                      <li>Government and embassy fees are non-refundable</li>
                      <li>Processing fees up to the current stage are non-refundable</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">No Refund Situations</h2>
                    <p className="text-muted-foreground mb-4">
                      No refunds will be provided in the following circumstances:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                      <li>Cancellations requested after documents/passport have been submitted to the relevant embassy or consulate</li>
                      <li>Cancellations after our representative has completed document verification at your location</li>
                      <li>Visa applications that have been rejected by embassies or consulates due to incomplete, incorrect, or fraudulent information provided by the applicant</li>
                      <li>Changes in personal circumstances of the applicant (such as change in travel plans, personal emergencies, etc.)</li>
                      <li>Failure to provide required documents within specified timeframes</li>
                      <li>Cancellations due to changes in embassy processing times or requirements</li>
                      <li>Applications where biometric appointments have been scheduled</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Rescheduling & Additional Services</h2>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Document Collection and Verification Visits</h3>
                    <p className="text-muted-foreground mb-4">
                      Customers are entitled to one (1) complimentary rescheduling for document collection and verification visits.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For any subsequent rescheduling requests:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Standard rescheduling: $25 USD per visa application</li>
                      <li>Same-day rescheduling: $50 USD per visa application</li>
                      <li>Weekend/Holiday rescheduling: $75 USD per visa application</li>
                    </ul>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Express Processing Upgrades</h3>
                    <p className="text-muted-foreground mb-4">
                      Requests to upgrade to express processing after initial submission may be accommodated subject to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Embassy availability and processing capacity</li>
                      <li>Payment of applicable express processing fees</li>
                      <li>Current stage of application processing</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Refund Processing</h2>
                    <p className="text-muted-foreground mb-4">
                      Once a cancellation is approved and refund eligibility is confirmed:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Refunds will be processed within 5-7 business days</li>
                      <li>Refunds will be credited to the original payment method</li>
                      <li>Bank processing times may vary (typically 3-5 business days for credit cards)</li>
                      <li>International wire transfer refunds may take 7-14 business days</li>
                      <li>All refund confirmations will be sent via email</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Force Majeure and Extraordinary Circumstances</h2>
                    <p className="text-muted-foreground mb-4">
                      In cases of extraordinary circumstances beyond WIZA's control, including but not limited to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Embassy or consulate closures</li>
                      <li>Natural disasters</li>
                      <li>Political instability in destination countries</li>
                      <li>Pandemic-related travel restrictions</li>
                      <li>Changes in visa policies or procedures</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      WIZA will work with clients to provide alternative solutions, including service credits, 
                      rescheduling, or partial refunds as deemed appropriate based on the specific circumstances.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Dispute Resolution</h2>
                    <p className="text-muted-foreground mb-4">
                      If you disagree with our cancellation or refund decision:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Contact our customer service team within 30 days of the decision</li>
                      <li>Provide detailed information about your dispute</li>
                      <li>Our senior management team will review your case within 5 business days</li>
                      <li>Final decisions will be communicated in writing</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Important Notes</h2>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Processing Fees:</strong> Some processing fees may be non-refundable once work has commenced on your application.</li>
                        <li><strong>Government Fees:</strong> Embassy fees, government charges, and other third-party costs are typically non-refundable.</li>
                        <li><strong>Travel Insurance:</strong> We strongly recommend travel insurance to protect against unforeseen circumstances.</li>
                        <li><strong>Policy Updates:</strong> This policy may be updated periodically. Current version is always available on our website.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      For questions about cancellations, refunds, or this policy:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6">
                      <li>Email: support@wiza.com</li>
                      <li>Phone: +1 (800) WIZA-B2B</li>
                      <li>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</li>
                      <li>Emergency Support: Available 24/7 for urgent cancellation requests</li>
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

export default Policy;