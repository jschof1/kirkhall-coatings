import SEO from "@/components/SEO";
import { useEffect } from "react";

const AddCustomerPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SEO
        title="Add Customer"
        noindex={true}
      />
      <div className="w-full max-w-2xl">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/9eevCqOLFZdgTP6mMXLN"
          className="iframe-reset block h-[835px] w-full rounded-lg border-0"
          id="inline-9eevCqOLFZdgTP6mMXLN"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Client Review + 1 Year Followup Sequence Form"
          data-height="835"
          data-layout-iframe-id="inline-9eevCqOLFZdgTP6mMXLN"
          data-form-id="9eevCqOLFZdgTP6mMXLN"
          title="Client Review + 1 Year Followup Sequence Form"
        />
      </div>
    </div>
  );
};

export default AddCustomerPage;
