import { useState } from "react";
import { services } from "../data/services";
import { ServicesIndexPage } from "./ServicesIndexPage";
import { EnquiryForm } from "../components/common/EnquiryForm";

const WHATSAPP_NUMBER = "+917457843044";

interface ServiceDetailPageProps {
  slug: string;
  onOpenRawMaterials?: () => void;
}

export function ServiceDetailPage({ slug, onOpenRawMaterials }: ServiceDetailPageProps) {
  const service = services.find((item) => item.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) return <ServicesIndexPage />;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    service.whatsappMessage || `Hi National Enterprises, I want to discuss ${service.title}.`
  )}`;
  const otherServices = services.filter((item) => item.slug !== service.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const isChemicalSourcing = service.slug === "chemical-sourcing";

  return (
    <div className="ne-service-detail-page">
      {/* Service Hero */}
      <section className="ne-section ne-service-hero">
        <div className="ne-container ne-service-hero-grid ne-fade-up">
          <div className="ne-service-hero-text">
            <p className="ne-breadcrumb">
              <a href="#/">Home</a> / <a href="#/services">Services</a> / <span>{service.title}</span>
            </p>
            <span className="ne-tag">{service.badge}</span>
            <h1>{service.title}</h1>
            <p className="ne-service-lead">{service.hero}</p>
            <div className="ne-service-hero-actions">
              <a className="ne-btn ne-btn-green" href={whatsappHref} target="_blank" rel="noreferrer">
                💬 Discuss on WhatsApp
              </a>
              {isChemicalSourcing && onOpenRawMaterials ? (
                <button className="ne-btn ne-btn-accent" onClick={onOpenRawMaterials}>
                  🧪 View 16+ Raw Materials Catalog
                </button>
              ) : (
                <a className="ne-btn ne-btn-primary" href="#service-enquiry-section">
                  📋 Submit Service Inquiry
                </a>
              )}
            </div>
          </div>
          <div className="ne-media-frame ne-service-hero-media">
            <img src={service.image} alt={service.title} loading="eager" />
          </div>
        </div>
      </section>

      {/* Comprehensive Overview & Audience */}
      <section className="ne-section ne-section-light">
        <div className="ne-container">
          <div className="ne-service-overview-grid">
            <div className="ne-service-overview-copy">
              <span className="ne-tag">In-Depth Overview</span>
              <h2>Technical Scope &amp; Capabilities</h2>
              {service.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="ne-service-audience-card">
              <h3>🎯 Who This Service Is Designed For</h3>
              <p>{service.audience}</p>
              <div className="ne-audience-benefits">
                <h4>Key Advantages:</h4>
                <ul>
                  {service.offerings.slice(0, 4).map((offering, idx) => (
                    <li key={idx}>✓ {offering}</li>
                  ))}
                </ul>
              </div>
              <a className="ne-btn ne-btn-green ne-btn-block" href={whatsappHref} target="_blank" rel="noreferrer">
                Instant WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED RAW MATERIALS PORTFOLIO SECTION (For Chemical Sourcing Service) */}
      {isChemicalSourcing && (
        <section className="ne-section ne-service-rm-portfolio-section">
          <div className="ne-container">
            <div className="ne-section-header">
              <span className="ne-tag">Chemical Inventory</span>
              <h2 className="ne-section-title">Available Raw Materials for Laundry &amp; Cleaning Formulation</h2>
              <p className="ne-section-subtitle">
                Supplying verified high-purity chemicals in 50KG HDPE bags, 200KG sealed drums, and bulk tanker lots with batch-wise COA reports.
              </p>
            </div>

            <div className="ne-service-rm-portfolio-grid">
              {/* Category 1: Powders */}
              <div className="ne-service-rm-col">
                <div className="ne-service-rm-header">
                  <span className="ne-service-rm-icon">🧱</span>
                  <div>
                    <h3>Powders &amp; Builders</h3>
                    <span>7 Core Alkaline Ingredients</span>
                  </div>
                </div>
                <ul className="ne-service-rm-list">
                  <li>
                    <strong>Soda Ash (Light &amp; Dense):</strong> 99.2% Pure alkaline builder &amp; water softener
                  </li>
                  <li>
                    <strong>Industrial Salt (NaCl):</strong> Vacuum dried density builder &amp; costing filler
                  </li>
                  <li>
                    <strong>Dolomite Powder:</strong> 300–400 mesh free-flowing anti-caking filler
                  </li>
                  <li>
                    <strong>Trisodium Phosphate (TSP):</strong> Heavy-duty soil disperser &amp; grease cutter
                  </li>
                  <li>
                    <strong>Detergent Premix:</strong> Ready-to-mix all-in-one booster compound
                  </li>
                  <li>
                    <strong>Precipitated Silica:</strong> Machine anti-corrosion &amp; moisture absorber
                  </li>
                  <li>
                    <strong>Caustic Soda Flakes:</strong> 99.5% Rayon grade neutralizing alkali
                  </li>
                </ul>
              </div>

              {/* Category 2: Liquids */}
              <div className="ne-service-rm-col">
                <div className="ne-service-rm-header">
                  <span className="ne-service-rm-icon">💧</span>
                  <div>
                    <h3>Liquids &amp; Surfactants</h3>
                    <span>7 High-Active Ingredients</span>
                  </div>
                </div>
                <ul className="ne-service-rm-list">
                  <li>
                    <strong>Acid Slurry (LABSA 90%/96%):</strong> Primary anionic foaming &amp; cleaning active
                  </li>
                  <li>
                    <strong>AOS Liquid (38% Active):</strong> Flash foam booster &amp; hard water active
                  </li>
                  <li>
                    <strong>SLS Liquid / Needles:</strong> Heavy degreasing &amp; crystal clear lather base
                  </li>
                  <li>
                    <strong>OT Paste:</strong> Super wetting agent for 3x faster fabric penetration
                  </li>
                  <li>
                    <strong>Anti-Redeposition Polymer:</strong> Anti-graying shield for brilliant whites
                  </li>
                  <li>
                    <strong>CVX / CBS-X (Tinopal):</strong> High-photostability fluorescent fabric whitener
                  </li>
                  <li>
                    <strong>Laundry Perfumes:</strong> High-alkali stable Lemon, Jasmine &amp; Lavender oils
                  </li>
                </ul>
              </div>

              {/* Category 3: Specialty */}
              <div className="ne-service-rm-col">
                <div className="ne-service-rm-header">
                  <span className="ne-service-rm-icon">✨</span>
                  <div>
                    <h3>Specialty Additives</h3>
                    <span>2 Value-Add Ingredients</span>
                  </div>
                </div>
                <ul className="ne-service-rm-list">
                  <li>
                    <strong>Multi-Enzyme Granules:</strong> Protease, Amylase &amp; Lipase for bio-stain breakdown
                  </li>
                  <li>
                    <strong>Colored Soap Noodles:</strong> Blue, Red &amp; Green speckles for commercial shelf appeal
                  </li>
                </ul>
                <div className="ne-service-rm-box-highlight">
                  <strong>📦 Fast Dispatch from Roorkee:</strong>
                  <span>Stock available for immediate loading across North India.</span>
                </div>
              </div>
            </div>

            <div className="ne-service-rm-cta-center">
              {onOpenRawMaterials && (
                <button className="ne-btn ne-btn-accent ne-btn-lg" onClick={onOpenRawMaterials}>
                  🧪 View Complete Specifications &amp; Request Spot Rates (16 Items) →
                </button>
              )}
              <a
                className="ne-btn ne-btn-green ne-btn-lg"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi National Enterprises, I want to inquire about bulk raw materials supply (Soda Ash, LABSA, Salt, SLES, Fragrances, etc.). Please share today's factory spot rates."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Inquire Raw Materials on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 4-Step Process Flow Timeline */}
      <section className="ne-section">
        <div className="ne-container">
          <div className="ne-section-header">
            <span className="ne-tag">Execution Roadmap</span>
            <h2 className="ne-section-title">How the Process Works (Step-by-Step)</h2>
            <p className="ne-section-subtitle">A transparent, structured timeline from initial requirement mapping to commercial batch dispatch.</p>
          </div>

          <div className="ne-process-timeline">
            {service.processFlow.map((step) => (
              <div className="ne-process-step-card" key={step.stepNumber}>
                <div className="ne-process-step-header">
                  <span className="ne-process-step-num">{step.stepNumber}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables Section */}
      <section className="ne-section ne-section-light">
        <div className="ne-container">
          <div className="ne-section-header">
            <span className="ne-tag">Tangible Results</span>
            <h2 className="ne-section-title">What You Receive (Deliverables)</h2>
            <p className="ne-section-subtitle">Concrete documentation, quality assays, and production assets provided with this service.</p>
          </div>

          <div className="ne-deliverables-grid">
            {service.deliverables.map((item, idx) => (
              <div className="ne-deliverable-card" key={idx}>
                <div className="ne-deliverable-icon">📦</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ne-section">
        <div className="ne-container ne-narrow">
          <div className="ne-section-header">
            <span className="ne-tag">Common Questions</span>
            <h2 className="ne-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="ne-faq-accordion">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`ne-faq-item ${isOpen ? "is-open" : ""}`} key={index}>
                  <button
                    className="ne-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ne-faq-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="ne-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated Service Enquiry Form Band */}
      <section className="ne-section ne-section-light" id="service-enquiry-section">
        <div className="ne-container">
          <div className="ne-enquiry-band">
            <div className="ne-enquiry-copy">
              <span className="ne-tag">Direct Consultation</span>
              <h2>Discuss Your Requirement with Our Chemical Desk</h2>
              <p>
                Whether you need technical clarification, spot pricing for raw chemicals, formulation guidance, or pilot sample testing, our team in Roorkee is ready to assist you.
              </p>
              <div className="ne-service-direct-box">
                <a className="ne-btn ne-btn-green ne-btn-block" href={whatsappHref} target="_blank" rel="noreferrer">
                  💬 Connect on WhatsApp (+91 7457843044)
                </a>
                <p className="ne-service-direct-note">Direct factory response within 2-4 business hours.</p>
              </div>
            </div>

            <div className="ne-enquiry-form-wrapper">
              <EnquiryForm
                title={`Inquire About: ${service.title}`}
                subtitle="Enter your details and our technical team will reach out promptly."
                idPrefix={`${service.slug}-`}
                defaultSubject={`Service Inquiry: ${service.title}`}
                prefillMessage={`I want to consult regarding ${service.title}. Please provide more details on commercials, feasibility, and next steps.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="ne-section">
        <div className="ne-container">
          <h2 className="ne-section-title">Explore Other Capabilities</h2>
          <div className="ne-other-services-grid">
            {otherServices.map((item) => (
              <a className="ne-other-service-card" href={`#/services/${item.slug}`} key={item.slug}>
                <span className="ne-other-service-badge">{item.badge}</span>
                <strong>{item.title}</strong>
                <p>{item.short}</p>
                <span className="ne-other-service-link">View Service Details →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
