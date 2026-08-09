"use client";

import React, { useState } from "react";
import { EDITIONS_DATA, EditionPhoto } from "../data/editionsData";

export default function PhotoGallery() {
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
    <section id="galeria" style={{ padding: "5rem 2rem", maxWidth: "1240px", margin: "0 auto", fontFamily: "var(--font-sans)" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="badge badge-gold">✦ Memorias & Momentos ✦</span>
        <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-sans)", fontWeight: 800, marginTop: "0.5rem" }}>
          Recopilación Fotográfica de las Ediciones
        </h2>
        <p className="text-muted" style={{ maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "1.05rem" }}>
          Una mirada retrospectiva a la magia capturada en nuestras ferias presenciales: altares, artesanos en acción, piezas sagradas y encuentros inolvidables.
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

      {/* Photo Grid */}
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
            }}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(11, 7, 19, 0.9) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                <span className="badge" style={{ fontSize: "0.7rem", backgroundColor: "rgba(157, 78, 221, 0.3)" }}>
                  {photo.tag}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", fontWeight: 600 }}>
                  🔍 Ampliar
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                {photo.caption}
              </p>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-glow)" }}>
                {photo.editionTitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
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
              maxWidth: "800px",
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

            <div style={{ height: "450px", backgroundColor: "#000", position: "relative" }}>
              <img
                src={lightboxPhoto.url}
                alt={lightboxPhoto.caption}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div style={{ padding: "1.5rem", background: "rgba(11, 7, 19, 0.95)" }}>
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                {lightboxPhoto.tag}
              </span>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-main)", marginBottom: "0.25rem", fontWeight: 700 }}>
                {lightboxPhoto.caption}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.85rem" }}>
                Fotografía capturada en {lightboxPhoto.editionTitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
