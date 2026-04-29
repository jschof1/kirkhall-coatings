import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const TermsOfServicePage = () => {
  return (
    <>
      <SEO 
        title={`Terms of Service ${siteConfig.seo.titleSuffix}`}
        description={`Terms of Service for ${siteConfig.business.name}. Read our terms and conditions for wall coating and property refurbishment services.`}
        noindex={true}
      />

      <Header />

      <main className="min-h-screen bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">
                Last updated: {siteConfig.legal.termsOfServiceLastUpdated}
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">1. About These Terms</h2>
                <p>
                  These Terms of Service explain how {siteConfig.business.name} ("we", "our", or "us") works with customers who use our website, request a quotation, or book wall coating and property refurbishment services. These terms apply to booked work and accepted quotations unless we agree something different with you in writing.
                </p>
                <p>
                  Requesting a quotation or contacting us does not by itself create a binding contract. A contract is formed when you accept our quotation or otherwise confirm that you want us to carry out the work.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">2. Services</h2>
                <p>
                  We provide specialist exterior coating and refurbishment services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>External wall coating systems</li>
                  <li>Roof refurbishment and roof coating works</li>
                  <li>uPVC spraying for windows, doors, fascias, and trims</li>
                  <li>Related preparation, repairs, and protection works required for a durable finish</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">3. Quotations</h2>
                <p>
                  All quotations are provided free of charge and without obligation unless stated otherwise. Quotes are based on the information available at the time and are normally valid for 30 days unless we say differently in writing.
                </p>
                <p>
                  If the scope changes, hidden defects are discovered, access is more difficult than expected, or you ask for additional work, we may need to revise the quotation before continuing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">4. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A deposit may be requested to secure booking dates, purchase materials, or commit labour to your project</li>
                  <li>Stage payments may be agreed for larger jobs</li>
                  <li>Final payment is due when the agreed work is substantially complete, unless different payment terms are set out in writing</li>
                  <li>We accept payment by {siteConfig.payment.methods.join(", ")}</li>
                  <li>Late payments may incur reasonable recovery costs and statutory interest where permitted by law</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">5. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information about the property and the work required</li>
                  <li>Give us safe and reasonable access to the areas where work is to be carried out</li>
                  <li>Remove or protect valuables, fragile items, and personal belongings where necessary</li>
                  <li>Ensure utilities and site conditions needed for the job are available</li>
                  <li>Tell us about any known defects, damp, leaks, unstable surfaces, or other issues that could affect preparation or finish quality</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">6. Scheduling and Delays</h2>
                <p>
                  We will make reasonable efforts to start and complete work within the estimated timescales, but dates are estimates unless we have confirmed otherwise in writing. Delays can arise from weather, drying times, access issues, supply delays, illness, or unexpected site conditions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">7. Workmanship and Materials</h2>
                <p>
                  We aim to carry out all work with reasonable care and skill. Unless otherwise agreed, we choose suitable preparation methods and coating materials based on the condition of the surfaces and the agreed finish.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minor snagging should be reported promptly so we can inspect it</li>
                  <li>Natural wear, movement in the building, damp, leaks, or defects in the underlying surface are not treated as workmanship faults</li>
                  <li>If you supply materials, we are not responsible for defects, shortages, or performance issues caused by those products</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">8. Insurance</h2>
                <p>
                  {siteConfig.business.name} maintains comprehensive public liability insurance of {siteConfig.trust.insuranceAmount}. Certificates of insurance are available upon request.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">9. Cancellations and Changes</h2>
                <p>
                  If you need to postpone or cancel booked work, please tell us as soon as possible. Where we have already ordered materials, reserved labour, or turned down other work, we may charge reasonable costs already incurred.
                </p>
                <p>
                  If you are a consumer and the contract is made at a distance or away from our business premises, you may have statutory cancellation rights. Those rights can be lost or reduced where you ask us to begin work within the cancellation period.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">10. Liability</h2>
                <p>
                  Nothing in these terms limits liability where the law does not allow it to be limited. Subject to that, our liability for any claim connected with our services is limited to the amount you paid us for the relevant work, together with any amount covered by our applicable insurance where appropriate.
                </p>
                <p>
                  We are not responsible for indirect or consequential loss, business interruption, or losses caused by pre-existing defects, hidden conditions, or events outside our reasonable control.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">11. Complaints</h2>
                <p>
                  If you are unhappy with any part of our service, please contact us as soon as possible with details of the issue. We will investigate and aim to resolve complaints fairly and within a reasonable time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">12. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">13. Contact Information</h2>
                <p>For any questions regarding these terms, please contact us:</p>
                <div className="bg-secondary rounded-lg p-4 mt-4 border-2 border-gold/30">
                  <p className="font-semibold text-foreground">{siteConfig.business.name}</p>
                  <p>{siteConfig.address.full}</p>
                  <p>Phone: {siteConfig.contact.phone}</p>
                  <p>Email: {siteConfig.contact.email}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;