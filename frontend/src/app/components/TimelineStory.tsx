"use client";

import React, { useState } from "react";

interface Milestone {
  phase: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
  image: string;
}

export default function TimelineStory() {
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
      image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    },
    {
      phase: "Fase IV",
      year: "2025 - Presente",
      title: "La Era Digital & Proyección Universal",
      subtitle: "El caldero virtual para todo el mundo",
      description:
        "Llevamos la mística de las ferias presenciales al espacio digital. A través de nuestro portal oficial, conectamos el backend alquímico, catálogo en tiempo real y reserva de eventos con almas de todos los rincones.",
      icon: "✦",
      highlights: ["Plataforma web interactiva", "Plaza de creadores permanente", "Encuentros internacionales"],
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="origen" style={{ padding: "5rem 2rem", maxWidth: "1200px", margin: "0 auto", fontFamily: "var(--font-sans)" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="badge badge-gold">✦ Línea del Tiempo ✦</span>
        <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-sans)", fontWeight: 800, marginTop: "0.5rem" }}>
          Nuestra Historia & Evolución
        </h2>
        <p className="text-muted" style={{ maxWidth: "650px", margin: "0.75rem auto 0", fontSize: "1.05rem" }}>
          Explora los hitos que convirtieron una modesta reunión artesanal en el mercado místico más emblemático de la región.
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
                gridTemplateColumns: index % 2 === 0 ? "1fr 50px 1fr" : "1fr 50px 1fr",
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

                  <h3 style={{ fontSize: "1.35rem", marginBottom: "0.35rem", fontFamily: "var(--font-sans)", fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--accent-glow)", fontStyle: "italic", marginBottom: "0.85rem" }}>
                    "{item.subtitle}"
                  </p>

                  <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
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
                          backgroundColor: "rgba(157, 78, 221, 0.15)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-main)",
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
                    border: "2px solid " + (isSelected ? "#fff" : "var(--accent-purple)"),
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

              {/* Right Image/Visual Preview */}
              <div
                style={{
                  gridColumn: index % 2 === 0 ? "3" : "1",
                  order: index % 2 === 0 ? 3 : 1,
                }}
              >
                <div
                  className="glass-panel"
                  style={{
                    height: "220px",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: isSelected ? "brightness(1) contrast(1.05)" : "brightness(0.75)",
                      transition: "all 0.5s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(11, 7, 19, 0.8) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "15px",
                      right: "15px",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 600 }}>
                      Memoria Fotográfica • {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
