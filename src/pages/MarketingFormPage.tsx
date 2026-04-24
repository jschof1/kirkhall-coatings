import SEO from "@/components/SEO";
import { Star, Smartphone } from "lucide-react";

const MarketingFormPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SEO title="Customer Added to Pipeline" noindex={true} />
      <div className="w-full max-w-2xl">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-2">
            Customer Added to Pipeline
          </h1>
          <p className="text-muted-foreground mb-8">
            Great news! Here&apos;s what happens next when you add a customer to the pipeline.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-1">
                  This will send out your 5 star review request funnel
                </h2>
                <p className="text-sm text-muted-foreground mb-2">
                  (Gate keeping negative reviews)
                </p>
                <p className="text-sm text-muted-foreground">
                  Customer will be reminded to leave you a 5 star review 4 times over a 4 week
                  period. <span className="font-medium text-foreground">Automation will stop if
                  they leave a review.</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-muted-foreground">↓</span>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground mb-1">
                  Customer will be put into your 1 year follow up sequence
                </h2>
                <p className="text-sm text-muted-foreground">
                  Customer will be texted every 2–3 months reminding them of your return customer
                  discount + requesting referrals for the same discount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFormPage;
