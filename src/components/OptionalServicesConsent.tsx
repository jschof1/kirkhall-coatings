import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "kirkhall-optional-services";

const appendScript = (attributes: Record<string, string | boolean>) => {
  const consentId = attributes["data-uktl-consent"];
  if (document.querySelector("script[data-uktl-consent='" + consentId + "']")) return;

  const script = document.createElement("script");
  Object.entries(attributes).forEach(([name, value]) => {
    if (typeof value === "boolean") script.toggleAttribute(name, value);
    else script.setAttribute(name, value);
  });
  document.head.appendChild(script);
};

const loadOptionalServices = () => {
  appendScript({
    defer: true,
    src: "https://analytics.aspectstudio.net/js/script.js",
    "data-domain": "kirkhallcoatingsltd.com",
    "data-uktl-consent": "plausible",
  });
  appendScript({
    src: "https://widgets.leadconnectorhq.com/loader.js",
    "data-resources-url": "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
    "data-widget-id": "69f0cc73b001cc5eb6643771",
    "data-uktl-consent": "leadconnector-chat",
  });
};

const OptionalServicesConsent = () => {
  const [decision, setDecision] = useState<string | null>(() => localStorage.getItem(CONSENT_KEY));

  useEffect(() => {
    if (decision === "accepted") loadOptionalServices();
  }, [decision]);

  const choose = (nextDecision: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, nextDecision);
    setDecision(nextDecision);
  };

  if (decision) return null;

  return (
    <aside
      aria-label="Optional website services"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl border-2 border-primary/20 bg-background p-5 shadow-2xl"
      role="dialog"
    >
      <h2 className="font-display text-xl font-bold text-foreground">Optional website services</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        With your permission, we use analytics to understand aggregated website use and load our optional chat service.
        These services are off unless you choose to accept.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Read our <Link className="font-bold text-primary underline" to="/privacy-policy">Privacy Policy</Link> for details.
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button className="border-2 border-primary/30 px-4 py-2 text-sm font-bold text-primary" onClick={() => choose("declined")}>
          Decline optional services
        </button>
        <button className="bg-primary px-4 py-2 text-sm font-bold text-primary-foreground" onClick={() => choose("accepted")}>
          Accept optional services
        </button>
      </div>
    </aside>
  );
};

export default OptionalServicesConsent;
