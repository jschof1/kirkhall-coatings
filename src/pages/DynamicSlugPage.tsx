import { useParams, Navigate, useLocation } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import { getAreaBySlug } from "@/data/areas";
import ServiceDetailPage from "./ServiceDetailPage";
import AreaPage from "./AreaPage";
import NotFound from "./NotFound";

const DynamicSlugPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  if (!slug) {
    return <NotFound />;
  }

  if (slug === "roof-refurbishment") {
    return <Navigate to="/upvc-spraying" replace />;
  }

  // If the URL contains /locations/, redirect to the flat version
  if (location.pathname.startsWith('/locations/')) {
    return <Navigate to={`/${slug}`} replace />;
  }

  // Check if it's a service
  const service = getServiceBySlug(slug);
  if (service) {
    return <ServiceDetailPage />;
  }

  // Check if it's an area
  const area = getAreaBySlug(slug);
  if (area) {
    return <AreaPage />;
  }

  return <NotFound />;
};

export default DynamicSlugPage;
