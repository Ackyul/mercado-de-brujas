"use client";

import Link from "next/link";
import Header from "./components/Header";
import HeroStory from "./components/HeroStory";
import ImagePlaceholder from "./components/ImagePlaceholder";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)", fontFamily: "var(--font-sans)" }}>
      {/* Navigation Header */}
      <Header />

      {/* Main Hero Narrative: Historia de Mercado de Brujas */}
      <HeroStory />

      {/* Narrative Section: Misión & Valores de Mercado de Brujas */}
      <section style={{ maxWidth: "1240px", margin: "1rem auto 4rem", padding: "0 2rem", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>
            ✦ Espacio Sagrado & Cultural ✦
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, color: "var(--text-main)" }}>
            El Propósito Detrás del Aquelarre
          </h2>
          <p className="text-muted" style={{ maxWidth: "700px", margin: "0.5rem auto 0", fontSize: "1.05rem" }}>
            Mercado de Brujas nació como un espacio de resistencia cultural y celebración mística, donde el trabajo hecho a mano recupera el valor ceremonial del intercambio ancestral.
          </p>
        </div>

        {/* 3 Value Pillars with (Imagen) Placeholders */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "180px", marginBottom: "1.25rem", borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                sublabel="Arte & Herbolaria Ancestral"
              />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent-gold)" }}>
              🌿 Alquimia & Botánica
            </h3>
            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Promovemos la herbolaria consciente, las esencias limpias de cultivo ético y las herramientas de transformación personal creadas en armonía con los ciclos naturales.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "180px", marginBottom: "1.25rem", borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                sublabel="Creación Artesanal Independiente"
              />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent-gold)" }}>
              💎 El Valor del Oficio
            </h3>
            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Cada amuleto de obsidiana, joya de plata, baraja de tarot e ilustración tiene detrás horas de dedicación, estudio e intención de creadores independientes.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "180px", marginBottom: "1.25rem", borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                sublabel="Comunidad & Encuentros Pop-Up"
              />
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--accent-gold)" }}>
              🔮 Encuentro Itinerante
            </h3>
            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Mercado de Brujas no es solo un mercado; es una experiencia inmersiva con música, talleres, rituales de temporada y aprendizajes compartidos.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Pages Grid */}
      <section style={{ maxWidth: "1240px", margin: "0 auto 5rem", padding: "0 2rem", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="badge badge-gold">✦ Explora la Plataforma ✦</span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "0.5rem" }}>
            Secciones e Historias de Mercado de Brujas
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          <Link href="/origenes" style={{ textDecoration: "none" }}>
            <div className="glass-card-gold" style={{ padding: "2rem 1.5rem", textAlign: "center", height: "100%" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>📜</span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                Orígenes
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                Conoce la línea del tiempo y la historia de cómo surgió el primer aquelarre en 2021.
              </p>
            </div>
          </Link>

          <Link href="/ediciones" style={{ textDecoration: "none" }}>
            <div className="glass-card-gold" style={{ padding: "2rem 1.5rem", textAlign: "center", height: "100%" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>🎪</span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                Ediciones de la Feria
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                Accede al catálogo de cada feria con sus relatos completos, fechas y fotos exclusivas.
              </p>
            </div>
          </Link>

          <Link href="/galeria" style={{ textDecoration: "none" }}>
            <div className="glass-card-gold" style={{ padding: "2rem 1.5rem", textAlign: "center", height: "100%" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>📸</span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                Recopilación Fotográfica
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                Una vista a la memoria gráfica compilada de todas las ferias pasadas.
              </p>
            </div>
          </Link>

          <Link href="/oraculo" style={{ textDecoration: "none" }}>
            <div className="glass-card-gold" style={{ padding: "2rem 1.5rem", textAlign: "center", height: "100%" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.75rem" }}>✨</span>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                Oráculo Diario
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                Consulta el mensaje de las cartas y elementos para guiar tu jornada.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "auto",
          borderTop: "1px solid var(--border-subtle)",
          padding: "3rem 2rem 2rem",
          backgroundColor: "rgba(30, 19, 13, 0.95)",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent-gold)", marginBottom: "0.75rem" }}>
              🌙 Mercado de Brujas
            </h3>
            <p className="text-muted" style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>
              Plataforma itinerante de arte esotérico, alquimia artesanal, botánica sagrada y comunidad de creadores independientes.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem" }}>Páginas</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li><Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Historia (Inicio)</Link></li>
              <li><Link href="/origenes" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Orígenes & Cronología</Link></li>
              <li><Link href="/ediciones" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: 600 }}>🎪 Ediciones de la Feria</Link></li>
              <li><Link href="/galeria" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Recopilación Fotográfica</Link></li>
              <li><Link href="/oraculo" style={{ color: "var(--accent-glow)", textDecoration: "none" }}>✨ Oráculo Diario</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem" }}>Redes Oficiales</h4>
            <p className="text-muted" style={{ fontSize: "0.88rem", marginBottom: "1rem" }}>
              Síguenos en Instagram para enterarte de las convocatorias y fechas de los próximos encuentros.
            </p>
            <a
              href="https://www.instagram.com/mercado_brujas/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "0.85rem", padding: "0.5rem 1rem", fontWeight: 600 }}
            >
              📸 @mercado_brujas
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px dashed var(--border-subtle)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p className="text-muted" style={{ fontSize: "0.85rem" }}>
            🌙 Mercado de Brujas © {new Date().getFullYear()} — Plataforma Web de Historia & Ediciones Pop-Up
          </p>
        </div>
      </footer>
    </div>
  );
}
