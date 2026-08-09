"use client";

import React, { useState } from "react";

interface OracleCard {
  title: string;
  symbol: string;
  element: string;
  message: string;
  guidance: string;
}

export default function OracleWidget() {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<OracleCard | null>(null);

  const cards: OracleCard[] = [
    {
      title: "La Obsidiana Sagrada",
      symbol: "💎",
      element: "Tierra & Fuego",
      message: "Protección psíquica y arraigo. Desprende las cargas que no te pertenecen.",
      guidance: "Hoy es un buen día para limpiar tu espacio con salvia o palo santo y decretar intenciones firmes.",
    },
    {
      title: "El Elixir de la Luna Creciente",
      symbol: "🌙",
      element: "Agua & Magia",
      message: "Expansión, renovación e intuición despierta. Confía en tus impulsos creadores.",
      guidance: "Escribe tus ideas más audaces antes del anochecer. Tus habilidades de manifestación están al máximo.",
    },
    {
      title: "La Llama del Aquelarre",
      symbol: "🔥",
      element: "Fuego & Espíritu",
      message: "Comunidad, fraternidad y poder colectivo. No caminas a solas en el sendero.",
      guidance: "Conecta con creadores y artistas afines. En la unión de voluntades florecen los proyectos verdaderos.",
    },
    {
      title: "El Grimorio de las Esencias",
      symbol: "📜",
      element: "Aire & Sabiduría",
      message: "Aprendizaje y fórmulas milenarias. Es tiempo de adquirir nuevas herramientas de estudio.",
      guidance: "Abre un libro antiguo, medita 10 minutos al aire libre o consagra un nuevo amuleto.",
    },
  ];

  const handleDrawCard = () => {
    if (flipped) {
      setFlipped(false);
      setTimeout(() => {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        setSelectedCard(randomCard);
        setFlipped(true);
      }, 400);
    } else {
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      setSelectedCard(randomCard);
      setFlipped(true);
    }
  };

  return (
    <section id="oraculo" style={{ padding: "5rem 2rem", background: "rgba(19, 13, 33, 0.4)", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge badge-gold">✦ Experiencia Mística Interactiva ✦</span>
          <h2 style={{ fontSize: "2.3rem", fontFamily: "var(--font-sans)", fontWeight: 800, marginTop: "0.5rem" }}>
            El Oráculo del Caldero
          </h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0.5rem auto 0" }}>
            Cierra tus ojos por un instante, respira profundo y presiona el botón para revelar el mensaje de los elementos para tu jornada.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Oracle Interactive Card Box */}
          <div className="oracle-card-wrapper" style={{ width: "320px", height: "460px" }}>
            <div
              className={`oracle-card-inner ${flipped ? "flipped" : ""}`}
              onClick={handleDrawCard}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Front Face (Card Back pattern) */}
              <div
                className="oracle-card-front glass-card-gold"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  textAlign: "center",
                  border: "2px solid rgba(255, 183, 3, 0.4)",
                  borderRadius: "var(--radius-lg)",
                  background: "radial-gradient(circle at center, rgba(157, 78, 221, 0.25) 0%, rgba(19, 13, 33, 0.95) 100%)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    fontSize: "3.5rem",
                    marginBottom: "1rem",
                    filter: "drop-shadow(0 0 10px var(--accent-gold))",
                  }}
                >
                  🔮
                </div>
                <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-sans)", fontWeight: 800, color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  MERCADO DE BRUJAS
                </h3>
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--accent-glow)", textTransform: "uppercase", fontWeight: 700 }}>
                  Consultar Oráculo
                </span>
                <div style={{ marginTop: "2rem", fontSize: "0.8rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  Toca la carta para revelarla
                </div>
              </div>

              {/* Back Face (Revealed Oracle Message) */}
              <div
                className="oracle-card-back glass-panel"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  border: "2px solid var(--accent-purple)",
                  borderRadius: "var(--radius-lg)",
                  background: "radial-gradient(circle at center, rgba(35, 23, 60, 0.95) 0%, rgba(11, 7, 19, 0.98) 100%)",
                  boxShadow: "0 0 25px rgba(157, 78, 221, 0.3)",
                }}
              >
                <div>
                  <span className="badge" style={{ fontSize: "0.7rem", marginBottom: "0.75rem" }}>
                    {selectedCard?.element || "Elemento Sagrado"}
                  </span>
                  <div style={{ fontSize: "3rem", margin: "0.5rem 0" }}>{selectedCard?.symbol}</div>
                  <h3 style={{ fontSize: "1.3rem", fontFamily: "var(--font-sans)", fontWeight: 800, color: "var(--accent-gold)" }}>
                    {selectedCard?.title}
                  </h3>
                </div>

                <div style={{ margin: "1rem 0" }}>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.5, color: "var(--text-main)", marginBottom: "0.75rem" }}>
                    "{selectedCard?.message}"
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--accent-glow)", fontStyle: "italic", borderTop: "1px dashed var(--border-subtle)", paddingTop: "0.75rem" }}>
                    💡 {selectedCard?.guidance}
                  </p>
                </div>

                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600 }}>
                  ✦ Mercado de Brujas Oracles ✦
                </span>
              </div>
            </div>
          </div>

          {/* Trigger Button */}
          <button className="btn-primary" onClick={handleDrawCard} style={{ padding: "0.85rem 2rem", fontSize: "1rem", fontWeight: 700 }}>
            ✨ {flipped ? "Girar Otra Carta" : "Girar Carta del Día"}
          </button>
        </div>
      </div>
    </section>
  );
}
