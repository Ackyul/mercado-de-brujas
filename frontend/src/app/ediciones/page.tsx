"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, Edition, EditionPhoto } from "../data/editionsData";

export default function EdicionesPage() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>(EDITIONS_DATA[0]);
  const [lightboxPhoto, setLightboxPhoto] = useState<EditionPhoto | null>(null);

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

      {/* Page hero */}
      <section
        style={{
          padding: "4.5rem 2rem 3rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
          ✦ Catálogo Histórico de Encuentros Pop-Up ✦
        </span>
        <h1
          className="text-gradient"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}
        >
          Ediciones de Mercado de Brujas
        </h1>
        <div className="ornament-divider" style={{ marginBottom: "1.25rem" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Aquelarre · Ferias & Ediciones
          </span>
        </div>
        <p className="text-muted" style={{ fontSize: "1rem", maxWidth: "660px", margin: "0 auto", lineHeight: 1.75 }}>
          Selecciona una edición para leer su relato completo, datos de encuentro y sus fotos exclusivas.
        </p>
      </section>

      {/* Main layout */}
      <div
        className="ediciones-layout"
        style={{
          maxWidth: "1280px",
          margin: "0 auto 6rem",
          padding: "0 1.25rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(270px, 320px) 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {/* Left: edition selector */}
        <div className="ediciones-sidebar" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "0.25rem",
            }}
          >
            ✦ Seleccionar Edición ({EDITIONS_DATA.length})
          </h2>

          {EDITIONS_DATA.map((ed) => {
            const isSelected = selectedEdition.id === ed.id;
            return (
              <div
                key={ed.id}
                onClick={() => setSelectedEdition(ed)}
                className={`edition-selector-item ${isSelected ? "glass-card-gold" : "glass-panel"}`}
                style={{
                  padding: "1.1rem 1.25rem",
                  cursor: "pointer",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: `3px solid ${isSelected ? "var(--accent-gold)" : "transparent"}`,
                  transition: "all 0.2s ease",
                  transform: isSelected ? "translateX(4px)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                  <span className="badge" style={{ fontSize: "0.6rem" }}>{ed.status}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "0.75rem",
                      color: "var(--accent-gold)",
                      fontWeight: 700,
                    }}
                  >
                    {ed.number > 0 ? `#${ed.number}` : "Especial"}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.02em",
                    color: "var(--text-main)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {ed.title}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                  📅 {ed.date}
                </p>
                <span style={{ fontSize: "0.72rem", color: "var(--accent-gold)", fontStyle: "italic", opacity: 0.8 }}>
                  📍 {ed.location}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right: edition details */}
        <div
          className="glass-panel ornate-frame"
          style={{ padding: "2.25rem", borderRadius: "var(--radius-md)" }}
        >
          {/* Cover image */}
          <div
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <ImagePlaceholder
              height="100%"
              label="(Imagen)"
              
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, transparent 0%, rgba(14, 10, 8, 0.97) 100%)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span className="badge badge-gold">{selectedEdition.status}</span>
                <span className="badge">{selectedEdition.attendeesCount}</span>
                <span className="badge badge-purple">{selectedEdition.exhibitorsCount}</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {selectedEdition.title}
              </h2>
            </div>
          </div>

          {/* Quick info — parchment style */}
          <div
            className="parchment-panel quick-info-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              padding: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--accent-gold)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.3rem",
                }}
              >
                📅 Fecha y Hora
              </span>
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)", display: "block" }}>
                {selectedEdition.date}
              </span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{selectedEdition.time}</span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--accent-gold)",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.3rem",
                }}
              >
                📍 Ubicación & Sede
              </span>
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-main)", display: "block" }}>
                {selectedEdition.location}
              </span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{selectedEdition.city}</span>
            </div>
          </div>

          {/* Story */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                color: "var(--accent-gold)",
                marginBottom: "0.75rem",
              }}
            >
              Descripción & Historia de esta Edición
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-main)", marginBottom: "1.25rem" }}>
              {selectedEdition.fullStory}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {selectedEdition.highlights.map((item, idx) => (
                <span key={idx} className="chip">✦ {item}</span>
              ))}
            </div>
          </div>

          {/* Photos grid */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  color: "var(--accent-gold)",
                }}
              >
                📸 Fotografías ({selectedEdition.gallery.length})
              </h3>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Haz clic para ampliar</span>
            </div>

            <div
              className="photo-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {selectedEdition.gallery.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxPhoto(photo)}
                  className="glass-panel"
                  style={{
                    height: "180px",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
                >
                  <div style={{ flexGrow: 1 }}>
                    <ImagePlaceholder height="100%" label="(Imagen)" />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="lightbox-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.94)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="glass-card-gold ornate-frame"
            style={{ maxWidth: "680px", width: "100%", overflow: "hidden", position: "relative", borderRadius: "var(--radius-md)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 10,
                background: "rgba(0,0,0,0.7)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "50%",
                width: "34px",
                height: "34px",
                color: "#fff",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
              }}
            >
              ✕
            </button>

            <div className="lightbox-img-wrap" style={{ height: "340px", padding: "1.5rem" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                
              />
            </div>

            <div
              style={{
                padding: "1.5rem",
                background: "rgba(14, 10, 8, 0.98)",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>{lightboxPhoto.tag}</span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  color: "var(--text-main)",
                  marginBottom: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {lightboxPhoto.caption}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.82rem" }}>
                Fotografía de {selectedEdition.title}
              </p>
            </div>
          </div>
        </div>
      )}

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
          🌙 Mercado de Brujas — Plataforma Cultural de Ferias Pop-Up
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          Comunidad, Misticismo & Arte Independiente · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
