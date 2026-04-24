import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO 
        title={`Privacy Policy ${siteConfig.seo.titleSuffix}`}
        description={`Privacy Policy for ${siteConfig.business.name}. Learn how we collect, use, and protect your personal information.`}
        noindex={true}
      />

      <Header />

      <main className="min-h-screen bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg">
                Last updated: {siteConfig.legal.privacyPolicyLastUpdated}
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">1. Who We Are</h2>
                <p>
                  {siteConfig.business.name} ("we", "our", or "us") provides external wall coatings, roof refurbishment, and uPVC spraying across North Lanarkshire and Glasgow. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website, request a quote, contact us, or use our services.
                </p>
                <p>
                  For the purposes of UK data protection law, we are the controller of the personal information you provide to us through this website and during the course of our work.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact details:</strong> your name, phone number, email address, postcode, and address when you contact us or request a quote.</li>
                  <li><strong>Project details:</strong> information about your property, decorating requirements, timings, budget range, photos, and any notes you give us so we can price and deliver the work.</li>
                  <li><strong>Communication records:</strong> emails, call notes, enquiry forms, feedback, and review-related messages.</li>
                  <li><strong>Website usage data:</strong> technical information such as device type, browser type, IP address, pages visited, and referral source collected through normal website logs and any analytics tools we use.</li>
                  <li><strong>CRM and chat data:</strong> information submitted through our website forms and chat tools, which may be processed through LeadConnector services used to manage enquiries and follow-up.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">3. How We Collect It</h2>
                <p>We collect personal information when:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>you complete a quote, contact, discount, or feedback form on our website</li>
                  <li>you call, email, or message us directly</li>
                  <li>we visit your property, prepare a quotation, or carry out work for you</li>
                  <li>you browse our website and standard technical data is collected automatically</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">4. How We Use Your Information</h2>
                <p>We use personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>respond to enquiries and provide quotations</li>
                  <li>arrange site visits, schedule work, and deliver our services</li>
                  <li>communicate with you about your project, booking, payment, or aftercare</li>
                  <li>record customer feedback and manage reviews</li>
                  <li>improve our website, service quality, and customer experience</li>
                  <li>keep business and accounting records</li>
                  <li>comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">5. Our Legal Bases</h2>
                <p>Under UK GDPR, we rely on one or more of the following legal bases depending on the situation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contract:</strong> where we need your information to provide a quote or carry out decorating services you have asked for.</li>
                  <li><strong>Legitimate interests:</strong> where we need to run and improve our business, respond to enquiries, keep records, and prevent misuse of our website.</li>
                  <li><strong>Legal obligation:</strong> where we must keep records or disclose information to comply with the law.</li>
                  <li><strong>Consent:</strong> where you have clearly agreed to a specific use of your data and you can withdraw that consent later.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">6. Sharing Your Information</h2>
                <p>
                  We do not sell your personal information. We may share it only where reasonably necessary, including with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>trusted service providers who help us run the website, manage enquiries, or process payments</li>
                  <li>LeadConnector and related service providers used to collect quote, contact, discount, feedback, and chat submissions from our website</li>
                  <li>professional advisers such as accountants, insurers, or legal advisers where needed</li>
                  <li>regulators, authorities, or law enforcement where required by law</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">7. Data Security</h2>
                <p>
                  We take reasonable technical and organisational steps to protect personal information against unauthorised access, loss, misuse, or disclosure. No online system can be guaranteed completely secure, but we aim to keep your data protected and only accessible where there is a genuine business need.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">8. Data Retention</h2>
                <p>
                  We retain personal information only for as long as reasonably necessary for the purposes described in this policy. This usually means keeping enquiry, project, and accounting records for as long as needed to manage the work and meet tax, insurance, warranty, or legal obligations. Some records may be kept for up to 7 years where required for business or compliance reasons.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">9. Your Rights</h2>
                <p>Under UK data protection law, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ask for access to the personal information we hold about you</li>
                  <li>ask us to correct inaccurate or incomplete information</li>
                  <li>ask us to delete information where there is no valid reason for us to keep it</li>
                  <li>object to or restrict certain types of processing</li>
                  <li>request transfer of certain data to another provider where applicable</li>
                  <li>withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  You also have the right to complain to the Information Commissioner's Office (ICO) if you believe your information has been handled unlawfully.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">10. Cookies and Third-Party Tools</h2>
                <p>
                  Our website may use cookies or similar technologies for essential site functionality, basic analytics, and embedded third-party tools. This includes LeadConnector-powered forms and chat widgets used to capture and manage enquiries. You can control cookies through your browser settings, although some parts of the site may not work as intended if certain cookies are blocked.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-secondary rounded-lg p-4 mt-4 border-2 border-gold/30">
                  <p className="font-semibold text-foreground">{siteConfig.business.name}</p>
                  <p>{siteConfig.address.full}</p>
                  <p>Phone: {siteConfig.contact.phone}</p>
                  <p>Email: {siteConfig.contact.email}</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">12. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes to our business, website, or legal obligations. Any material changes will be published on this page with the revised date shown above.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
