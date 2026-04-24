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
          src="https://api.leadconnectorhq.com/widget/form/tcG1O8izc9zbUeZcEdso"
          className="w-full h-[740px] iframe-reset rounded"
          id="inline-tcG1O8izc9zbUeZcEdso"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Client Review + 1 Year Followup Sequence Form"
          data-height="740"
          data-layout-iframe-id="inline-tcG1O8izc9zbUeZcEdso"
          data-form-id="tcG1O8izc9zbUeZcEdso"
          title="Client Review + 1 Year Followup Sequence Form"
        />
      </div>
    </div>
  );
};

export default AddCustomerPage;
