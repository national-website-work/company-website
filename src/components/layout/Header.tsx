import { useState, useEffect } from "react";
import type { RouteKey } from "../../types";
import { services } from "../../data/services";

const WHATSAPP_NUMBER = "+917457843044";

interface HeaderProps {
  activeRoute: RouteKey;
  onOpenRFQ?: () => void;
}

export function Header({ activeRoute, onOpenRFQ }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="ne-header">
      <div className="ne-container ne-nav-wrap">
        <a className="ne-logo" href="#/" aria-label="National Enterprises Home" onClick={closeMobileMenu}>
          <img src="/ne-logo.svg" alt="National Enterprises logo" className="ne-logo-img" />
        </a>

        {/* Desktop Navigation */}
        <nav className="ne-nav-desktop" aria-label="Main navigation">
          <ul className="ne-nav-links">
            <li>
              <a className={activeRoute === "home" ? "active" : ""} href="#/">
                Home
              </a>
            </li>
            <li>
              <a className={activeRoute === "products" ? "active" : ""} href="#/products">
                Products
              </a>
            </li>
            <li
              className="ne-nav-dropdown"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a
                className={activeRoute === "services" ? "active ne-dropdown-toggle" : "ne-dropdown-toggle"}
                href="#/services"
              >
                Services
                <svg className="ne-chevron-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className={`ne-nav-dropdown-menu ${isServicesDropdownOpen ? "is-open" : ""}`}>
                {services.map((service) => (
                  <a key={service.slug} href={`#/services/${service.slug}`}>
                    <span className="ne-dropdown-title">{service.title}</span>
                    <span className="ne-dropdown-badge">{service.badge}</span>
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a className={activeRoute === "contact" ? "active" : ""} href="#/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Action button & Mobile Toggle */}
        <div className="ne-nav-actions">
          {onOpenRFQ && (
            <button className="ne-btn ne-btn-header-cta" onClick={onOpenRFQ}>
              Request Quote
            </button>
          )}

          {/* Quick Mobile WhatsApp Icon */}
          <a
            className="ne-mobile-quick-wa"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi National Enterprises, I want to inquire about detergent products and raw materials rates."
            )}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Direct WhatsApp Inquiry"
          >
            💬
          </a>

          {/* Mobile Menu Burger Button */}
          <button
            className="ne-mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`ne-burger-line ${isMobileMenuOpen ? "open" : ""}`} />
            <span className={`ne-burger-line ${isMobileMenuOpen ? "open" : ""}`} />
            <span className={`ne-burger-line ${isMobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`ne-mobile-drawer-overlay ${isMobileMenuOpen ? "is-visible" : ""}`} onClick={closeMobileMenu}>
        <div className={`ne-mobile-drawer ${isMobileMenuOpen ? "is-open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="ne-drawer-header">
            <img src="/ne-logo.svg" alt="National Enterprises" className="ne-drawer-logo" />
            <button className="ne-drawer-close" onClick={closeMobileMenu} aria-label="Close menu">
              ✕
            </button>
          </div>

          <nav className="ne-drawer-nav">
            <ul className="ne-drawer-links">
              <li>
                <a className={activeRoute === "home" ? "active" : ""} href="#/" onClick={closeMobileMenu}>
                  🏠 Home
                </a>
              </li>
              <li>
                <a className={activeRoute === "products" ? "active" : ""} href="#/products" onClick={closeMobileMenu}>
                  🧴 Products &amp; Raw Materials
                </a>
              </li>
              <li className="ne-drawer-category-title">OUR CORE SERVICES:</li>
              {services.map((service) => (
                <li key={service.slug} className="ne-drawer-sublink">
                  <a href={`#/services/${service.slug}`} onClick={closeMobileMenu}>
                    ↳ {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a className={activeRoute === "contact" ? "active" : ""} href="#/contact" onClick={closeMobileMenu}>
                  📞 Contact &amp; Plant Location
                </a>
              </li>
            </ul>
          </nav>

          <div className="ne-drawer-footer">
            {onOpenRFQ && (
              <button
                className="ne-btn ne-btn-primary ne-btn-block"
                onClick={() => {
                  closeMobileMenu();
                  onOpenRFQ();
                }}
              >
                📋 Bulk Quotation Builder
              </button>
            )}
            <a
              className="ne-btn ne-btn-green ne-btn-block"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi National Enterprises, I want to discuss dealership and bulk supply terms."
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              style={{ marginTop: "10px" }}
            >
              💬 WhatsApp Factory Desk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
