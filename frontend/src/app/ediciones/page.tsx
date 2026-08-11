"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, Edition, EditionPhoto } from "../data/editionsData";

export default function EdicionesPage() {
  const [selectedEdition, setSelectedEdition] = useState<Edition>(EDITIONS_DATA[0]);
  const [lightboxPhoto, setLightboxPhoto] = useState<EditionPhoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sync state with URL search params on mount & window navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const slugParam = params.get("slug");
      if (slugParam) {
        const ed = EDITIONS_DATA.find((item) => item.slug === slugParam);
        if (ed) setSelectedEdition(ed);
      }
    }
  }, []);

  const handleSelectEdition = (ed: Edition) => {
    setSelectedEdition(ed);
    setIsModalOpen(false);
    setSearchQuery("");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("slug", ed.slug);
      window.history.pushState({}, "", url.toString());
    }
  };

  const filteredEditions = EDITIONS_DATA.filter((ed) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      ed.title.toLowerCase().includes(q) ||
      ed.date.toLowerCase().includes(q) ||
      ed.location.toLowerCase().includes(q) ||
      ed.city.toLowerCase().includes(q) ||
      ed.status.toLowerCase().includes(q) ||
      ed.number.toString().includes(q)
    );
  });

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
        className="ediciones-hero"
        style={{
          padding: "4.5rem 2rem 2rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <span className="badge badge-gold hero-badge" style={{ marginBottom: "0.75rem" }}>
          ✦ Catálogo de Ediciones Pop-Up ✦
        </span>
        <h1
          className="text-gradient"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 3.4rem)",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          Ediciones de Mercado de Brujas
        </h1>
        <div className="ornament-divider" style={{ marginBottom: "1rem" }}>
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
        <p className="hero-subtext text-muted" style={{ fontSize: "0.95rem", maxWidth: "660px", margin: "0 auto", lineHeight: 1.6 }}>
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
        {/* Left / Top: Active edition display box & Cambiar edición button */}
        <div className="ediciones-sidebar" style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {/* Active Edition Display Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="glass-card-gold active-edition-card"
            style={{
              padding: "1.25rem 1.4rem",
              cursor: "pointer",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--accent-gold)",
              boxShadow: "0 4px 20px rgba(212, 175, 55, 0.2)",
              transition: "all 0.25s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span className="badge badge-gold" style={{ fontSize: "0.65rem" }}>
                ✦ Edición Mostrada
              </span>
              <span className="badge" style={{ fontSize: "0.65rem" }}>
                {selectedEdition.status}
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                color: "var(--text-main)",
                letterSpacing: "0.03em",
                marginBottom: "0.4rem",
              }}
            >
              {selectedEdition.title}
            </h2>

            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
              📅 {selectedEdition.date}
            </p>

            <span style={{ fontSize: "0.78rem", color: "var(--accent-gold)", fontStyle: "italic", opacity: 0.9 }}>
              📍 {selectedEdition.location}
            </span>
          </div>

          {/* Button: Cambiar Edición */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-secondary btn-cambiar-edicion"
            style={{
              width: "100%",
              padding: "0.85rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
              cursor: "pointer",
              borderRadius: "var(--radius-sm)",
            }}
          >
            🔍 Cambiar Edición
          </button>
        </div>

        {/* Right: edition details */}
        <div
          className="glass-panel ornate-frame ediciones-detail-panel"
          style={{ padding: "2.25rem", borderRadius: "var(--radius-md)" }}
        >
          {/* Cover image */}
          <div
            className="edition-cover-wrapper"
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
              className="edition-cover-overlay"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(180deg, transparent 0%, rgba(14, 10, 8, 0.97) 100%)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <div className="edition-cover-badges" style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 0.5rem", marginBottom: "0.5rem" }}>
                <span className="badge badge-gold">{selectedEdition.status}</span>
                <span className="badge">{selectedEdition.attendeesCount}</span>
                <span className="badge badge-purple">{selectedEdition.exhibitorsCount}</span>
              </div>
              <h2
                className="edition-cover-title"
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
              {selectedEdition.highlights.map((item, idx) => (
                <span key={idx} className="chip">✦ {item}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href={`/ediciones/${selectedEdition.slug}`}
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.4rem",
                  fontSize: "0.9rem",
                }}
              >
                ✦ Ver más sobre la edición →
              </Link>

              <Link
                href={`/galeria/${selectedEdition.slug}`}
                className="btn-secondary"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1.4rem",
                  fontSize: "0.9rem",
                }}
              >
                📸 Ver Galería de Fotos
              </Link>
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

      {/* Modal Overlay for Edition Selection with Live Search */}
      {isModalOpen && (
        <div
          className="ediciones-modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            backgroundColor: "rgba(6, 4, 3, 0.92)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25rem",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="ediciones-modal-content glass-panel ornate-frame"
            style={{
              maxWidth: "720px",
              width: "100%",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              borderRadius: "var(--radius-md)",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "rgba(18, 12, 9, 0.98)",
              border: "1px solid var(--border-gold)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem 1rem",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span className="badge badge-gold" style={{ fontSize: "0.62rem", marginBottom: "0.25rem" }}>
                  ✦ Aquelarre Pop-Up ✦
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    color: "var(--text-main)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Seleccionar Edición
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  color: "var(--text-main)",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ padding: "1rem 1.5rem 0.5rem" }}>
              <input
                type="text"
                placeholder="🔍 Buscar por número, fecha, lugar o estado (ej: 41, Diciembre, Casona)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ediciones-search-input"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-gold)",
                  background: "rgba(10, 6, 4, 0.9)",
                  color: "var(--text-main)",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "var(--font-sans)",
                }}
              />
            </div>

            {/* Editions List / Table */}
            <div
              style={{
                padding: "0.75rem 1.5rem 1.5rem",
                overflowY: "auto",
                flexGrow: 1,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {filteredEditions.length > 0 ? (
                  filteredEditions.map((ed) => {
                    const isSelected = selectedEdition.id === ed.id;
                    return (
                      <div
                        key={ed.id}
                        onClick={() => handleSelectEdition(ed)}
                        className={`modal-edition-item ${isSelected ? "glass-card-gold" : "glass-panel"}`}
                        style={{
                          padding: "1rem 1.25rem",
                          borderRadius: "var(--radius-sm)",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderLeft: `4px solid ${isSelected ? "var(--accent-gold)" : "transparent"}`,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{ flexGrow: 1, paddingRight: "1rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                            <span className="badge badge-gold" style={{ fontSize: "0.6rem" }}>
                              {ed.number > 0 ? `#${ed.number}` : "Especial"}
                            </span>
                            <span className="badge" style={{ fontSize: "0.6rem" }}>
                              {ed.status}
                            </span>
                          </div>
                          <h3
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "1.05rem",
                              color: isSelected ? "var(--accent-gold)" : "var(--text-main)",
                              margin: "0.2rem 0",
                            }}
                          >
                            {ed.title}
                          </h3>
                          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0 }}>
                            📅 {ed.date} · 📍 {ed.location}
                          </p>
                        </div>

                        <div>
                          <span
                            className={isSelected ? "btn-primary" : "btn-secondary"}
                            style={{
                              fontSize: "0.75rem",
                              padding: "0.4rem 0.85rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {isSelected ? "Activa ✦" : "Ver Edición →"}
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ textAlign: "center", padding: "2.5rem 1rem", color: "var(--text-muted)" }}>
                    <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>🔮 No se encontraron ediciones</p>
                    <p style={{ fontSize: "0.85rem" }}>Intenta buscar con otro término de búsqueda.</p>
                  </div>
                )}
              </div>
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
