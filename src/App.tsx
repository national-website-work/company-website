import { useEffect, useMemo, useState, type FormEvent } from "react";

type RouteKey = "home" | "products" | "services" | "contact";

const WHATSAPP_NUMBER = "+917457843044";

const products = [
  {
    name: "MX Pure Detergent Powder - 1 kg",
    weight: "1 KG",
    fragrance: "Lemon + Jasmine",
    image: "/images/1kg_blue.png",
  },
  {
    name: "MX Pure Detergent Powder - 500 GM",
    weight: "500 GM",
    fragrance: "Lemon + Jasmine",
    image: "/images/500g_blue.png",
  },
  {
    name: "MX Pure Detergent Powder - 110 GM",
    weight: "110 GM",
    fragrance: "Lemon + Jasmine",
    image: "/images/110g_blue.png",
  },
  {
    name: "MX Pure Detergent Powder (Pink) - 500 GM",
    weight: "500 GM",
    fragrance: "Lemon + Jasmine",
    image: "/images/pink_500g_pink.png",
  },
  {
    name: "MX Pure Toilet Cleaner - 500 ML",
    weight: "500 ML",
    fragrance: "Lavender",
    image: "/images/harpic_500ml_white.png",
  },
  {
    name: "MX Pure Toilet Cleaner - 250 ML",
    weight: "250 ML",
    fragrance: "Lavender",
    image: "/images/harpic_250ml.png",
  },
  {
    name: "MX Pure Floor Cleaner - 1 Litre",
    weight: "1 Litre",
    fragrance: "Lavender",
    image: "/images/phenyl_1l.png",
  },
  {
    name: "MX Pure Floor Cleaner - 5 Litre",
    weight: "5 Litre",
    fragrance: "Lavender",
    image: "/images/phenyl_5l.png",
  },
  {
    name: "MX Pure Handwash Gel",
    weight: "250 ML",
    fragrance: "Lavender",
    image: "/images/handwash_all.png",
  },
  {
    name: "MX Pure Loose Detergent Powder",
    description: "Economical bulk pack for retailers and businesses.",
    image: "/images/loose_product.png",
  },
  {
    name: "Raw Materials for Laundry Products Manufacturing",
    description: "High-quality raw materials supplied for B2B manufacturing partners.",
    image: "/images/raw_materials.png",
  },
];

function getRouteFromHash(hash: string): RouteKey {
  const cleanHash = hash.replace("#", "").toLowerCase();

  if (cleanHash.startsWith("/products")) return "products";
  if (cleanHash.startsWith("/services")) return "services";
  if (cleanHash.startsWith("/contact")) return "contact";
  return "home";
}

function getRouteHref(route: RouteKey) {
  if (route === "home") return "#/";
  return `#/${route}`;
}

function createWhatsappLink(productName: string) {
  const text = `Hi National Enterprises, I am Interested in your Product ${productName}, what's the price for this Product.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function Header({ activeRoute }: { activeRoute: RouteKey }) {
  return (
    <header className="ne-header">
      <div className="ne-container ne-nav-wrap">
        <a className="ne-logo" href="#/" aria-label="National Enterprises Home">
          <img src="/ne-logo.svg" alt="National Enterprises logo" className="ne-logo-img" />
        </a>
        <nav aria-label="Main navigation">
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
            <li className="ne-nav-dropdown">
              <span className={activeRoute === "services" ? "active" : ""}>Services</span>
              <div className="ne-nav-dropdown-menu">
                <a href="#/services/chemical-manufacturing">Chemical Manufacturing</a>
                <a href="#/services/import-export">Chemical Import &amp; Export</a>
                <a href="#/services/pharma-consultancy">Pharma Consultancy</a>
                <a href="#/services/b2b-services">B2B Services</a>
                <a href="#/services/marketing-advertising">Marketing &amp; Advertising</a>
              </div>
            </li>
            <li>
              <a className={activeRoute === "contact" ? "active" : ""} href="#/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const industries = [
  "Laundry",
  "Chemical Manufacturing",
  "B2B Services",
  "Pharma Consultancy",
  "Marketing",
];

function Footer() {
  return (
    <footer className="ne-footer">
      <div className="ne-container ne-footer-grid">
        <section className="ne-footer-brand">
          <a href="#/" aria-label="National Enterprises Home" className="ne-footer-logo-wrap">
            <img src="/ne-logo.svg" alt="National Enterprises logo" className="ne-footer-logo" />
          </a>
          <p className="ne-footer-tagline">Quality. Consistency. Trust.</p>
        </section>

        <section>
          <h4 className="ne-section-title">Industries</h4>
          <ul>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className= "ne-section-title">Quick Links</h4>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/products">Products</a>
            </li>
            <li>
              <a href="#/services">Services</a>
            </li>
            <li>
              <a href="#/contact">Contact Us</a>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="ne-section-title">Contact Us</h4>
          <p>Phone: +91 7457843044</p>
          <p>Email: info@national-enterprise.com</p>
          <p>Address: 247661, Near Toll Plaza, Bhagwanpur Roorkee India</p>
          <p>
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </p>
        </section>
      </div>
      <div className="ne-copyright">Copyright 2026 National Enterprises. All rights reserved.</div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section className="ne-hero" id="home">
        <div className="ne-container ne-hero-grid ne-fade-up">
          <div className="ne-hero-content">
            <h1>
              As <span className="ne-text-highlight">National Enterprises</span> we deliver quality across
              Manufacturing, Trade and Consultancy.
            </h1>
            <p>
              Backed by 40+ years of Chemical Industry knowledge, we support businesses through Laundry products manufacturing, trade, and consultancy.
            </p>
            <p className="ne-hero-categories">
              <strong>Product Range:</strong> Floor Cleaner, Toilet Cleaner, Detergent Powder, Handwash, Dishwash
              Liquid, and more.
            </p>
            <a className="ne-btn" href="#/products">
              View Products
            </a>
          </div>
          <div className="ne-hero-media">
            <img
              src="/images/banner_all.png"
              alt="Detergent and cleaning product lineup for home and commercial use"
            />
          </div>
        </div>
      </section>

      {/* SERVICES TEASER — update href to "#/services" once the Services route/page is created */}
      <section className="ne-section ne-fade-up">
        <div className="ne-container">
          <h2 className="ne-section-title">Our Services</h2>
          <p>
            Beyond manufacturing, we bring decades of chemical industry expertise plus Pharma knowledge to a wider range of business
            services.
          </p>
          <div className="ne-why-grid">
            <article>
              <div className="ne-icon" aria-hidden="true">A</div>
              <h3>Chemical Manufacturing</h3>
              <p>End-to-End production capabilities built on quality-controlled formulation standards.</p>
              <a className="ne-btn" href="#/services">Learn More</a>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">B</div>
              <h3>Chemical Import &amp; Export</h3>
              <p>Reliable sourcing and trade partnerships across all over the domestic markets.</p>
              <a className="ne-btn" href="#/about">Learn More</a>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">C</div>
              <h3>Pharma Consultancy</h3>
              <p>Specialized guidance for pharma-related requirements backed by deep domain Experts.</p>
              <a className="ne-btn" href="#/about">Learn More</a>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">D</div>
              <h3>B2B Services</h3>
              <p>Dedicated support and coordination for Business partners at every stage of growth.</p>
              <a className="ne-btn" href="#/about">Learn More</a>
            </article>
          </div>
        </div>
      </section>

      <section className="ne-section ne-section-light ne-fade-up">
        <div className="ne-container">
          <h2 className="ne-section-title ne-home-about-heading">About National Enterprises</h2>
          <div className="ne-home-about-grid">
            <div className="ne-media-frame ne-home-about-media">
              <img src="/images/about_us.png" alt="National Enterprises about overview" loading="lazy" />
            </div>
            <div className="ne-home-about-text">
            <p>
              National Enterprises brings over 40 years of hands-on experience in the chemical manufacturing domain.
              Formally registered under GST in 2023, we have channeled decades of accumulated expertise into building a
              modern, professionally managed enterprise that serves both individual consumers and business partners.
            </p>
            <p>
              Headquartered in Roorkee, Uttarakhand, we specialize in manufacturing high-quality detergents and cleaning
              solutions, while extending our deep chemical industry knowledge into specialized services including chemical
              import-export, pharma-related consultancy, and B2B partnerships.
            </p>
            <p>
              Every product and service we deliver is backed by a strict commitment to quality, safety, and regulatory
              compliance. This focus on reliability has helped us build a strong presence across both offline
              distribution networks and growing online channels, positioning National Enterprises as a dependable partner
              for businesses across India.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ne-section ne-fade-up">
        <div className="ne-container">
          <h2 className="ne-section-title">Why Choose Us</h2>
          <div className="ne-why-grid">
            <article>
              <div className="ne-icon" aria-hidden="true">I</div>
              <h3>Reliable Product Quality</h3>
              <p>Every batch is produced with controlled formulation standards and dependable consistency.</p>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">II</div>
              <h3>Scalable Manufacturing</h3>
              <p>Our setup supports growing dealer demand and bulk dispatch timelines without interruptions.</p>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">III</div>
              <h3>40+ Years of Industry Expertise</h3>
              <p>Decades of chemical domain knowledge applied to modern manufacturing standards.</p>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">IV</div>
              <h3>Safety &amp; Compliance Focused</h3>
              <p>Every product is developed with a strong emphasis on safety, security, and quality assurance.</p>
            </article>
            <article>
              <div className="ne-icon" aria-hidden="true">V</div>
              <h3>Strong Offline &amp; Online Reach</h3>
              <p>Consistent performance and growing presence across both traditional and digital markets.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

const productCategories = [
  "Detergent Powder",
  "Floor Cleaner",
  "Toilet Cleaner",
  "Handwash Gel",
  "Loose Products for Bulk Orders",
  "Raw Materials For Laundry Products Manufacturing"
];
function ProductsPage() {
  return (
    <>
      <section className="ne-section ne-page-title">
       <div className="ne-container ne-products-hero">
         <div>
           <h1>Laundry Products</h1>
           <p>From daily household use to large-scale commercial demand, our Laundry Products range is built for consistent performance, strong cleaning power, and dependable quality.</p>
           <div className="ne-category-pills">
             {productCategories.map((category) => (
               <span className="ne-category-pill" key={category}>
                 {category}
               </span>
             ))}
           </div>
         </div>
        <div className="ne-products-hero-image">
          <img src="/images/all_in_one.png" alt="All National Enterprises products" />
        </div>
       </div>
      </section>

      <section className="ne-section ne-products-bg">
        <div className="ne-container">
          <div className="ne-product-grid">
            {products.map((product) => (
              <article className="ne-product-card" key={product.name}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="ne-product-content">
                  <h3>{product.name}</h3>

                  {product.weight || product.fragrance ? (
                    <>
                      {product.weight && (
                        <p className="ne-product-meta">
                          <strong>Weight:</strong> {product.weight}
                        </p>
                      )}
                      {product.fragrance && (
                        <p className="ne-product-meta">
                          <strong>Fragrance:</strong> {product.fragrance}
                        </p>
                      )}
                    </>
                  ) : (
                    <p>{product.description}</p>
                  )}

                  <a
                    className="ne-btn ne-btn-green"
                    href={createWhatsappLink(product.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask for Price
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
function ServicesPage() {
  return (
    <>
      <section className="ne-section ne-page-title ne-section-light">
        <div className="ne-container ne-fade-up">
          <h1>Our Services</h1>
          <p>
            Beyond manufacturing, we bring decades of chemical industry expertise to a wider range of
            business services.
          </p>
        </div>
      </section>

      <section className="ne-section" id="chemical-manufacturing">
        <div className="ne-container ne-fade-up">
          <h2>Chemical Manufacturing</h2>
          <p>
            End-to-end production capabilities built on quality-controlled formulation standards,
            supporting consistent output at scale for household and commercial cleaning products.
          </p>
        </div>
      </section>

      <section className="ne-section ne-section-light" id="import-export">
        <div className="ne-container ne-fade-up">
          <h2>Chemical Import &amp; Export</h2>
          <p>
            Reliable sourcing and trade partnerships across domestic and international markets, backed
            by decades of hands-on chemical industry experience.
          </p>
        </div>
      </section>

      <section className="ne-section" id="pharma-consultancy">
        <div className="ne-container ne-fade-up">
          <h2>Pharma Consultancy</h2>
          <p>
            Specialized guidance for pharma-related requirements, drawing on deep domain knowledge to
            support compliance and business growth.
          </p>
        </div>
      </section>

      <section className="ne-section ne-section-light" id="b2b-services">
        <div className="ne-container ne-fade-up">
          <h2>B2B Services</h2>
          <p>
            Dedicated support and coordination for business partners at every stage — from sourcing to
            scaling operations.
          </p>
        </div>
      </section>

      <section className="ne-section" id="marketing-advertising">
        <div className="ne-container ne-fade-up">
          <h2>Marketing &amp; Advertising</h2>
          <p>
            Practical marketing support to help small and growing businesses promote their products
            effectively, both online and offline.
          </p>
        </div>
      </section>
    </>
  );
}

const WEB3FORMS_ACCESS_KEY = "f1beb110-8892-427a-b77e-701db1bd3ac9";

function ContactPage() {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("botcheck") || "")) {
      setIsError(false);
      setStatus("Message sent. We will get back to you soon.");
      form.reset();
      return;
    }

    setIsSending(true);
    setIsError(false);
    setStatus("Sending...");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New enquiry from National Enterprises website",
      from_name: "National Enterprises Website",
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
      botcheck: false,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Send failed");
      }

      form.reset();
      setStatus("Message sent. We will get back to you soon.");
    } catch (error) {
      setIsError(true);
      setStatus(error instanceof Error ? error.message : "Could not send the message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <section className="ne-section ne-contact-hero">
        <div className="ne-container ne-narrow ne-fade-up">
          <h1>Feel Free to Contact Us for Any Kind of Query</h1>
          <p>Same style direction with your blue corporate color grading.</p>
        </div>
      </section>

      <section className="ne-section ne-section-light">
        <div className="ne-container ne-contact-grid ne-fade-up">
          <form className="ne-contact-form" onSubmit={handleSubmit}>
            <h2>Submit Your Inquiry</h2>

            {status ? (
              <p className={`ne-form-status${isError ? " is-error" : ""}`} role="status">
                {status}
              </p>
            ) : null}

            <input type="checkbox" name="botcheck" className="ne-honey" tabIndex={-1} autoComplete="off" />

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your full name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email address" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Type your message" required />

            <button type="submit" className="ne-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>

          <aside className="ne-contact-side">
            <h2>Contact Details</h2>
            <p>
              <strong>Email:</strong> info@national-enterprise.com
            </p>
            <p>
              <strong>Phone:</strong> +91 7457843044
            </p>
            <p>
              <strong>Address:</strong> Bhagwanpur Roorkee 247661, India
            </p>
            <div className="ne-map-placeholder" aria-label="Map placeholder">
              <span>Map Frame Ready</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<RouteKey>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = getRouteHref("home");
    }

    const onHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = useMemo(() => {
    if (route === "products") return <ProductsPage />;
    if (route === "services") return <ServicesPage />;
    if (route === "contact") return <ContactPage />;
    return <HomePage />;
  }, [route]);

  return (
    <div className="ne-app">
      <Header activeRoute={route} />
      <main>{page}</main>
      <a
        className="ne-whatsapp-fab"
        href="https://wa.me/+917457843044?text=Hi%20National%20Enterprises"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
      <Footer />
    </div>
  );
}
