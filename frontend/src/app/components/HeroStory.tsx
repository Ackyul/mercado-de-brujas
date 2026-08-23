"use client";

import React from "react";

export default function HeroStory() {
  return (
    <section
      style={{
        position: "relative",
        padding: "1rem 1.5rem 3.5rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        textAlign: "center",
      }}
    >
      {/* ── Background atmospheric glows ── */}
      <div
        className="animate-pulse-glow"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.16) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Central Hero Video / Media Box Inset (Mercado de Brujas Top Banner Style) ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1020px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(168, 85, 247, 0.25)",
            backgroundColor: "#000000",
          }}
        >
          {/* Main Hero Background Video / Ambient Image */}
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop"
            alt="Mercado de Brujas Feria Pop-Up"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.85) contrast(1.1)",
            }}
          />

          {/* Dark Gradient Overlay & Vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(5, 5, 7, 0.75) 100%), linear-gradient(180deg, rgba(5,5,7,0.3) 0%, transparent 40%, rgba(5,5,7,0.6) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Inset Badge Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            <span
              className="badge badge-gold"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                padding: "0.45rem 1.3rem",
                backgroundColor: "rgba(5, 5, 7, 0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              ✦ SANTUARIO ITINERANTE DE ARTE & MISTICISMO ✦
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
