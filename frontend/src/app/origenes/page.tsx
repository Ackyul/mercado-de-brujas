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
      year: "2023 - 2024",
      title: "El Santuario Itinerante",
      subtitle: "Una experiencia cultural & alternativa de referencia",
      description:
        "Nos convertimos en un movimiento cultural itinerante clave. Alquimistas, artesanos del cristal de obsidiana, joyeros mágicos, encuadernadores de grimorios e ilustradores esotéricos forman hoy una red sólida donde cada evento es una celebración de comunidad y poder creador.",
      icon: "🔮",
      highlights: ["Más de 150 expositores", "Charlas sobre astrología y plantas", "Alianzas gastronómicas temáticas"],
    },
    {
      phase: "Fase IV",
      year: "2025 - Presente",
      title: "La Era Digital & Proyección Universal",
      subtitle: "El caldero virtual para todo el mundo",
      description:
        "Llevamos la mística de las ferias presenciales al espacio digital. Conectamos el mapa de ediciones, el registro de artesanos y la reserva de eventos con almas de todos los rincones.",
      icon: "✦",
      highlights: ["Plataforma web interactiva", "Plaza de creadores permanente", "Encuentros internacionales"],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)", fontFamily: "var(--font-sans)" }}>
      {/* Navigation Header */}
      <Header />

      {/* Main Container */}
      <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>
            ✦ Cronología & Evolución ✦
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 800, color: "var(--text-main)" }}>
            Orígenes de Mercado de Brujas
          </h1>
          <p className="text-muted" style={{ maxWidth: "650px", margin: "0.75rem auto 0", fontSize: "1.05rem" }}>
            Explora los hitos históricos que convirtieron una modesta reunión artesanal en el mercado místico itinerante más emblemático de la región.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="timeline-container">
          {milestones.map((item, index) => {
            const isSelected = activeStep === index;

            return (
              <div
                key={item.year}
                onClick={() => setActiveStep(index)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 50px 1fr",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "3.5rem",
                  cursor: "pointer",
                }}
              >
                {/* Left Column (Or right depending on index) */}
                <div
                  style={{
                    gridColumn: index % 2 === 0 ? "1" : "3",
                    order: index % 2 === 0 ? 1 : 3,
                    textAlign: index % 2 === 0 ? "right" : "left",
                  }}
                >
                  <div
                    className={isSelected ? "glass-card-gold" : "glass-panel"}
                    style={{
                      padding: "1.75rem",
                      position: "relative",
                      transform: isSelected ? "scale(1.02)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span className="badge">{item.phase}</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--accent-gold)", fontWeight: 700 }}>
                        {item.year}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.35rem", marginBottom: "0.35rem", fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--accent-glow)", fontStyle: "italic", marginBottom: "0.85rem" }}>
                      "{item.subtitle}"
                    </p>

                    <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                      }}
                    >
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.2rem 0.6rem",
                            borderRadius: "4px",
                            backgroundColor: "rgba(139, 94, 60, 0.25)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-main)",
                            fontWeight: 600,
                          }}
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Icon Node */}
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
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: isSelected ? "var(--accent-gold)" : "var(--bg-secondary)",
                      border: "2px solid " + (isSelected ? "#fff" : "var(--accent-brown)"),
                      color: isSelected ? "#000" : "var(--text-main)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      boxShadow: isSelected ? "0 0 20px var(--accent-gold)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Right Visual Image Placeholder (Imagen) */}
                <div
                  style={{
                    gridColumn: index % 2 === 0 ? "3" : "1",
                    order: index % 2 === 0 ? 3 : 1,
                  }}
                >
                  <div
                    className="glass-panel"
                    style={{
                      height: "210px",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <ImagePlaceholder
                      height="100%"
                      label="(Imagen)"
                      sublabel={`Memoria Fotográfica • ${item.year}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "auto",
          borderTop: "1px solid var(--border-subtle)",
          padding: "2.5rem 2rem",
          textAlign: "center",
          backgroundColor: "rgba(30, 19, 13, 0.95)",
        }}
      >
        <p style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
          🌙 Mercado de Brujas — Orígenes & Memoria Colectiva
        </p>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          Plataforma Cultural de Ferias Pop-Up • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
