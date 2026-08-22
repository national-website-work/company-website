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
            <h3>Order Dealer Sample Kit — ₹300</h3>
            <p>Test the cleaning power, foam density, and fragrance of MX Pure products before commercial booking.</p>
          </div>
          <button className="ne-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="ne-modal-body">
          <div className="ne-sample-box-highlight">
            <div className="ne-sample-pill">📦 Physical Box Contents (₹300 + Courier at Actuals):</div>
            <ul className="ne-sample-checklist">
              <li>✓ 1x MX Pure Premium Detergent Powder (1 KG)</li>
              <li>✓ 1x MX Pure Pink Pack Detergent Powder (500 GM)</li>
              <li>✓ 1x MX Pure Thick Active Toilet Cleaner (500 ML)</li>
              <li>✓ 1x MX Pure Lavender Floor &amp; Surface Cleaner (1 Litre)</li>
              <li>✓ 1x MX Pure Antibacterial Handwash Gel (250 ML Pump)</li>
              <li>✓ Printed Wholesale Slab Rate Card &amp; Profit Margin Breakdown</li>
              <li>✓ 🚚 Courier charges applicable as per delivery pincode (₹300 Kit Cost 100% Adjusted in 1st Bulk Order)</li>
            </ul>
          </div>

          <EnquiryForm
            title="Dispatch & Delivery Address"
            subtitle="Enter your store/godown address. Our logistics desk will calculate the exact courier charge for your pincode and share dispatch details."
            idPrefix="sample-modal-"
            defaultSubject="Dealer Sample Kit Order (Rs 300 + Courier)"
            prefillMessage="I want to order the MX Pure Dealer Sample Verification Kit (Rs 300 + Courier). Please calculate courier charges for my pincode and share payment details."
            onSuccess={() => {
              setTimeout(onClose, 2500);
            }}
          />
        </div>
      </div>
    </div>
  );
}
