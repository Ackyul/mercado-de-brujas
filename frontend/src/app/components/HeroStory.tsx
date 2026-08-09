"use client";

import React from "react";
import Link from "next/link";

export default function HeroStory() {
  return (
    <section
      style={{
        position: "relative",
        padding: "5rem 2rem 4rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Background Constellation Aura */}
      <div
        className="animate-rotate-slow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "550px",
          height: "550px",
          marginTop: "-275px",
          marginLeft: "-275px",
          borderRadius: "50%",
          border: "1px dashed rgba(224, 169, 109, 0.2)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(224, 169, 109, 0.22) 0%, rgba(139, 94, 60, 0.15) 45%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "920px" }}>
        {/* Top Badge */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span className="badge badge-gold">
            ✦ El Santuario Itinerante de Artesanías & Misticismo ✦
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-gradient animate-float"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textShadow: "0 0 30px rgba(224, 169, 109, 0.3)",
          }}
        >
          La Historia de Mercado de Brujas
        </h1>

        {/* Subtitle / Story Intro */}
        <p
          className="text-muted"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: "780px",
            margin: "0 auto 2.5rem",
            fontWeight: 400,
          }}
        >
          <strong>Mercado de Brujas</strong> es un espacio cultural e itinerante donde el arte independiente, la herbolaria ancestral, los cristales sagrados y la creatividad artesanal convergen en cada feria pop-up.
        </p>

        {/* Highlight Stats Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto 3rem",
          }}
        >
          <div className="glass-panel" style={{ padding: "1.25rem" }}>
            <span style={{ fontSize: "1.8rem", display: "block", color: "var(--accent-gold)", fontWeight: 800, marginBottom: "0.25rem" }}>
              🌕 40+
            </span>
            <span style={{ fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 700 }}>
              Ediciones Celebradas
            </span>
            <span style={{ fontSize: "0.75rem", display: "block", color: "var(--text-muted)" }}>
              Ferias pop-up presenciales
            </span>
          </div>

          <div className="glass-panel" style={{ padding: "1.25rem" }}>
            <span style={{ fontSize: "1.8rem", display: "block", color: "var(--accent-glow)", fontWeight: 800, marginBottom: "0.25rem" }}>
              🌿 150+
            </span>
            <span style={{ fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 700 }}>
              Creadores & Alquimistas
            </span>
            <span style={{ fontSize: "0.75rem", display: "block", color: "var(--text-muted)" }}>
              Marcas independientes
            </span>
          </div>

          <div className="glass-panel" style={{ padding: "1.25rem" }}>
            <span style={{ fontSize: "1.8rem", display: "block", color: "var(--accent-gold)", fontWeight: 800, marginBottom: "0.25rem" }}>
              🔮 10,000+
            </span>
            <span style={{ fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 700 }}>
              Visitantes
            </span>
            <span style={{ fontSize: "0.75rem", display: "block", color: "var(--text-muted)" }}>
              Experiencias compartidas
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/origenes" className="btn-primary" style={{ fontWeight: 700 }}>
            📜 Ver Orígenes & Línea del Tiempo
          </Link>
          <Link href="/ediciones" className="btn-secondary" style={{ fontWeight: 700 }}>
            🎪 Ver Ediciones de la Feria
          </Link>
        </div>
      </div>
    </section>
  );
}
