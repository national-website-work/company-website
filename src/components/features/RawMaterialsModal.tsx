import { useState, useMemo } from "react";
import { rawMaterials, RAW_MATERIAL_CATEGORIES } from "../../data/rawMaterials";
import type { RawMaterialCategory } from "../../types";
import { trackMetaLead } from "../../utils/analytics";

const WHATSAPP_NUMBER = "+917457843044";

interface RawMaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RawMaterialsModal({ isOpen, onClose }: RawMaterialsModalProps) {
  const [activeCategory, setActiveCategory] = useState<RawMaterialCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMaterials = useMemo(() => {
    return rawMaterials.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.formulationRole.toLowerCase().includes(q) ||
        item.grade.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="ne-modal-overlay" onClick={onClose}>
      <div className="ne-modal-content ne-raw-materials-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ne-modal-header">
          <div>
            <span className="ne-tag">B2B Manufacturing Sourcing Hub</span>
            <h3>Available Raw Materials for Laundry &amp; Cleaning Products</h3>
            <p>Direct factory supply of high-purity chemical inputs for small &amp; medium manufacturers.</p>
          </div>
          <button className="ne-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Filter Controls */}
        <div className="ne-rm-modal-controls">
          <div className="ne-rm-tabs" role="tablist">
            {RAW_MATERIAL_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? rawMaterials.length
                  : rawMaterials.filter((r) => r.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`ne-rm-tab ${activeCategory === cat ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="ne-rm-search">
            <input
              type="text"
              placeholder="Search chemical, LABSA, Soda, Salt, Enzymes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="ne-search-clear" onClick={() => setSearchQuery("")}>
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Materials List */}
        <div className="ne-modal-body ne-rm-modal-body">
          <div className="ne-rm-grid">
            {filteredMaterials.map((rm) => (
              <div className="ne-rm-card" key={rm.id}>
                <div className="ne-rm-card-header">
                  <div>
                    <span className="ne-rm-category-tag">{rm.category}</span>
                    <h4>{rm.name}</h4>
                  </div>
                </div>

                <div className="ne-rm-role-box">
                  <span className="ne-rm-role-label">🧪 Formulation Role:</span>
                  <strong className="ne-rm-role-val">{rm.formulationRole}</strong>
                </div>

                <div className="ne-rm-meta-grid">
                  <div>
                    <span className="ne-rm-meta-lbl">🔬 Grade / Assay:</span>
                    <span>{rm.grade}</span>
                  </div>
                  <div>
                    <span className="ne-rm-meta-lbl">📦 Standard Packing:</span>
                    <span>{rm.packingType}</span>
                  </div>
                  <div>
                    <span className="ne-rm-meta-lbl">⚖️ Minimum Order:</span>
                    <span>{rm.moq}</span>
                  </div>
                </div>

                <p className="ne-rm-desc">{rm.description}</p>

                <div className="ne-rm-features">
                  {rm.features.map((feat, i) => (
                    <span className="ne-rm-feat-tag" key={i}>
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                <div className="ne-rm-actions">
                  <a
                    className="ne-btn ne-btn-green ne-btn-sm ne-btn-block"
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi National Enterprises, I want to inquire about factory spot rate, MOQ, and batch COA for raw material: ${rm.name}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackMetaLead(`Raw Material Inquire: ${rm.name}`, { chemical: rm.name })}
                  >
                    Get Factory Spot Rate on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="ne-no-results">
              <p>No chemical ingredients found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                className="ne-btn ne-btn-outline"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        <div className="ne-modal-footer">
          <div className="ne-rm-footer-note">
            <span>💡 <strong>Custom Grades &amp; Tanker Supply:</strong> We also supply bulk tanker lots and custom formulation blends.</span>
          </div>
          <button className="ne-btn ne-btn-primary" onClick={onClose}>
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
