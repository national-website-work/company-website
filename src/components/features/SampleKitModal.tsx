import { EnquiryForm } from "../common/EnquiryForm";

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SampleKitModal({ isOpen, onClose }: SampleKitModalProps) {
  if (!isOpen) return null;

  return (
    <div className="ne-modal-overlay" onClick={onClose}>
      <div className="ne-modal-content ne-sample-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ne-modal-header">
          <div>
            <h3>Order Dealer Sample Kit — ₹399</h3>
            <p>Test the cleaning power, foam density, and fragrance of MX Pure products before commercial booking.</p>
          </div>
          <button className="ne-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="ne-modal-body">
          <div className="ne-sample-box-highlight">
            <div className="ne-sample-pill">📦 Physical Box Contents (₹399 All-Inclusive):</div>
            <ul className="ne-sample-checklist">
              <li>✓ 1x MX Pure Premium Detergent Powder (1 KG)</li>
              <li>✓ 1x MX Pure Pink Pack Detergent Powder (500 GM)</li>
              <li>✓ 1x MX Pure Thick Active Toilet Cleaner (500 ML)</li>
              <li>✓ 1x MX Pure Lavender Floor &amp; Surface Cleaner (1 Litre)</li>
              <li>✓ 1x MX Pure Antibacterial Handwash Gel (250 ML Pump)</li>
              <li>✓ Printed Wholesale Slab Rate Card &amp; Profit Margin Breakdown</li>
              <li>✓ 🚚 Free Courier Delivery Across India (₹399 100% Adjusted in 1st Bulk Order)</li>
            </ul>
          </div>

          <EnquiryForm
            title="Dispatch & Delivery Address"
            subtitle="Enter your store/godown address and our logistics desk will share payment & courier tracking details."
            idPrefix="sample-modal-"
            defaultSubject="Dealer Sample Kit Order (Rs 399)"
            prefillMessage="I want to order the MX Pure Dealer Sample Verification Kit (Rs 399). Please share bank/UPI details and dispatch timeline."
            onSuccess={() => {
              setTimeout(onClose, 2500);
            }}
          />
        </div>
      </div>
    </div>
  );
}
