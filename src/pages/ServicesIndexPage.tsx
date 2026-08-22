import { services } from "../data/services";

export function ServicesIndexPage() {
  return (
    <div className="ne-services-page">
      {/* Page Header */}
      <section className="ne-section ne-page-hero">
        <div className="ne-container ne-fade-up">
          <p className="ne-breadcrumb">
            <a href="#/">Home</a> / <span>Services &amp; Capabilities</span>
          </p>
          <span className="ne-tag">Manufacturing &amp; Industrial Solutions</span>
          <h1>Industrial Chemical &amp; Cleaning Services</h1>
          <p className="ne-service-lead">
            Backed by four decades of chemical blending operations in Roorkee, we support entrepreneurs, distributors, and established brands through contract manufacturing, plant setup consultancy, private labeling, and bulk chemical sourcing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="ne-section">
        <div className="ne-container">
          <div className="ne-service-index-grid-rich">
            {services.map((service, index) => (
              <article className="ne-service-index-card-rich" key={service.slug}>
                <div className="ne-service-index-media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <span className="ne-service-index-badge">{service.badge}</span>
                </div>
                <div className="ne-service-index-content">
                  <div className="ne-service-index-header">
                    <span className="ne-service-index-num">0{index + 1}</span>
                    <h2>{service.title}</h2>
                  </div>
                  <p className="ne-service-index-short">{service.short}</p>

                  <div className="ne-service-index-offerings-preview">
                    <strong>Core Offerings:</strong>
                    <ul>
                      {service.offerings.slice(0, 3).map((item, i) => (
                        <li key={i}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="ne-service-index-actions">
                    <a className="ne-btn ne-btn-primary" href={`#/services/${service.slug}`}>
                      View Complete Process &amp; Deliverables →
                    </a>
                    <a
                      className="ne-btn ne-btn-green"
                      href={`https://wa.me/+917457843044?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Consultation
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Strip */}
      <section className="ne-section ne-section-light">
        <div className="ne-container">
          <div className="ne-section-header">
            <span className="ne-tag">The National Enterprises Advantage</span>
            <h2 className="ne-section-title">Why Industry Leaders Trust Our Services</h2>
          </div>
          <div className="ne-why-grid">
            <article>
              <div className="ne-icon">01</div>
              <h3>40+ Years Chemical Domain</h3>
              <p>Practical chemical engineering expertise, avoiding theoretical guesswork and unnecessary experimentation costs.</p>
            </article>
            <article>
              <div className="ne-icon">02</div>
              <h3>Active Matter Consistency</h3>
              <p>Rigid lab quality control ensuring guaranteed surfactant active percentages ($AD\%$) and long-term fragrance retention.</p>
            </article>
            <article>
              <div className="ne-icon">03</div>
              <h3>Direct Factory Economics</h3>
              <p>No intermediaries or brokerage markups. Direct manufacturer pricing and transparent raw material costing sheets.</p>
            </article>
            <article>
              <div className="ne-icon">04</div>
              <h3>Complete Confidentiality</h3>
              <p>Non-disclosure protection for proprietary private label formulas, trade recipes, and client client lists.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
