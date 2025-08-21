import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const PaymentsRefunds = () => {
  return (
    <>
      <Helmet>
        <title>Payments & Refunds Policy - WIZA | B2B Travel Visa Processing</title>
        <meta 
          name="description" 
          content="Understand WIZA's payments and refunds policy for B2B travel visa processing services. Learn about our payment terms, cancellation charges, and refund procedures."
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Payments & Refunds Policy
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
                      This Payments & Refunds Policy outlines the terms and conditions for payments, cancellations, and refunds for visa processing services provided by WIZA. Please read this policy carefully to understand your rights and obligations.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">How to Cancel</h2>
                    <p className="text-muted-foreground mb-4">
                      Visa bookings may be cancelled by contacting our support team:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                      <li>Email: info@wizafortravel.com</li>
                      <li>Phone: +91 7899491283</li>
                      <li>Through your account dashboard</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      If you have applied for multiple visas, or visas for multiple persons, please identify the relevant visa application to be cancelled with complete details including application reference number and applicant name(s).
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This cancellation will be confirmed in writing and the refund would be credited back to the original payment method after deduction of applicable cancellation charges.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Cancellations & Refunds</h2>
                    <p className="text-muted-foreground mb-4">
                      All cancellation charges are levied on per visa, per person basis.
                    </p>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">Early Cancellation (Within 24 Hours)</h3>
                    <p className="text-muted-foreground mb-4">
                      If you cancel your visa booking within 24 hours from making the booking, cancellation charges will be deducted as follows:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>₹500 (inc. GST) per visa for standard processing (if not processed already)</li>
                      <li>₹1000 (inc. GST) per visa for express processing</li>
                      <li>₹1500 (inc. GST) per visa for VIP processing</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">No Refund Situations</h2>
                    <p className="text-muted-foreground mb-4">
                      No refunds will be provided in the following cases:
                    </p>
                    <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                      <li>After 24 hours of booking your visa</li>
                      <li>If you cancel your visa application after our agent has visited you for verification of documents</li>
                      <li>If you cancel your visa application after your documents/passport have been submitted to the relevant embassy or consulate</li>
                      <li>Visa applications rejected due to incomplete, incorrect, or fraudulent information provided</li>
                      <li>Changes in personal circumstances of the applicant</li>
                      <li>Failure to provide required documents within specified timeframes</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Rescheduling & Extra Visits</h2>
                    <p className="text-muted-foreground mb-4">
                      For document checking and collection services:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Customers get one (1) complimentary rescheduling for our agent to visit for physical verification and collection of documents</li>
                      <li>For any subsequent rescheduling, a nominal charge of ₹500 (inc. GST) per visa shall be applicable</li>
                      <li>Same-day rescheduling requests will incur additional charges of ₹1000 (inc. GST) per visa</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Payment Terms</h2>
                    <p className="text-muted-foreground mb-4">
                      WIZA accepts the following payment methods:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Credit and Debit Cards (Visa, MasterCard, Rupay)</li>
                      <li>Net Banking</li>
                      <li>UPI Payments</li>
                      <li>Bank Transfer for corporate accounts</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      All payments must be completed before visa processing begins. For corporate accounts, credit terms may be available subject to approval and agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Refund Processing</h2>
                    <p className="text-muted-foreground mb-4">
                      Once a cancellation is approved and refund eligibility is confirmed:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Refunds will be processed within 5-7 business days from approval</li>
                      <li>Refunds will be credited to the original payment method used</li>
                      <li>Bank processing times may vary (typically 3-5 business days for credit cards)</li>
                      <li>For UPI and net banking, refunds typically reflect within 1-2 business days</li>
                      <li>All refund confirmations will be sent via email and SMS</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Force Majeure</h2>
                    <p className="text-muted-foreground mb-4">
                      In cases of extraordinary circumstances beyond WIZA's control, including:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Embassy or consulate closures</li>
                      <li>Natural disasters or pandemic-related restrictions</li>
                      <li>Changes in government policies or visa regulations</li>
                      <li>Political instability affecting visa processing</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      WIZA will work with clients to provide alternative solutions, including service credits, rescheduling, or partial refunds based on the specific circumstances and processing stage.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Important Notes</h2>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Processing Fees:</strong> Some processing fees may be non-refundable once work has commenced on your application.</li>
                        <li><strong>Government Fees:</strong> Embassy fees, government charges, and other third-party costs are typically non-refundable.</li>
                        <li><strong>Service Charges:</strong> All prices mentioned include applicable GST as per Indian taxation laws.</li>
                        <li><strong>Policy Updates:</strong> This policy may be updated periodically. The current version is always available on our website.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      For questions about payments, cancellations, refunds, or this policy:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6">
                      <li>Email: info@wizafortravel.com</li>
                      <li>Phone: +91 78994 91283</li>
                      <li>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</li>
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

export default PaymentsRefunds;