"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";

interface Milestone {
  phase: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
}

export default function OrigenesPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const milestones: Milestone[] = [
    {
      phase: "Fase I",
      year: "2021",
      title: "La Semilla Mística & El Primer Aquelarre",
      subtitle: "Un llamado a los artesanos de lo oculto",
      description:
        "Mercado de Brujas nació de la necesidad de crear un refugio físico donde el arte alternativo, la botánica sagrada y el esoterismo independiente pudieran expresarse sin prejuicios. Empezó como una pequeña reunión de 10 creadores locales bajo la luz de la luna llena.",
      icon: "🌱",
      highlights: ["10 artesanos pioneros", "Primera edición íntima", "Consagración de espacio sagrado"],
    },
    {
      phase: "Fase II",
      year: "2022",
      title: "Consolidación de las Ferias Pop-Up",
      subtitle: "La expansión del círculo",
      description:
        "El boca a boca multiplicó a la comunidad. Mercado de Brujas transformó casonas históricas y jardines botánicos en mercados mágicos pop-up con música en vivo, lecturas de tarot, sahumerios hechos a mano y talleres de herbolaria ancestral.",
      icon: "🕯️",
      highlights: ["Talleres de magia botánica", "Música ceremonial en vivo", "Llegada de lecturas de Tarot"],
    },
    {
      phase: "Fase III",
      year: "2023 – 2024",
      title: "El Santuario Itinerante",
      subtitle: "Una experiencia cultural & alternativa de referencia",
      description:
        "Nos convertimos en un movimiento cultural itinerante clave. Alquimistas, artesanos del cristal de obsidiana, joyeros mágicos, encuadernadores de grimorios e ilustradores esotéricos forman hoy una red sólida donde cada evento es una celebración de comunidad.",
      icon: "🔮",
      highlights: ["Más de 150 expositores", "Charlas sobre astrología y plantas", "Alianzas gastronómicas temáticas"],
    },
    {
      phase: "Fase IV",
      year: "2025 – Presente",
      title: "La Era Digital & Proyección Universal",
      subtitle: "El caldero virtual para todo el mundo",
      description:
        "Llevamos la mística de las ferias presenciales al espacio digital. Conectamos el mapa de ediciones, el registro de artesanos y la reserva de eventos con almas de todos los rincones del mundo.",
      icon: "✦",
      highlights: ["Plataforma web interactiva", "Plaza de creadores permanente", "Encuentros internacionales"],
    },
  ];

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

      <section style={{ padding: "4.5rem 2rem 6rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Page header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            ✦ Cronología & Evolución ✦
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
              marginBottom: "0.75rem",
            }}
          >
            Orígenes de Mercado de Brujas
          </h1>
          <div className="ornament-divider" style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Historia & Memoria
            </span>
          </div>
          <p
            className="text-muted"
            style={{ maxWidth: "640px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Explora los hitos históricos que convirtieron una modesta reunión artesanal en el mercado místico itinerante más emblemático de la región.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {milestones.map((item, index) => {
            const isSelected = activeStep === index;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.year}
                onClick={() => setActiveStep(index)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 56px 1fr",
                  alignItems: "center",
                  gap: "1.75rem",
                  marginBottom: "4rem",
                  cursor: "pointer",
                }}
              >
                {/* Text card */}
                <div
                  style={{
                    gridColumn: isLeft ? "1" : "3",
                    order: isLeft ? 1 : 3,
                    textAlign: isLeft ? "right" : "left",
                  }}
                >
                  <div
                    className={isSelected ? "glass-card-gold ornate-frame" : "glass-panel"}
                    style={{
                      padding: "1.75rem",
                      transform: isSelected ? "scale(1.02)" : "scale(1)",
                      transition: "all 0.3s ease",
                      borderLeft: !isLeft && isSelected ? "3px solid var(--accent-gold)" : undefined,
                      borderRight: isLeft && isSelected ? "3px solid var(--accent-gold)" : undefined,
                    }}
                  >
                    {/* Phase + year */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isLeft ? "flex-end" : "flex-start",
                        gap: "0.5rem",
                        marginBottom: "0.6rem",
                      }}
                    >
                      <span className="badge">{item.phase}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "0.88rem",
                          color: "var(--accent-gold)",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.15rem",
                        letterSpacing: "0.03em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--accent-gold)",
                        fontStyle: "italic",
                        marginBottom: "0.85rem",
                        opacity: 0.85,
                      }}
                    >
                      "{item.subtitle}"
                    </p>
                    <p
                      className="text-muted"
                      style={{ fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1rem" }}
                    >
                      {item.description}
                    </p>

                    {/* Chips */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        justifyContent: isLeft ? "flex-end" : "flex-start",
                      }}
                    >
                      {item.highlights.map((h, i) => (
                        <span key={i} className="chip">✦ {h}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div
                  style={{
                    gridColumn: "2",
                    order: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: isSelected ? "var(--accent-gold)" : "var(--bg-secondary)",
                      border: `2px solid ${isSelected ? "var(--accent-cream)" : "rgba(201, 164, 90, 0.35)"}`,
                      color: isSelected ? "#110e0c" : "var(--text-main)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      boxShadow: isSelected ? "0 0 20px rgba(201, 164, 90, 0.5)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Image placeholder */}
                <div
                  style={{
                    gridColumn: isLeft ? "3" : "1",
                    order: isLeft ? 3 : 1,
                  }}
                >
                  <div
                    className="glass-panel"
                    style={{
                      height: "200px",
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                    }}
                  >
                    <ImagePlaceholder
                      height="100%"
                      label="(Imagen)"
                      sublabel={`Memoria Fotográfica · ${item.year}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bar" style={{ marginTop: "auto" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.88rem",
            color: "var(--accent-gold)",
            letterSpacing: "0.1em",
            marginBottom: "0.4rem",
          }}
        >
          🌙 Mercado de Brujas — Orígenes & Memoria Colectiva
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          Plataforma Cultural de Ferias Pop-Up · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
