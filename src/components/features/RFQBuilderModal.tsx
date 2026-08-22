import { useState } from "react";
import { products } from "../../data/products";

const WHATSAPP_NUMBER = "+917457843044";

interface RFQBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RFQBuilderModal({ isOpen, onClose }: RFQBuilderModalProps) {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [buyerCity, setBuyerCity] = useState("");
  const [buyerName, setBuyerName] = useState("");

  if (!isOpen) return null;

  const handleQuantityChange = (productId: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const totalItemsCount = Object.values(selectedItems).reduce((sum, q) => sum + q, 0);

  const generateWhatsAppMessage = () => {
    let msg = `*New Bulk Quotation Request (RFQ)*\n`;
    if (buyerName.trim()) msg += `*Buyer Name:* ${buyerName.trim()}\n`;
    if (buyerCity.trim()) msg += `*Delivery Destination:* ${buyerCity.trim()}\n`;
    msg += `\n*Requested Products & Quantities:*\n`;

    Object.entries(selectedItems).forEach(([productId, qty], index) => {
      const prod = products.find((p) => p.id === productId);
      if (prod) {
        msg += `${index + 1}. ${prod.name} - *${qty} Units/Cartons*\n`;
      }
    });

    msg += `\nPlease provide best factory rate, MOQ, and estimated dispatch timeline.`;
    return msg;
  };

  const handleWhatsAppSend = () => {
    if (totalItemsCount === 0) return;
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="ne-modal-overlay" onClick={onClose}>
      <div className="ne-modal-content ne-rfq-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ne-modal-header">
          <div>
            <h3>Interactive Bulk Quotation Builder (RFQ)</h3>
            <p>Select products & quantities to receive an instant factory wholesale quotation.</p>
          </div>
          <button className="ne-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="ne-modal-body">
          <div className="ne-rfq-buyer-info">
            <div>
              <label>Your Name / Business Name</label>
              <input
                type="text"
                placeholder="e.g. Ramesh Trading Co."
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
              />
            </div>
            <div>
              <label>Delivery City / State</label>
              <input
                type="text"
                placeholder="e.g. Kanpur, UP / Delhi NCR"
                value={buyerCity}
                onChange={(e) => setBuyerCity(e.target.value)}
              />
            </div>
          </div>

          <div className="ne-rfq-product-list">
            <h4>Select Products for Quotation:</h4>
            {products.map((product) => {
              const count = selectedItems[product.id] || 0;
              return (
                <div className={`ne-rfq-product-row ${count > 0 ? "is-selected" : ""}`} key={product.id}>
                  <img src={product.image} alt={product.name} className="ne-rfq-thumb" />
                  <div className="ne-rfq-details">
                    <strong>{product.name}</strong>
                    <span className="ne-rfq-sub">MOQ: {product.moq || "Contact Factory"}</span>
                  </div>
                  <div className="ne-rfq-counter">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(product.id, -1)}
                      disabled={count === 0}
                      className="ne-counter-btn"
                    >
                      −
                    </button>
                    <span className="ne-counter-val">{count}</span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="ne-counter-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ne-modal-footer">
          <div className="ne-rfq-summary">
            <span>Selected Items: <strong>{totalItemsCount}</strong></span>
          </div>
          <div className="ne-rfq-actions">
            <button className="ne-btn ne-btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button
              className="ne-btn ne-btn-green"
              onClick={handleWhatsAppSend}
              disabled={totalItemsCount === 0}
            >
              Get Instant WhatsApp Quote ({totalItemsCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
