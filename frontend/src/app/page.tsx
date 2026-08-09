"use client";

import Link from "next/link";
import Header from "./components/Header";
import HeroStory from "./components/HeroStory";
import ImagePlaceholder from "./components/ImagePlaceholder";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Header />
      <HeroStory />

      {/* ── Mission & Values ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 5rem",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            ✦ Espacio Sagrado & Cultural ✦
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontFamily: "var(--font-serif)",
              marginBottom: "0.75rem",
            }}
          >
            El Propósito Detrás del Aquelarre
          </h2>
          <p
            className="text-muted"
            style={{ maxWidth: "660px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* 3 pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: "🌿", title: "Alquimia & Botánica", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", sub: "Arte & Herbolaria Ancestral" },
            { icon: "💎", title: "El Valor del Oficio", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", sub: "Creación Artesanal Independiente" },
            { icon: "🔮", title: "Encuentro Itinerante", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.", sub: "Comunidad & Encuentros Pop-Up" },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel ornate-frame"
              style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  height: "180px",
                  marginBottom: "1.25rem",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                }}
              >
                <ImagePlaceholder height="100%" label="(Imagen)" sublabel={pillar.sub} />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  marginBottom: "0.5rem",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.04em",
                }}
              >
                {pillar.icon} {pillar.title}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Navigation tiles ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 5rem",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge badge-gold">✦ Explora el Aquelarre ✦</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontFamily: "var(--font-serif)",
              marginTop: "0.75rem",
            }}
          >
            Secciones de Mercado de Brujas
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            { href: "/origenes", icon: "📜", title: "Orígenes", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: false },
            { href: "/ediciones", icon: "🎪", title: "Ediciones de la Feria", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: true },
            { href: "/galeria", icon: "📸", title: "Recopilación Fotográfica", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", accent: false },
          ].map((tile) => (
            <Link key={tile.href} href={tile.href} style={{ textDecoration: "none" }}>
              <div
                className={tile.accent ? "glass-card-gold ornate-frame" : "glass-panel"}
                style={{
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")
                }
              >
                <span style={{ fontSize: "2.2rem", display: "block", marginBottom: "0.85rem" }}>
                  {tile.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.06em",
                    color: tile.accent ? "var(--accent-gold)" : "var(--text-main)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {tile.title}
                </h3>
                <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {tile.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer-bar" style={{ marginTop: "auto" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                letterSpacing: "0.1em",
                color: "var(--accent-gold)",
                marginBottom: "0.75rem",
              }}
            >
              🌙 Mercado de Brujas
            </h3>
            <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-main)",
                marginBottom: "0.75rem",
              }}
            >
              Páginas
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <li><Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Historia (Inicio)</Link></li>
              <li><Link href="/origenes" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Orígenes & Cronología</Link></li>
              <li><Link href="/ediciones" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: 600 }}>🎪 Ediciones de la Feria</Link></li>
              <li><Link href="/galeria" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Recopilación Fotográfica</Link></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-main)",
                marginBottom: "0.75rem",
              }}
            >
              Redes Oficiales
            </h4>
            <p className="text-muted" style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <a
              href="https://www.instagram.com/mercado_brujas/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "0.78rem", padding: "0.45rem 1rem" }}
            >
              📸 @mercado_brujas
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
          <p className="text-muted" style={{ fontSize: "0.8rem", fontFamily: "var(--font-serif)", letterSpacing: "0.08em" }}>
            ✦ Mercado de Brujas © {new Date().getFullYear()} — Plataforma Web de Historia & Ediciones Pop-Up ✦
          </p>
        </div>
      </footer>
    </div>
  );
}
