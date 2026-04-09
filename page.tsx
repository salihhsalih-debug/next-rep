export default function Home() {
  const products = [
    {
      name: "Cupping Sets",
      grade: "Low Grade",
      price: "$24.99",
      desc: "Simple recovery support for tension relief and everyday muscle care.",
    },
    {
      name: "Massage Gun",
      grade: "Low Grade",
      price: "$59.99",
      desc: "Affordable percussion therapy for soreness, stiffness, and post-work recovery.",
    },
    {
      name: "Electric Cupping",
      grade: "Mid Grade",
      price: "$89.99",
      desc: "Modern cupping with adjustable suction for easy at-home use.",
    },
    {
      name: "Compression Sleeves",
      grade: "High Grade",
      price: "$49.99",
      desc: "Built to support circulation, reduce fatigue, and improve recovery quality.",
    },
    {
      name: "Stretch Bands",
      grade: "Low Grade",
      price: "$14.99",
      desc: "Practical mobility tools for warmups, flexibility, and recovery sessions.",
    },
    {
      name: "Foam Roller",
      grade: "Low Grade",
      price: "$19.99",
      desc: "Everyday muscle release tool for tightness, soreness, and movement prep.",
    },
    {
      name: "TENS Stim",
      grade: "High Grade",
      price: "$129.99",
      desc: "Professional-grade muscle stimulation and pain-management support.",
    },
  ];

  const values = [
    "Performance & Energy",
    "Affordability",
    "Practicality",
    "Market Locally",
    "Professional Grade Equipment",
    "Athlete-Driven",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a", background: "#ffffff" }}>
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <img
              src="/logo.png"
              alt="NextRep Recovery Logo"
              style={{ height: "120px", width: "auto" }}
            />
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#64748b",
                fontWeight: 700,
                margin: 0,
              }}
            >
              NextRep Recovery
            </p>
          </div>
          <h1 style={{ fontSize: "52px", lineHeight: 1.05, margin: 0, maxWidth: "700px" }}>
            Recovery made accessible for everyday people.
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "720px",
              marginTop: "20px",
            }}
          >
            We help athletes and non-gym-goers recover better with practical, affordable, and
            professional-grade tools that fit real life.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
            <button
              style={{
                padding: "14px 22px",
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Shop Products
            </button>
            <button
              style={{
                padding: "14px 22px",
                background: "#ffffff",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              View Best Sellers
            </button>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "34px" }}>
            {["7 Core Products", "Local Market Focus", "Athlete-Driven Brand"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 18px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  background: "#ffffff",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "10px" }}>Featured Bundle</h2>
          <div
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "22px",
              padding: "28px",
              background: "#f8fafc",
            }}
          >
            <h3 style={{ fontSize: "28px", marginTop: 0 }}>Starter Recovery Pack</h3>
            <p style={{ color: "#475569", fontSize: "17px" }}>
              Massage Gun + Stretch Bands + Foam Roller
            </p>
            <p style={{ fontSize: "36px", fontWeight: 800, margin: "18px 0 8px 0" }}>$79.99</p>
            <p style={{ color: "#64748b", marginTop: 0 }}>Simple offer for first-time buyers.</p>
            <a
              href="https://buy.stripe.com/test_7sY5kFfy0eCQgzaa3RdjO00"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "16px",
                padding: "14px 22px",
                background: "#0f172a",
                color: "#ffffff",
                borderRadius: "12px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Buy Bundle
            </a>
            <p style={{ marginTop: "14px", color: "#475569", fontSize: "14px" }}>
              Public link: 
              <a
                href="https://buy.stripe.com/test_7sY5kFfy0eCQgzaa3RdjO00"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0f172a", textDecoration: "underline" }}
              >
                https://buy.stripe.com/test_7sY5kFfy0eCQgzaa3RdjO00
              </a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 24px 64px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>Products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {products.map((item) => (
              <div
                key={item.name}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "20px",
                  padding: "22px",
                  background: "#ffffff",
                }}
              >
                <p style={{ fontSize: "13px", color: "#64748b", marginTop: 0 }}>{item.grade}</p>
                <h3 style={{ fontSize: "22px", margin: "4px 0 10px 0" }}>{item.name}</h3>
                <p style={{ color: "#475569", lineHeight: 1.6 }}>{item.desc}</p>
                <p style={{ fontWeight: 800, fontSize: "22px", margin: "18px 0 0 0" }}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 24px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>Why NextRep</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {values.map((value) => (
              <div
                key={value}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
                  padding: "20px",
                  fontWeight: 700,
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 24px", background: "#0f172a", color: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <img
              src="/logo.png"
              alt="NextRep Recovery Logo"
              style={{ height: "150px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <h2 style={{ fontSize: "34px", margin: 0 }}>Contact</h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "18px", maxWidth: "700px", lineHeight: 1.7 }}>
            Recovery tools for athletes, active people, and everyday customers who want practical
            solutions that fit real life.
          </p>
          <p style={{ color: "#cbd5e1", marginTop: "24px" }}>Email: nextreprecovery@email.com</p>
          <p style={{ color: "#cbd5e1" }}>Instagram: @nextreprecovery</p>
        </div>
      </section>
    </main>
  );
}


