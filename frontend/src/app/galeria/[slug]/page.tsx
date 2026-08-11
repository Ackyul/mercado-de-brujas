"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { Edition, EditionPhoto } from "../../data/editionsData";
import { useEditions } from "../../context/EditionsContext";

export default function DedicatedGalleryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { editions } = useEditions();

  const [lightboxPhoto, setLightboxPhoto] = useState<EditionPhoto | null>(null);

  const currentIdx = editions.findIndex((ed) => ed.slug === slug || ed.id === slug);
  const edition: Edition | undefined = editions[currentIdx !== -1 ? currentIdx : 0];

  if (!edition) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <div style={{ textAlign: "center", padding: "6rem 1rem", color: "var(--text-main)" }}>
          <h1>🔮 Galería no encontrada</h1>
          <p className="text-muted" style={{ margin: "1rem 0 2rem" }}>
            La galería solicitada no existe.
          </p>
          <Link href="/galeria" className="btn-primary">
            ← Volver a la Galería General
          </Link>
        </div>
      </div>
    );
  }

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

      <section style={{ padding: "3.5rem 1.5rem 6rem", maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {/* Breadcrumbs */}
        <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
          <Link
            href="/galeria"
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
            }}
          >
            ← Volver a la Galería General
          </Link>
          <span style={{ color: "var(--border-subtle)" }}>|</span>
          <Link
            href={`/ediciones/${edition.slug}`}
            style={{
              color: "var(--accent-gold)",
              textDecoration: "none",
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            ✦ Ver Detalles de {edition.title} →
          </Link>
        </div>

        {/* Page title */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge badge-gold" style={{ marginBottom: "0.75rem" }}>
            ✦ Galería de la {edition.title} ✦
          </span>
          <h1
            className="text-gradient"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
            }}
          >
            Recopilación Fotográfica
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--accent-gold)", fontStyle: "italic" }}>
            📅 {edition.date} · 📍 {edition.location} ({edition.city})
          </p>
        </div>

        {/* Photo grid */}
        {edition.gallery.length > 0 ? (
          <div
            className="photo-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {edition.gallery.map((photo) => (
              <div
                key={photo.id}
                className="glass-panel"
                onClick={() => setLightboxPhoto(photo)}
                style={{
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.025)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <ImagePlaceholder height="100%" label="(Imagen)" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="glass-panel"
            style={{
              padding: "3rem",
              textAlign: "center",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-muted)",
              borderStyle: "dashed",
            }}
          >
            <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem", opacity: 0.4 }}>🔮</span>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9rem", letterSpacing: "0.06em" }}>
              Fotografías en alta resolución próximamente para esta edición.
            </p>
          </div>
        )}
      </section>

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

            <div className="lightbox-img-wrap" style={{ height: "340px", padding: "1.5rem" }}>
              <ImagePlaceholder height="100%" label="(Imagen)" />
            </div>

            <div
              style={{
                padding: "1.5rem",
                background: "rgba(14, 10, 8, 0.98)",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                {lightboxPhoto.tag || edition.title}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.05rem",
                  letterSpacing: "0.04em",
                  color: "var(--text-main)",
                  marginBottom: "0.25rem",
                  marginTop: "0.5rem",
                }}
              >
                {lightboxPhoto.caption || edition.title}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                Fotografía de {edition.title}
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
          🌙 Mercado de Brujas — Galería {edition.title}
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          Plataforma Cultural de Ferias Pop-Up · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
