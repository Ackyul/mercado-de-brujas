"use client";

import React from "react";
import Link from "next/link";

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
      {/* ── Background atmospheric glows ── */}
      {/* Top center glow — like moonlight from the flyers */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(153, 102, 204, 0.15) 0%, rgba(100, 70, 160, 0.08) 45%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Bottom warm fire glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "350px",
          background:
            "radial-gradient(ellipse, rgba(201, 120, 40, 0.12) 0%, rgba(150, 70, 20, 0.06) 50%, transparent 75%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          zIndex: 0,
          animationDelay: "2s",
        }}
      />

      {/* Rotating dashed sigil ring */}
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
          border: "1px dashed rgba(201, 164, 90, 0.1)",
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
          border: "1px dashed rgba(153, 102, 204, 0.08)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Scattered star dots */}
      {[
        { top: "10%", left: "7%", s: "3px", delay: "0s" },
        { top: "18%", left: "90%", s: "2px", delay: "1.2s" },
        { top: "72%", left: "5%",  s: "2px", delay: "0.7s" },
        { top: "82%", left: "93%", s: "3px", delay: "2s" },
        { top: "35%", left: "97%", s: "2px", delay: "1.5s" },
        { top: "60%", left: "2%",  s: "2px", delay: "0.3s" },
        { top: "48%", left: "94%", s: "2px", delay: "1.8s" },
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
            background: "#c9a45a",
            opacity: 0.6,
            animationDelay: star.delay,
            zIndex: 0,
            boxShadow: "0 0 4px rgba(201, 164, 90, 0.8)",
          }}
        />
      ))}

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "880px", width: "100%" }}>

        {/* Top ornamental badge */}
        <div style={{ marginBottom: "1.8rem" }}>
          <span className="badge badge-gold">
            ✦ El Santuario Itinerante de Arte & Misticismo ✦
          </span>
        </div>

        {/* Main gothic title — matches AQUELARRE lettering spirit */}
        <h1
          className="text-gradient animate-float"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            lineHeight: 1.15,
            marginBottom: "0.5rem",
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textShadow: "0 0 50px rgba(201, 164, 90, 0.25)",
          }}
        >
          Aquelarre
        </h1>
        <h2
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "2rem",
          }}
        >
          Mercado de Brujas
        </h2>

        {/* Ornament divider */}
        <div className="ornament-divider" style={{ marginBottom: "1.8rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Lorem ipsum · dolor sit amet
          </span>
        </div>

        {/* Intro paragraph */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            maxWidth: "720px",
            margin: "0 auto 3rem",
            fontFamily: "var(--font-sans)",
          }}
        >
          <strong style={{ color: "var(--accent-cream)", fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}>
            Mercado de Brujas
          </strong>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Stats — parchment style cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "1rem",
            maxWidth: "760px",
            margin: "0 auto 3rem",
          }}
        >
          {[
            { n: "40+", label: "Ediciones Celebradas", sub: "Ferias pop-up presenciales", icon: "🌕" },
            { n: "150+", label: "Creadores", sub: "Marcas independientes", icon: "🌿" },
            { n: "10,000+", label: "Visitantes", sub: "Experiencias compartidas", icon: "🔮" },
          ].map((s) => (
            <div
              key={s.label}
              className="ornate-frame glass-panel"
              style={{ padding: "1.4rem 1rem", textAlign: "center" }}
            >
              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.4rem" }}>{s.icon}</span>
              <span
                style={{
                  fontSize: "1.6rem",
                  display: "block",
                  color: "var(--accent-gold)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                {s.n}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-main)", fontWeight: 700, display: "block" }}>
                {s.label}
              </span>
              <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", display: "block" }}>
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/origenes" className="btn-primary">
            📜 Ver Orígenes & Cronología
          </Link>
          <Link href="/ediciones" className="btn-secondary">
            🎪 Ver Ediciones de la Feria
          </Link>
        </div>
      </div>
    </section>
  );
}
