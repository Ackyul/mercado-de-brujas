"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, Edition, EditionPhoto } from "../data/editionsData";

export default function EdicionesPage() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>(EDITIONS_DATA[0]);
  const [lightboxPhoto, setLightboxPhoto] = useState<EditionPhoto | null>(null);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)", fontFamily: "var(--font-sans)" }}>
      {/* Navigation Header */}
      <Header />

      {/* Page Title Section */}
      <section
        style={{
          padding: "4rem 2rem 3rem",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
          ✦ Catálogo Histórico de Encuentros Pop-Up ✦
        </span>
        <h1
          className="text-gradient"
          style={{
            fontSize: "clamp(2.3rem, 5vw, 3.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Ediciones de Mercado de Brujas
        </h1>
        <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "720px", margin: "0 auto" }}>
          Explora cada feria celebrada. Selecciona una edición para leer su relato completo, datos de encuentro y sus fotos exclusivas.
        </p>
      </section>

      {/* Main Grid Content Layout */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto 5rem",
          padding: "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(280px, 340px) 1fr",
          gap: "2rem",
        }}
      >
        {/* Left Column: Edition Selector Cards List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
            🎪 Seleccionar Edición ({EDITIONS_DATA.length})
          </h2>

          {EDITIONS_DATA.map((ed) => {
            const isSelected = selectedEdition.id === ed.id;

            return (
              <div
                key={ed.id}
                onClick={() => setSelectedEdition(ed)}
                className={isSelected ? "glass-card-gold" : "glass-panel"}
                style={{
                  padding: "1.25rem",
                  cursor: "pointer",
                  borderRadius: "var(--radius-md)",
                  borderLeft: isSelected ? "4px solid var(--accent-gold)" : "1px solid var(--border-subtle)",
                  transition: "all 0.25s ease",
                  transform: isSelected ? "translateX(4px)" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <span className="badge" style={{ fontSize: "0.68rem" }}>
                    {ed.status}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700 }}>
                    {ed.number > 0 ? `#${ed.number}` : "Especial"}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.25rem" }}>
                  {ed.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  📅 {ed.date}
                </p>
                <span style={{ fontSize: "0.78rem", color: "var(--accent-glow)", fontStyle: "italic", display: "block" }}>
                  📍 {ed.location}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Edition Full Details & Photos */}
        <div className="glass-panel" style={{ padding: "2.25rem", borderRadius: "var(--radius-lg)" }}>
          {/* Top Banner Cover Image Placeholder */}
          <div
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <ImagePlaceholder
              height="100%"
              label="(Imagen)"
              sublabel={`Portada Oficial • ${selectedEdition.title}`}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, transparent 0%, rgba(30, 19, 13, 0.95) 100%)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span className="badge badge-gold">{selectedEdition.status}</span>
                <span className="badge">{selectedEdition.attendeesCount}</span>
                <span className="badge" style={{ backgroundColor: "rgba(88, 129, 87, 0.3)", color: "#a3b18a" }}>
                  {selectedEdition.exhibitorsCount}
                </span>
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
                {selectedEdition.title}
              </h2>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
              backgroundColor: "rgba(30, 19, 13, 0.5)",
              padding: "1.25rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700, display: "block", textTransform: "uppercase" }}>
                📅 FECHA Y HORA
              </span>
              <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-main)" }}>
                {selectedEdition.date}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>
                {selectedEdition.time}
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 700, display: "block", textTransform: "uppercase" }}>
                📍 UBICACIÓN Y SEDE
              </span>
              <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-main)" }}>
                {selectedEdition.location}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>
                {selectedEdition.city}
              </span>
            </div>
          </div>

          {/* Description & Story */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--accent-gold)" }}>
              Descripción & Historia de esta Edición
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-main)", marginBottom: "1.25rem" }}>
              {selectedEdition.fullStory}
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {selectedEdition.highlights.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "6px",
                    backgroundColor: "rgba(139, 94, 60, 0.25)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-main)",
                    fontWeight: 600,
                  }}
                >
                  ✦ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Photos Grid with (Imagen) Placeholders */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--accent-gold)" }}>
                📸 Fotografías Exclusivas de esta Edición ({selectedEdition.gallery.length})
              </h3>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Haz clic para ampliar cuadro
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {selectedEdition.gallery.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxPhoto(photo)}
                  className="glass-panel"
                  style={{
                    height: "190px",
                    position: "relative",
                    borderRadius: "var(--radius-sm)",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ flexGrow: 1 }}>
                    <ImagePlaceholder
                      height="100%"
                      label="(Imagen)"
                      sublabel={photo.caption}
                    />
                  </div>

                  <div
                    style={{
                      padding: "0.65rem 0.85rem",
                      backgroundColor: "rgba(30, 19, 13, 0.95)",
                      borderTop: "1px solid var(--border-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#fff" }}>
                      {photo.caption}
                    </span>
                    <span className="badge" style={{ fontSize: "0.62rem" }}>
                      {photo.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="glass-card-gold"
            style={{
              maxWidth: "700px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "var(--radius-lg)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.6)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                color: "#fff",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            <div style={{ height: "360px", padding: "1.5rem" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                sublabel={`${lightboxPhoto.caption} • ${selectedEdition.title}`}
              />
            </div>

            <div style={{ padding: "1.5rem", background: "rgba(30, 19, 13, 0.98)" }}>
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                {lightboxPhoto.tag}
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "0.25rem", fontWeight: 700 }}>
                {lightboxPhoto.caption}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem" }}>
                Fotografía correspondiente a {selectedEdition.title}
              </p>
            </div>
          </div>
        </div>
      )}

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
          🌙 Mercado de Brujas — Plataforma Cultural de Ferias Pop-Up
        </p>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          Comunidad, Misticismo & Arte Independiente • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
