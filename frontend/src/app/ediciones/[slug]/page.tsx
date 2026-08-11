"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import { EDITIONS_DATA, Edition, EditionPhoto } from "../../data/editionsData";

export default function DedicatedEditionPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [lightboxPhoto, setLightboxPhoto] = useState<EditionPhoto | null>(null);

  // Find edition by slug or ID
  const currentIdx = EDITIONS_DATA.findIndex((ed) => ed.slug === slug || ed.id === slug);
  const edition: Edition | undefined = EDITIONS_DATA[currentIdx !== -1 ? currentIdx : 0];

  const prevEdition = currentIdx > 0 ? EDITIONS_DATA[currentIdx - 1] : null;
  const nextEdition = currentIdx < EDITIONS_DATA.length - 1 ? EDITIONS_DATA[currentIdx + 1] : null;

  if (!edition) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <div style={{ textAlign: "center", padding: "6rem 1rem", color: "var(--text-main)" }}>
          <h1>🔮 Edición no encontrada</h1>
          <p className="text-muted" style={{ margin: "1rem 0 2rem" }}>
            La edición solicitada no existe en nuestro catálogo histórico.
          </p>
          <Link href="/ediciones" className="btn-primary">
            ← Volver a Ediciones
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

      {/* Hero section */}
      <section
        style={{
          padding: "3.5rem 1.5rem 2rem",
          maxWidth: "1000px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            href="/ediciones"
            style={{
              color: "var(--accent-gold)",
              textDecoration: "none",
              fontFamily: "var(--font-serif)",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            ← Volver al Catálogo de Ediciones
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <span className="badge badge-gold">✦ Edición #{edition.number > 0 ? edition.number : "Especial"} ✦</span>
            <span className={edition.status === "Próxima" ? "badge badge-purple" : "badge"}>
              {edition.status}
            </span>
          </div>

          <h1
            className="text-gradient"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.04em",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}
          >
            {edition.title}
          </h1>

          <p style={{ fontSize: "1.05rem", color: "var(--accent-gold)", fontStyle: "italic" }}>
            📅 {edition.date} · 📍 {edition.location}
          </p>
        </div>

        {/* Featured Cover Card */}
        <div
          className="glass-panel ornate-frame"
          style={{
            position: "relative",
            height: "clamp(220px, 35vh, 360px)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            marginBottom: "2.5rem",
          }}
        >
          <ImagePlaceholder height="100%" label="(Portada de Edición)" />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(180deg, transparent 0%, rgba(14, 10, 8, 0.96) 100%)",
              padding: "1.5rem",
              display: "flex",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            <span className="badge badge-gold">{edition.status}</span>
            <span className="badge">{edition.attendeesCount}</span>
            <span className="badge badge-purple">{edition.exhibitorsCount}</span>
          </div>
        </div>
      </section>

      {/* Content layout */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto 5rem",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        {/* Parchment quick info grid */}
        <div
          className="parchment-panel quick-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            padding: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--accent-gold)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                display: "block",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "0.35rem",
              }}
            >
              📅 Fecha y Horario
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-main)", display: "block" }}>
              {edition.date}
            </span>
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{edition.time}</span>
          </div>

          <div>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--accent-gold)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                display: "block",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "0.35rem",
              }}
            >
              📍 Ubicación & Sede
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-main)", display: "block" }}>
              {edition.location}
            </span>
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{edition.city}</span>
          </div>

          <div>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--accent-gold)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                display: "block",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "0.35rem",
              }}
            >
              🎪 Comunidad & Alcance
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-main)", display: "block" }}>
              {edition.attendeesCount}
            </span>
            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{edition.exhibitorsCount}</span>
          </div>
        </div>

        {/* Full story */}
        <section className="glass-panel ornate-frame" style={{ padding: "2.5rem", borderRadius: "var(--radius-md)", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.4rem",
              letterSpacing: "0.04em",
              color: "var(--accent-gold)",
              marginBottom: "1rem",
            }}
          >
            Relato & Memoria Histórica de {edition.title}
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "var(--text-main)", marginBottom: "1.5rem" }}>
            {edition.fullStory}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {edition.highlights.map((item, idx) => (
              <span key={idx} className="chip">✦ {item}</span>
            ))}
          </div>
        </section>

        {/* Gallery section */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                letterSpacing: "0.04em",
                color: "var(--accent-gold)",
              }}
            >
              📸 Galería Fotográfica de esta Edición ({edition.gallery.length})
            </h2>
            <Link
              href={`/galeria/${edition.slug}`}
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              Ver Galería Completa →
            </Link>
          </div>

          <div
            className="photo-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {edition.gallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="glass-panel"
                style={{
                  height: "200px",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "scale(1)")}
              >
                <div style={{ flexGrow: 1 }}>
                  <ImagePlaceholder height="100%" label="(Imagen)" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next edition navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            gap: "1rem",
          }}
        >
          {prevEdition ? (
            <Link
              href={`/ediciones/${prevEdition.slug}`}
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.85rem" }}
            >
              ← {prevEdition.title}
            </Link>
          ) : (
            <div />
          )}

          {nextEdition ? (
            <Link
              href={`/ediciones/${nextEdition.slug}`}
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.85rem" }}
            >
              {nextEdition.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

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
              <ImagePlaceholder height="100%" label="(Imagen)" />
            </div>

            <div
              style={{
                padding: "1.5rem",
                background: "rgba(14, 10, 8, 0.98)",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>{lightboxPhoto.tag || edition.title}</span>
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
                {lightboxPhoto.caption || edition.title}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.82rem" }}>
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
          🌙 Mercado de Brujas — {edition.title}
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          Comunidad, Misticismo & Arte Independiente · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
