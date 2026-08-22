import { useState } from "react";
import { services } from "../data/services";
import { ServicesIndexPage } from "./ServicesIndexPage";
import { EnquiryForm } from "../components/common/EnquiryForm";

const WHATSAPP_NUMBER = "+917457843044";

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
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
              <a className="ne-btn ne-btn-primary" href="#service-enquiry-section">
                📋 Submit Service Inquiry
              </a>
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
                Whether you need technical clarification, pricing estimates, formulation guidance, or pilot sample testing, our team in Roorkee is ready to assist you.
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
