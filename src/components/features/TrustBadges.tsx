export function TrustBadges() {
  const badges = [
    {
      icon: "🏭",
      title: "Direct Manufacturer",
      desc: "Bhagwanpur, Roorkee Plant with in-house batch processing & filling lines.",
    },
    {
      icon: "🧪",
      title: "40+ Years Chemical Domain",
      desc: "Proven chemical formulation standards and high active-matter consistency.",
    },
    {
      icon: "📋",
      title: "GST Registered & Compliant",
      desc: "Fully legal trade documentation with GST invoices and batch COA reports.",
    },
    {
      icon: "🚚",
      title: "Pan-India Logistics",
      desc: "Dependable dispatch across North, Central, and Pan-India distribution hubs.",
    },
    {
      icon: "💰",
      title: "Wholesale Margin Benefit",
      desc: "Zero middleman commissions. Maximum profit margins for dealers and distributors.",
    },
  ];

  return (
    <section className="ne-trust-section">
      <div className="ne-container">
        <div className="ne-trust-grid">
          {badges.map((item, i) => (
            <div className="ne-trust-card" key={i}>
              <div className="ne-trust-icon">{item.icon}</div>
              <div>
                <h4 className="ne-trust-title">{item.title}</h4>
                <p className="ne-trust-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
