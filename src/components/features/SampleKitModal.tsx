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
            <h3>Order Dealer Sample Kit</h3>
            <p>Test the cleaning power, foam density, and fragrance of MX Pure products in your lab/store.</p>
          </div>
          <button className="ne-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="ne-modal-body">
          <div className="ne-sample-box-highlight">
            <div className="ne-sample-pill">📦 What&apos;s inside the Kit:</div>
            <ul className="ne-sample-checklist">
              <li>✓ 1x Detergent Powder 1 KG + 500 GM (Lemon + Jasmine)</li>
              <li>✓ 1x Pink Glow Detergent 500 GM</li>
              <li>✓ 1x Toilet Cleaner 500 ML (Thick formula)</li>
              <li>✓ 1x Floor Cleaner 1 Litre (Lavender Fresh)</li>
              <li>✓ 1x Antibacterial Handwash Gel 250 ML</li>
              <li>✓ Official Wholesale Rate Card &amp; Dealership Terms Document</li>
            </ul>
          </div>

          <EnquiryForm
            title="Shipping & Delivery Details"
            subtitle="Enter your godown/store delivery address to dispatch sample kit."
            defaultSubject="Dealer Sample Kit Request"
            prefillMessage="I would like to order the Dealer Sample Kit for testing before placing a bulk dealership order. Please share courier details."
            onSuccess={() => {
              setTimeout(onClose, 2500);
            }}
          />
        </div>
      </div>
    </div>
  );
}
