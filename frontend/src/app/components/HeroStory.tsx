"use client";

import React from "react";

export default function HeroStory() {
  return (
    <section
      style={{
        position: "relative",
        padding: "5.5rem 2rem 4.5rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "82vh",
        textAlign: "center",
      }}
    >
      {/* ── Background atmospheric glows (Black, White & Purple) ── */}
      {/* Top center purple moon glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "-140px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(107, 33, 168, 0.08) 45%, transparent 70%)",
          filter: "blur(75px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Central stark white highlight glow behind title */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "450px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(255, 255, 255, 0.08) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
          animationDelay: "1s",
        }}
      />

      {/* Rotating dashed sigil rings (Crisp Monochrome) */}
      <div
        className="animate-rotate-slow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "680px",
          height: "680px",
          marginTop: "-340px",
          marginLeft: "-340px",
          borderRadius: "50%",
          border: "1px dashed rgba(255, 255, 255, 0.12)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "480px",
          height: "480px",
          marginTop: "-240px",
          marginLeft: "-240px",
          borderRadius: "50%",
          border: "1px dashed rgba(168, 85, 247, 0.15)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Scattered star dots */}
      {[
        { top: "10%", left: "7%", s: "3px", delay: "0s" },
        { top: "18%", left: "90%", s: "2.5px", delay: "1.2s" },
        { top: "72%", left: "5%",  s: "2px", delay: "0.7s" },
        { top: "82%", left: "93%", s: "3px", delay: "2s" },
        { top: "35%", left: "97%", s: "2px", delay: "1.5s" },
        { top: "60%", left: "2%",  s: "2px", delay: "0.3s" },
        { top: "48%", left: "94%", s: "2.5px", delay: "1.8s" },
      ].map((star, i) => (
        <div
          key={i}
          className="animate-pulse-glow"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.s,
            height: star.s,
            borderRadius: "50%",
            background: "#ffffff",
            opacity: 0.8,
            animationDelay: star.delay,
            zIndex: 0,
            boxShadow: "0 0 6px rgba(168, 85, 247, 0.9), 0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        />
      ))}

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "940px", width: "100%" }}>

        {/* Crescent Moon Icon Badge */}
        <div style={{ marginBottom: "1.2rem", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              fontSize: "2.5rem",
              lineHeight: 1,
              filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
            }}
          >
            🌙
          </div>
        </div>

        {/* Top ornamental badge */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span className="badge badge-gold" style={{ letterSpacing: "0.2em", padding: "0.35rem 1.1rem" }}>
            ✦ AQUELARRE ✦
          </span>
        </div>

        {/* Main gothic title — MERCADO DE BRUJAS (LARGE & DOMINANT) */}
        <h1
          className="animate-float"
          style={{
            fontSize: "clamp(3.2rem, 8vw, 6.2rem)",
            lineHeight: 1.08,
            marginBottom: "1.2rem",
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#ffffff",
            textShadow: "0 0 45px rgba(168, 85, 247, 0.45), 0 0 90px rgba(255, 255, 255, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ opacity: 0.6, fontSize: "0.45em", color: "var(--accent-purple-light)", verticalAlign: "middle" }}>✦</span>
          <span>Mercado de Brujas</span>
          <span style={{ opacity: 0.6, fontSize: "0.45em", color: "var(--accent-purple-light)", verticalAlign: "middle" }}>✦</span>
        </h1>

        <h2
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.35rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2.2rem",
          }}
        >
          El Santuario Itinerante de Arte & Misticismo
        </h2>

        {/* Ornament divider */}
        <div className="ornament-divider" style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              color: "#ffffff",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            ✦ · 🌙 · ✦
          </span>
        </div>

        {/* Intro paragraph */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            maxWidth: "720px",
            margin: "0 auto",
            fontFamily: "var(--font-sans)",
          }}
        >
          <strong style={{ color: "#ffffff", fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}>
            Mercado de Brujas
          </strong>{" "}
          es un punto de encuentro independiente donde el arte, la botánica, la alquimia y las expresiones místicas se unen en cada edición presencial.
        </p>
      </div>
    </section>
  );
}
