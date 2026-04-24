import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@uktradeleads/shared/hooks";
// import { ExitIntentPopup } from "./components/ExitIntentPopup";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import GetQuotePage from "./pages/GetQuotePage";
import ReviewsPage from "./pages/ReviewsPage";
import FeedbackPage from "./pages/FeedbackPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DynamicSlugPage from "./pages/DynamicSlugPage";
import LocationsPage from "./pages/LocationsPage";
import NotFound from "./pages/NotFound";
import DiscountPage from "./pages/DiscountPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import SitemapPage from "./pages/SitemapPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import AddCustomerPage from "./pages/AddCustomerPage";
import MarketingFormPage from "./pages/MarketingFormPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <ExitIntentPopup /> */}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route
              path="/projects/:projectSlug"
              element={<ProjectDetailPage />}
            />
            <Route path="/discount" element={<DiscountPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/add-customer" element={<AddCustomerPage />} />
            <Route path="/marketing-form" element={<MarketingFormPage />} />
            <Route path="/:slug" element={<DynamicSlugPage />} />
            <Route path="/locations/:slug" element={<DynamicSlugPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
