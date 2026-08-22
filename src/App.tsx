import { useEffect, useMemo, useState } from "react";
import type { RouteKey } from "./types";
import { services } from "./data/services";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFAB } from "./components/common/WhatsAppFAB";
import { RFQBuilderModal } from "./components/features/RFQBuilderModal";
import { SampleKitModal } from "./components/features/SampleKitModal";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ServicesIndexPage } from "./pages/ServicesIndexPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ContactPage } from "./pages/ContactPage";

function getRouteFromHash(hash: string): RouteKey {
  const cleanHash = hash.replace("#", "").toLowerCase();
  if (cleanHash.startsWith("/products")) return "products";
  if (cleanHash.startsWith("/services")) return "services";
  if (cleanHash.startsWith("/contact")) return "contact";
  return "home";
}

function getServiceSlug(hash: string): string | null {
  const cleanHash = hash.replace("#", "").toLowerCase();
  const match = cleanHash.match(/^\/services\/([a-z0-9-]+)/);
  if (!match) return null;
  return services.some((service) => service.slug === match[1]) ? match[1] : null;
}

function getRouteHref(route: RouteKey) {
  if (route === "home") return "#/";
  return `#/${route}`;
}

export default function App() {
  const [route, setRoute] = useState<RouteKey>(() => getRouteFromHash(window.location.hash));
  const [serviceSlug, setServiceSlug] = useState<string | null>(() => getServiceSlug(window.location.hash));
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [isSampleKitOpen, setIsSampleKitOpen] = useState(false);

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = getRouteHref("home");
    }

    const onHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
      setServiceSlug(getServiceSlug(window.location.hash));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = useMemo(() => {
    if (route === "products") {
      return (
        <ProductsPage
          onOpenRFQ={() => setIsRFQOpen(true)}
          onOpenSampleKit={() => setIsSampleKitOpen(true)}
        />
      );
    }
    if (route === "services") {
      return serviceSlug ? (
        <ServiceDetailPage slug={serviceSlug} />
      ) : (
        <ServicesIndexPage />
      );
    }
    if (route === "contact") {
      return <ContactPage />;
    }
    return (
      <HomePage
        onOpenRFQ={() => setIsRFQOpen(true)}
        onOpenSampleKit={() => setIsSampleKitOpen(true)}
      />
    );
  }, [route, serviceSlug]);

  return (
    <div className="ne-app">
      <Header
        activeRoute={route}
        onOpenRFQ={() => setIsRFQOpen(true)}
      />

      <main>{page}</main>

      <WhatsAppFAB />

      <Footer onOpenRFQ={() => setIsRFQOpen(true)} />

      {/* Global Modals */}
      <RFQBuilderModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
      />

      <SampleKitModal
        isOpen={isSampleKitOpen}
        onClose={() => setIsSampleKitOpen(false)}
      />
    </div>
  );
}
