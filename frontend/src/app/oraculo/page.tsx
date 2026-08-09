"use client";

import React from "react";
import Header from "../components/Header";
import OracleWidget from "../components/OracleWidget";

export default function OraculoPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <Header />

      {/* Main Container */}
      <div style={{ flexGrow: 1, padding: "2rem 0" }}>
        <OracleWidget />
      </div>

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
          🌙 Mercado de Brujas — Oráculo del Caldero
        </p>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          Experiencia mística e intuitiva • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
