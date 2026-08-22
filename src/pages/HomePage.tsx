import { products } from "../data/products";
import { services } from "../data/services";
import { TrustBadges } from "../components/features/TrustBadges";

interface HomePageProps {
  onOpenRFQ?: () => void;
  onOpenSampleKit?: () => void;
}

export function HomePage({ onOpenRFQ, onOpenSampleKit }: HomePageProps) {
  const featuredProducts = products.filter((p) => p.isPopular).slice(0, 4);

  return (
    <div className="ne-home">
      {/* Hero Section */}
      <section className="ne-hero" id="home">
        <div className="ne-container ne-hero-grid ne-fade-up">
          <div className="ne-hero-content">
            <div className="ne-hero-pill">
              ⭐ 40+ Years Chemical Synthesis &amp; Manufacturing Domain
            </div>
            <h1>
              Industrial Detergent &amp; Cleaning Products Manufacturing in <span className="ne-text-highlight">Roorkee, India</span>
            </h1>
            <p>
              National Enterprises supplies high-active detergent powders, liquid surface cleaners, toilet cleaners, and bulk chemical raw materials to dealers, contract brands, and institutional buyers across India.
            </p>

            <div className="ne-hero-actions">
              <a className="ne-btn ne-btn-primary" href="#/products">
                🧴 View All Products
              </a>
              {onOpenRFQ && (
                <button className="ne-btn ne-btn-secondary" onClick={onOpenRFQ}>
                  📋 Request Bulk Quote (RFQ)
                </button>
              )}
              {onOpenSampleKit && (
                <button className="ne-btn ne-btn-accent" onClick={onOpenSampleKit}>
                  📦 Order Sample Kit
                </button>
              )}
            </div>

            <div className="ne-hero-metrics">
              <div className="ne-metric-item">
                <strong>40+ Yrs</strong>
                <span>Industry Experience</span>
              </div>
              <div className="ne-metric-item">
                <strong>100%</strong>
                <span>Lab Formulation Consistency</span>
              </div>
              <div className="ne-metric-item">
                <strong>Pan-India</strong>
                <span>Dispatch Network</span>
              </div>
            </div>
          </div>

          <div className="ne-hero-media">
            <img
              src="/images/banner_all.webp"
              alt="National Enterprises MX Pure cleaning and laundry product lineup"
              className="ne-hero-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <TrustBadges />

      {/* Core Services Section */}
      <section className="ne-section ne-services-preview">
        <div className="ne-container">
          <div className="ne-section-header">
            <span className="ne-tag">Our Capabilities</span>
            <h2 className="ne-section-title">What We Do: Manufacturing, Sourcing &amp; Consultancy</h2>
            <p className="ne-section-subtitle">
              From contract blending to factory formulation advisory, explore how our Roorkee facility supports FMCG dealers and manufacturers.
            </p>
          </div>

          <div className="ne-services-grid">
            {services.map((service, idx) => (
              <article className="ne-service-card" key={service.slug}>
                <div className="ne-service-card-img-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <span className="ne-service-card-badge">{service.badge}</span>
                </div>
                <div className="ne-service-card-body">
                  <span className="ne-service-num">0{idx + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <div className="ne-service-card-footer">
                    <a className="ne-btn ne-btn-outline-sm" href={`#/services/${service.slug}`}>
                      Explore Service &amp; Process →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="ne-section ne-section-light">
        <div className="ne-container">
          <div className="ne-section-header ne-flex-header">
            <div>
              <span className="ne-tag">Commercial Catalog</span>
              <h2 className="ne-section-title">High-Demand Cleaning Products</h2>
              <p className="ne-section-subtitle">Factory-direct wholesale supply with custom branding and bulk packaging options.</p>
            </div>
            <a className="ne-btn ne-btn-primary" href="#/products">
              View All SKUs &amp; Raw Materials →
            </a>
          </div>

          <div className="ne-product-grid">
            {featuredProducts.map((product) => (
              <article className="ne-product-card" key={product.id}>
                <div className="ne-product-img-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.category && <span className="ne-product-cat-pill">{product.category}</span>}
                </div>
                <div className="ne-product-content">
                  <h3>{product.name}</h3>
                  <p className="ne-product-desc">{product.description}</p>
                  {product.moq && (
                    <div className="ne-product-moq">
                      <strong>Standard MOQ:</strong> {product.moq}
                    </div>
                  )}
                  <div className="ne-product-card-actions">
                    <a
                      className="ne-btn ne-btn-green ne-btn-sm"
                      href={`https://wa.me/+917457843044?text=${encodeURIComponent(
                        `Hi National Enterprises, I want wholesale pricing and MOQ details for: ${product.name}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Heritage Section */}
      <section className="ne-section ne-about-preview">
        <div className="ne-container">
          <div className="ne-home-about-grid">
            <div className="ne-about-media-box">
              <img src="/images/about_us.webp" alt="National Enterprises Plant and Laboratory" loading="lazy" />
              <div className="ne-about-floating-card">
                <strong>📍 Bhagwanpur, Roorkee</strong>
                <span>Near Toll Plaza, Uttarakhand</span>
              </div>
            </div>
            <div className="ne-about-text-content">
              <span className="ne-tag">About National Enterprises</span>
              <h2>Four Decades of Chemical Synthesis &amp; Manufacturing Discipline</h2>
              <p>
                National Enterprises brings over 40 years of hands-on experience in the chemical manufacturing domain. Registered under GST in Roorkee, Uttarakhand, our operations combine traditional formulation precision with modern batch production lines.
              </p>
              <p>
                Whether you need dependable contract manufacturing for detergent powders and surface cleaners, require pure chemical raw materials (LABSA, SLES, Soda Ash), or seek technical consultancy to optimize your own plant&apos;s cost-per-kg, our team provides transparent, factory-direct partnership.
              </p>
              <div className="ne-about-highlights">
                <div className="ne-about-check">✓ In-house formulation laboratory &amp; quality testing</div>
                <div className="ne-about-check">✓ Fully compliant with Indian Legal Metrology &amp; GST norms</div>
                <div className="ne-about-check">✓ Direct truckload dispatches across all North &amp; Central Indian states</div>
              </div>
              <div className="ne-about-actions">
                <a className="ne-btn ne-btn-primary" href="#/contact">
                  Connect with Factory Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="ne-cta-band">
        <div className="ne-container ne-cta-content">
          <div>
            <h2>Ready to Expand Your Cleaning Products Business?</h2>
            <p>Get instant factory quotes, request trial sample boxes, or discuss contract manufacturing terms.</p>
          </div>
          <div className="ne-cta-btns">
            <a
              className="ne-btn ne-btn-green ne-btn-lg"
              href="https://wa.me/+917457843044?text=Hi%20National%20Enterprises,%20I%20want%20to%20discuss%20dealership%20and%20bulk%20supply."
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Direct Desk
            </a>
            <a className="ne-btn ne-btn-light ne-btn-lg" href="#/contact">
              Send Email Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
