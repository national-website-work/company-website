import { EnquiryForm } from "../components/common/EnquiryForm";

const CONTACT_EMAIL = "info@national-enterprise.com";
const CONTACT_PHONE = "+91 7457843044";
const CONTACT_PHONE_TEL = "+917457843044";

export function ContactPage() {
  return (
    <div className="ne-contact-page">
      {/* Hero */}
      <section className="ne-section ne-page-title ne-section-light">
        <div className="ne-container ne-fade-up">
          <p className="ne-breadcrumb">
            <a href="#/">Home</a> / <span>Contact &amp; Plant Location</span>
          </p>
          <span className="ne-tag">Factory Desk &amp; Inquiries</span>
          <h1>Get in Touch with National Enterprises</h1>
          <p className="ne-service-lead">
            Connect directly with our manufacturing desk in Roorkee for dealership inquiries, bulk orders, technical consultancy, and private label partnership.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="ne-section">
        <div className="ne-container ne-contact-main-grid">
          {/* Contact Details & Map */}
          <div className="ne-contact-info-col">
            <div className="ne-contact-card">
              <h3>📍 Factory &amp; Head Office</h3>
              <p className="ne-contact-address">
                <strong>National Enterprises</strong><br />
                Near Toll Plaza, Bhagwanpur, Roorkee,<br />
                Haridwar District, Uttarakhand - 247661, India
              </p>

              <div className="ne-contact-item-row">
                <span className="ne-contact-icon">📞</span>
                <div>
                  <strong>Phone / WhatsApp Support:</strong>
                  <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
                </div>
              </div>

              <div className="ne-contact-item-row">
                <span className="ne-contact-icon">📧</span>
                <div>
                  <strong>Official Email:</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>

              <div className="ne-contact-item-row">
                <span className="ne-contact-icon">⏰</span>
                <div>
                  <strong>Operating Hours:</strong>
                  <span>Monday - Saturday: 9:00 AM – 7:00 PM (IST)</span>
                </div>
              </div>

              <div className="ne-contact-item-row">
                <span className="ne-contact-icon">📋</span>
                <div>
                  <strong>GST Verification:</strong>
                  <span>Registered under GST in Roorkee, Uttarakhand (2023)</span>
                </div>
              </div>

              <div className="ne-contact-cta-row">
                <a
                  className="ne-btn ne-btn-green ne-btn-block"
                  href={`https://wa.me/${CONTACT_PHONE_TEL}?text=${encodeURIComponent(
                    "Hi National Enterprises, I want to discuss business and bulk order terms."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Start WhatsApp Conversation
                </a>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="ne-map-wrapper">
              <iframe
                title="National Enterprises Location Bhagwanpur Roorkee"
                src="https://maps.google.com/maps?q=Bhagwanpur+Roorkee+Uttarakhand+247661&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="ne-contact-form-col">
            <EnquiryForm
              title="Send Us a Direct Message"
              subtitle="Fill the form below and our factory representative will contact you within 2-4 hours."
              idPrefix="contact-page-"
              defaultSubject="Website Contact Form Message"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
