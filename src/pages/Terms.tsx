import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - WIZA | B2B Travel Visa Processing</title>
        <meta 
          name="description" 
          content="Read WIZA's terms and conditions for our B2B travel visa processing services. Understand the terms of service for travel agents and partners."
        />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Terms and Conditions
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
                    <h2 className="text-2xl font-semibold text-primary mb-4">1. Interpretation</h2>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">1.1. Interpretation and Definitions</h3>
                    <p className="text-muted-foreground mb-4">
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                    
                    <h3 className="text-xl font-medium text-primary mb-3">1.2. Definitions</h3>
                    <p className="text-muted-foreground mb-4">For the purposes of these Terms and Conditions:</p>
                    <ul className="space-y-2 text-muted-foreground ml-6">
                      <li><strong>"Application"</strong> means the software program provided by the Company accessed by you on any electronic device, named WIZA.</li>
                      <li><strong>"Company"</strong> (referred to as either "the Company", "we", "us" or "our") refers to WIZA.</li>
                      <li><strong>"Service"</strong> refers to the Application and all related B2B visa processing services provided by WIZA.</li>
                      <li><strong>"You"</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                      <li><strong>"Terms"</strong> means these Terms and Conditions that form the entire agreement between you and the Company regarding the use of the Service.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">2. Acknowledgment</h2>
                    <p className="text-muted-foreground mb-4">
                      2.1. These are the Terms and Conditions governing the use of this Service and the agreement that operates between you and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      2.2. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      2.3. We respect your right to information and aim at providing a transparent set of "Terms". Please read the terms of this Policy provided below to learn about the "Terms" you will be signing up for. IF YOU DO NOT AGREE TO ANY OF THE TERMS AND CONDITIONS MENTIONED HEREIN KINDLY DO NOT GIVE YOUR CONSENT AND PROCEED FURTHER TO ACCESS THE Application. By giving your consent to proceed forward in order to access the Application, you will be responsible to adhere to the "Terms" mentioned herein.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">3. Service Description</h2>
                    <p className="text-muted-foreground mb-4">
                      3.1. WIZA provides B2B travel visa processing services exclusively for travel agents and travel industry professionals. Our services include but are not limited to:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6 mb-4">
                      <li>Visa application processing and submission</li>
                      <li>Document verification and review</li>
                      <li>Embassy and consulate liaison services</li>
                      <li>Status tracking and updates</li>
                      <li>Expert consultation on visa requirements</li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      3.2. Our services are designed exclusively for business-to-business relationships with licensed travel agents and travel industry professionals.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">4. Eligibility and Account Registration</h2>
                    <p className="text-muted-foreground mb-4">
                      4.1. To use our Service, you must be a licensed travel agent or authorized travel industry professional. You must provide accurate, current, and complete information during the registration process.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      4.2. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities that occur under your account.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      4.3. You must immediately notify WIZA of any unauthorized use of your account or any other breach of security.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">5. Service Obligations</h2>
                    <p className="text-muted-foreground mb-4">
                      5.1. WIZA will use commercially reasonable efforts to process visa applications in accordance with the requirements of the relevant embassies and consulates.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      5.2. Processing times and visa approval are subject to embassy and consulate procedures and decisions, which are beyond WIZA's control.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      5.3. WIZA does not guarantee visa approval and is not responsible for visa rejections by embassies or consulates.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">6. Client Obligations</h2>
                    <p className="text-muted-foreground mb-4">
                      6.1. You must provide accurate, complete, and truthful information in all visa applications and supporting documents.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      6.2. You are responsible for ensuring that your clients' documents meet all embassy and consulate requirements.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      6.3. You must promptly provide any additional information or documentation requested by WIZA or the relevant embassy/consulate.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">7. Fees and Payment</h2>
                    <p className="text-muted-foreground mb-4">
                      7.1. Service fees are determined based on the specific visa type, destination, and processing requirements. All fees must be paid in advance unless otherwise agreed in writing.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      7.2. Government fees, embassy fees, and other third-party charges are separate from WIZA's service fees and are subject to change without notice.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      7.3. Refunds are subject to our refund policy, which varies based on the stage of processing and specific circumstances of each case.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                      8.1. WIZA's liability is limited to the service fees paid for the specific visa application in question.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      8.2. WIZA shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      8.3. WIZA is not responsible for delays, rejections, or other decisions made by embassies, consulates, or government agencies.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">9. Intellectual Property Rights</h2>
                    <p className="text-muted-foreground mb-4">
                      9.1. The Service and its original content, features, and functionality are and will remain the exclusive property of WIZA and its licensors.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      9.2. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">10. Confidentiality</h2>
                    <p className="text-muted-foreground mb-4">
                      10.1. WIZA acknowledges that client information and visa application data are confidential and will be treated as such in accordance with our Privacy Policy.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      10.2. Information may only be shared with embassies, consulates, and other authorized parties as necessary to process visa applications.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">11. Termination</h2>
                    <p className="text-muted-foreground mb-4">
                      11.1. We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      11.2. If you wish to terminate your account, you may simply discontinue using the Service and notify us in writing.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">12. Governing Law</h2>
                    <p className="text-muted-foreground mb-4">
                      12.1. These Terms shall be interpreted and governed by the laws of the jurisdiction where WIZA is incorporated, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      12.2. Any disputes arising from these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">13. Changes to Terms</h2>
                    <p className="text-muted-foreground mb-4">
                      13.1. We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      13.2. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4">14. Contact Information</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <ul className="space-y-1 text-muted-foreground ml-6">
                      <li>By email: legal@wiza.com</li>
                      <li>By phone: +1 (800) WIZA-B2B</li>
                      <li>On our contact page: /contact</li>
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

export default Terms;