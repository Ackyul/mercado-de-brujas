"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, EditionPhoto } from "../data/editionsData";

export default function GaleriaPage() {
  // Aggregate all photos from all editions
  const allPhotos: (EditionPhoto & { editionTitle: string; editionId: string })[] = [];
  EDITIONS_DATA.forEach((ed) => {
    ed.gallery.forEach((photo) => {
      allPhotos.push({ ...photo, editionTitle: ed.title, editionId: ed.id });
    });
  });

  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [lightboxPhoto, setLightboxPhoto] = useState<(EditionPhoto & { editionTitle: string }) | null>(null);

  const filterTags = ["Todos", "Alquimia", "Artesanías", "Cristales", "Tarot", "Botanica", "Arte"];

  const filteredPhotos = allPhotos.filter((p) =>
    activeFilter === "Todos" ? true : p.tag.toLowerCase() === activeFilter.toLowerCase()
  );

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

      <section style={{ padding: "4.5rem 2rem 6rem", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Page header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>
            ✦ Memorias Fotográficas ✦
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
              marginBottom: "0.75rem",
            }}
          >
            Recopilación Fotográfica
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
              Todas las Ediciones
            </span>
          </div>
          <p
            className="text-muted"
            style={{ maxWidth: "620px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Una mirada a los momentos capturados a lo largo de las distintas ediciones de Mercado de Brujas.
          </p>
        </div>

        {/* Filter row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={activeFilter === tag ? "btn-primary" : "btn-secondary"}
              style={{ padding: "0.4rem 1rem", fontSize: "0.72rem", borderRadius: "2px" }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="glass-panel"
              onClick={() => setLightboxPhoto(photo)}
              style={{
                height: "260px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div style={{ flexGrow: 1, position: "relative" }}>
                <ImagePlaceholder height="100%" label="(Imagen)" sublabel={photo.caption} />
              </div>

              {/* Info bar */}
              <div
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(14, 10, 8, 0.97)",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--text-main)",
                      display: "block",
                    }}
                  >
                    {photo.caption}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--accent-gold)",
                      fontFamily: "var(--font-serif)",
                      letterSpacing: "0.04em",
                      opacity: 0.8,
                    }}
                  >
                    {photo.editionTitle}
                  </span>
                </div>
                <span className="badge" style={{ fontSize: "0.62rem" }}>{photo.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 2rem", color: "var(--text-muted)" }}>
            <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>🔮</span>
            <p style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              No se encontraron fotografías para este filtro
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
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
            style={{
              maxWidth: "680px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              borderRadius: "var(--radius-md)",
            }}
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

            <div style={{ height: "340px", padding: "1.5rem" }}>
              <ImagePlaceholder
                height="100%"
                label="(Imagen)"
                sublabel={`${lightboxPhoto.caption} · ${lightboxPhoto.editionTitle}`}
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
                Fotografía de la recopilación de {lightboxPhoto.editionTitle}
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
          🌙 Mercado de Brujas — Recopilación Fotográfica
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          Plataforma Cultural de Ferias Pop-Up · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
