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

      {/* ── Mission, Purpose & Comunidad ── */}
      <section
        id="comunidad"
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
            Una Comunidad Mágica & Su Propósito
          </h2>
          <p
            className="text-muted"
            style={{ maxWidth: "660px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Mercado de Brujas es una feria itinerante y un punto de encuentro que celebra el arte artesanal, la herbolaria ancestral y el misticismo.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: "🌿", title: "Alquimia & Botánica", text: "Espacio para creadores e ilustradores enfocados en herbolaria, pociones artesanales, elementos naturales y la magia de las plantas.", sub: "Arte & Herbolaria Ancestral" },
            { icon: "💎", title: "El Valor del Oficio", text: "Fomentamos la creación artesanal independiente, impulsando marcas locales, joyería mística, amuletos y piezas únicas.", sub: "Creación Artesanal Independiente" },
            { icon: "🔮", title: "Encuentro Itinerante", text: "Construimos comunidad a través de ferias pop-up en distintas locaciones, talleres, oráculos y experiencias compartidas.", sub: "Comunidad & Encuentros Pop-Up" },
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
                <ImagePlaceholder height="100%" label="(Imagen)"  />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  marginBottom: "0.5rem",
                  color: "var(--accent-purple-light)",
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

      {/* ── Sé Parte / Join CTA Section ── */}
      <section
        id="se-parte"
        style={{
          maxWidth: "1200px",
          margin: "0 auto 5rem",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div
          className="glass-card-gold ornate-frame"
          style={{
            padding: "3rem 2rem",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <span className="badge badge-purple" style={{ marginBottom: "1rem" }}>
            ✦ Sé Parte de la Experiencia ✦
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontFamily: "var(--font-serif)",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            ¿Quieres participar en la próxima edición?
          </h2>
          <p
            className="text-muted"
            style={{ maxWidth: "600px", margin: "0 auto 2rem", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Si eres creador, artesano, tarotista o practicante de artes místicas, únete a nuestra comunidad de brujas en el siguiente encuentro itinerante.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ediciones" className="btn-primary">
              🎪 Ver Próximos Encuentros
            </Link>
            <a
              href="https://www.instagram.com/mercado_brujas/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 Contáctanos por Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Navigation tiles / Portada ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 5rem",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge badge-gold">✦ Explora la Portada ✦</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontFamily: "var(--font-serif)",
              marginTop: "0.75rem",
            }}
          >
            Portada & Secciones Principales
          </h2>
        </div>

        <div
          className="nav-tiles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            { href: "/origenes", icon: "📜", title: "La Ruta (Orígenes)", text: "Conoce la historia, cronología y trayectoria de las ferias pop-up.", accent: false },
            { href: "/ediciones", icon: "🎪", title: "Próximos Encuentros", text: "Descubre las fechas, locaciones y expositores de cada edición presencial.", accent: true },
            { href: "/galeria", icon: "📸", title: "Galería de la Comunidad", text: "Explora la recopilación fotográfica de momentos y experiencias compartidas.", accent: false },
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
                    color: tile.accent ? "var(--accent-purple-light)" : "var(--text-main)",
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
          className="footer-grid"
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
                color: "var(--text-main)",
                marginBottom: "0.75rem",
              }}
            >
              🌙 Mercado de Brujas
            </h3>
            <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.65 }}>
              Una feria itinerante. Un punto de encuentro. Una comunidad de brujas.
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
              Navegación
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <li><Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Hogar</Link></li>
              <li><Link href="/ediciones" style={{ color: "var(--accent-purple-light)", textDecoration: "none", fontWeight: 600 }}>Próximos Encuentros</Link></li>
              <li><a href="#se-parte" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Sé Parte</a></li>
              <li><Link href="/origenes" style={{ color: "var(--text-muted)", textDecoration: "none" }}>La Ruta</Link></li>
              <li><a href="#comunidad" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Comunidad</a></li>
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
              Sigue nuestros próximos encuentros y convocatorias abiertas en Instagram.
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
            ✦ Mercado de Brujas © {new Date().getFullYear()} — Plataforma Web de Historia & Ferias Pop-Up ✦
          </p>
        </div>
      </footer>
    </div>
  );
}
