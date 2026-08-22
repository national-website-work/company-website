import { useState, useMemo } from "react";
import { products, PRODUCT_CATEGORIES } from "../data/products";
import { EnquiryForm } from "../components/common/EnquiryForm";

const WHATSAPP_NUMBER = "+917457843044";

interface ProductsPageProps {
  onOpenRFQ?: () => void;
  onOpenSampleKit?: () => void;
}

export function ProductsPage({ onOpenRFQ, onOpenSampleKit }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.fragrance && item.fragrance.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleDownloadCatalog = () => {
    const text = encodeURIComponent(
      "Hi National Enterprises, please send me your latest PDF Product Catalog, Wholesale Price List, and Dealership Terms."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="ne-products-page">
      {/* Products Hero */}
      <section className="ne-section ne-page-title ne-products-hero-section">
        <div className="ne-container ne-products-hero-grid ne-fade-up">
          <div>
            <span className="ne-tag">Commercial &amp; Retail Catalog</span>
            <h1>Cleaning &amp; Laundry Products Lineup</h1>
            <p>
              Engineered for powerful cleaning action, superior active-matter formulation, and cost-effective bulk distribution. Explore our retail packs, commercial 5L containers, and bulk loose supplies.
            </p>
            <div className="ne-products-hero-actions">
              <button className="ne-btn ne-btn-primary" onClick={handleDownloadCatalog}>
                📄 Download Catalog / Rate List (PDF)
              </button>
              {onOpenRFQ && (
                <button className="ne-btn ne-btn-secondary" onClick={onOpenRFQ}>
                  📋 Build Bulk RFQ Quote
                </button>
              )}
              {onOpenSampleKit && (
                <button className="ne-btn ne-btn-accent" onClick={onOpenSampleKit}>
                  📦 Order Sample Box
                </button>
              )}
            </div>
          </div>
          <div className="ne-products-hero-media">
            <img src="/images/all_in_one.webp" alt="All National Enterprises MX Pure products" />
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="ne-section ne-products-filter-section">
        <div className="ne-container">
          <div className="ne-filter-controls">
            {/* Category Pills */}
            <div className="ne-filter-pills" role="tablist">
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`ne-filter-pill ${activeCategory === category ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="ne-search-box">
              <input
                type="text"
                placeholder="Search products, sizes, fragrances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ne-search-input"
              />
              {searchQuery && (
                <button className="ne-search-clear" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="ne-product-grid">
            {filteredProducts.map((product) => (
              <article className="ne-product-card" key={product.id}>
                <div className="ne-product-img-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="ne-product-cat-pill">{product.category}</span>
                </div>
                <div className="ne-product-content">
                  <h3>{product.name}</h3>

                  <div className="ne-product-specs">
                    {product.weight && (
                      <span className="ne-spec-badge">
                        ⚖️ <strong>Weight:</strong> {product.weight}
                      </span>
                    )}
                    {product.fragrance && (
                      <span className="ne-spec-badge">
                        🌸 <strong>Scent:</strong> {product.fragrance}
                      </span>
                    )}
                  </div>

                  <p className="ne-product-desc">{product.description}</p>

                  {product.features && (
                    <ul className="ne-product-features-list">
                      {product.features.map((feat, idx) => (
                        <li key={idx}>✓ {feat}</li>
                      ))}
                    </ul>
                  )}

                  {product.moq && (
                    <div className="ne-product-moq-badge">
                      📦 <strong>Min Order Quantity:</strong> {product.moq}
                    </div>
                  )}

                  <div className="ne-product-card-actions">
                    <a
                      className="ne-btn ne-btn-green ne-btn-block"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi National Enterprises, I want to inquire about factory pricing, MOQ, and sample dispatch for: ${product.name}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="ne-no-results">
              <p>No products found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{activeCategory}&rdquo;.</p>
              <button
                className="ne-btn ne-btn-outline"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Form Band */}
      <section className="ne-section ne-section-light" id="product-enquiry">
        <div className="ne-container">
          <div className="ne-enquiry-band">
            <div className="ne-enquiry-copy">
              <span className="ne-tag">Direct Factory Sourcing</span>
              <h2>Price, MOQ &amp; Dealership Terms</h2>
              <p>
                Interested in stocking MX Pure products in your region or need bulk unbranded detergent powder? Contact our Roorkee dispatch office via WhatsApp, direct phone call, or submit your requirement form below.
              </p>
              <div className="ne-contact-quick-box">
                <div className="ne-quick-item">
                  <strong>📞 Call / WhatsApp:</strong>
                  <a href="tel:+917457843044">+91 7457843044</a>
                </div>
                <div className="ne-quick-item">
                  <strong>📧 Email:</strong>
                  <a href="mailto:info@national-enterprise.com">info@national-enterprise.com</a>
                </div>
                <div className="ne-quick-item">
                  <strong>🏭 Manufacturing Plant:</strong>
                  <span>Bhagwanpur, Roorkee (247661), Uttarakhand</span>
                </div>
              </div>
            </div>

            <div className="ne-enquiry-form-wrapper">
              <EnquiryForm
                title="Send Product Inquiry"
                subtitle="Specify your required quantities, packaging type, and target delivery city."
                idPrefix="products-"
                defaultSubject="Product Catalog Inquiry"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
