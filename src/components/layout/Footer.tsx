import { services } from "../../data/services";

const CONTACT_EMAIL = "info@national-enterprise.com";
const CONTACT_PHONE = "+91 7457843044";
const CONTACT_PHONE_TEL = "+917457843044";

export function Footer({ onOpenRFQ }: { onOpenRFQ?: () => void }) {
  return (
    <footer className="ne-footer">
      <div className="ne-container ne-footer-grid">
        {/* Brand Information */}
        <section className="ne-footer-brand">
          <a href="#/" aria-label="National Enterprises Home" className="ne-footer-logo-wrap">
            <div className="ne-footer-logo-box">
              <img src="/ne-logo.svg" alt="National Enterprises logo" className="ne-footer-logo" />
            </div>
          </a>
          <p className="ne-footer-tagline">
            Quality. Consistency. Trust.
          </p>
          <p className="ne-footer-bio">
            Manufacturing &amp; supplying high-active detergent powders, liquid cleaners, and chemical formulation solutions across India.
          </p>
          <div className="ne-footer-badges">
            <span className="ne-pill-sm">GST Registered</span>
            <span className="ne-pill-sm">Make in India</span>
            <span className="ne-pill-sm">40+ Yrs Heritage</span>
          </div>
        </section>

        {/* Manufacturing & Services */}
        <section>
          <h4 className="ne-section-title">Core Services</h4>
          <ul className="ne-footer-list">
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`#/services/${service.slug}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Quick Links */}
        <section>
          <h4 className="ne-section-title">Quick Navigation</h4>
          <ul className="ne-footer-list">
            <li>
              <a href="#/">Home Page</a>
            </li>
            <li>
              <a href="#/products">All Products &amp; Catalog</a>
            </li>
            <li>
              <a href="#/services">Services Directory</a>
            </li>
            <li>
              <a href="#/contact">Factory Contact &amp; Maps</a>
            </li>
            {onOpenRFQ && (
              <li>
                <button className="ne-footer-text-btn" onClick={onOpenRFQ}>
                  ⚡ Bulk Quotation Builder
                </button>
              </li>
            )}
          </ul>
        </section>

        {/* Plant & Contact Details */}
        <section>
          <h4 className="ne-section-title">Factory &amp; Head Office</h4>
          <div className="ne-footer-contact">
            <p>
              <strong>Phone / WhatsApp:</strong>{" "}
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              <strong>Manufacturing Facility:</strong><br />
              Near Toll Plaza, Bhagwanpur, Roorkee, Haridwar District, Uttarakhand - 247661, India
            </p>
            <p>
              <a
                className="ne-footer-map-link"
                href="https://maps.google.com/?q=Bhagwanpur+Roorkee+Uttarakhand+247661"
                target="_blank"
                rel="noreferrer"
              >
                📍 View Plant on Google Maps →
              </a>
            </p>
          </div>
        </section>
      </div>

      <div className="ne-copyright">
        <div className="ne-container ne-copyright-content">
          <span>© {new Date().getFullYear()} National Enterprises. All rights reserved.</span>
          <span>Roorkee, Uttarakhand, India | Direct Industrial Chemical &amp; Cleaning Supplies</span>
        </div>
      </div>
    </footer>
  );
}
