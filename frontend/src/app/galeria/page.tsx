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
      allPhotos.push({
        ...photo,
        editionTitle: ed.title,
        editionId: ed.id,
      });
    });
  });

  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [lightboxPhoto, setLightboxPhoto] = useState<(EditionPhoto & { editionTitle: string }) | null>(null);

  const filterTags = ["Todos", "Alquimia", "Artesanías", "Cristales", "Tarot", "Botanica", "Arte"];

  const filteredPhotos = allPhotos.filter((p) => {
    if (activeFilter === "Todos") return true;
    return p.tag.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <Header />

      {/* Main Container */}
      <section style={{ padding: "4rem 2rem 5rem", maxWidth: "1240px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>
            ✦ Memorias Fotográficas ✦
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 800, color: "var(--text-main)" }}>
            Recopilación Fotográfica
          </h1>
          <p className="text-muted" style={{ maxWidth: "680px", margin: "0.75rem auto 0", fontSize: "1.05rem" }}>
            Una mirada a los momentos capturados a lo largo de las distintas ediciones de Mercado de Brujas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={activeFilter === tag ? "btn-primary" : "btn-secondary"}
              style={{
                padding: "0.45rem 1.1rem",
                fontSize: "0.85rem",
                borderRadius: "999px",
                fontWeight: 600,
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Photo Grid with (Imagen) Placeholders */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
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
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flexGrow: 1, position: "relative" }}>
                <ImagePlaceholder
                  height="100%"
                  label="(Imagen)"
                  sublabel={photo.caption}
                />
              </div>

              {/* Info Bar */}
              <div
                style={{
                  padding: "0.85rem 1.1rem",
                  backgroundColor: "rgba(30, 19, 13, 0.95)",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", display: "block" }}>
                    {photo.caption}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--accent-glow)" }}>
                    {photo.editionTitle}
                  </span>
                </div>
                <span className="badge" style={{ fontSize: "0.68rem" }}>
                  {photo.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

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
                sublabel={`${lightboxPhoto.caption} • ${lightboxPhoto.editionTitle}`}
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
                Fotografía de la recopilación de {lightboxPhoto.editionTitle}
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
          🌙 Mercado de Brujas — Recopilación Fotográfica
        </p>
        <p className="text-muted" style={{ fontSize: "0.85rem" }}>
          Plataforma Cultural de Ferias Pop-Up • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
