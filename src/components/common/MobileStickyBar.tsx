import { trackMetaLead } from "../../utils/analytics";

const PHONE_NUMBER = "+91 7457843044";
const PHONE_TEL = "+917457843044";
const WHATSAPP_NUMBER = "+917457843044";

export function MobileStickyBar() {
  const handleWhatsAppClick = () => {
    trackMetaLead("Mobile Sticky Bar WhatsApp", { channel: "WhatsApp" });
  };

  const handleCallClick = () => {
    trackMetaLead("Mobile Sticky Bar Phone Call", { channel: "Phone" });
  };

  return (
    <aside className="ne-mobile-sticky-bar" aria-label="Quick Mobile Actions">
      <a
        href={`tel:${PHONE_TEL}`}
        className="ne-mobile-sticky-btn ne-sticky-call"
        onClick={handleCallClick}
      >
        <span className="ne-sticky-icon">📞</span>
        <div className="ne-sticky-text">
          <span className="ne-sticky-sub">Call Factory</span>
          <strong>{PHONE_NUMBER}</strong>
        </div>
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hi National Enterprises, I want to inquire about factory pricing, MOQ, and sample dispatch."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="ne-mobile-sticky-btn ne-sticky-wa"
        onClick={handleWhatsAppClick}
      >
        <span className="ne-sticky-icon">💬</span>
        <div className="ne-sticky-text">
          <span className="ne-sticky-sub">Instant Rates</span>
          <strong>WhatsApp RFQ</strong>
        </div>
      </a>
    </aside>
  );
}
