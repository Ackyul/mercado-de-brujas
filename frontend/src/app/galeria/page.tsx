"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, EditionPhoto } from "../data/editionsData";

type PhotoWithEdition = EditionPhoto & { editionTitle: string; editionId: string };

export default function GaleriaPage() {
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoWithEdition | null>(null);

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
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            style={{ maxWidth: "580px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* One section per edition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
          {EDITIONS_DATA.map((edition) => (
            <div key={edition.id}>
              {/* Edition header */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                      letterSpacing: "0.05em",
                      color: "var(--text-main)",
                    }}
                  >
                    {edition.title}
                  </h2>
                  <span className={edition.status === "Próxima" ? "badge badge-purple" : "badge badge-gold"}>
                    {edition.status}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginTop: "0.35rem",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "0.06em",
                  }}
                >
                  📅 {edition.date} &nbsp;·&nbsp; 📍 {edition.location}
                </p>
              </div>

              {/* Photos grid */}
              {edition.gallery.length > 0 ? (
                <div
                  className="photo-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "1.1rem",
                  }}
                >
                  {edition.gallery.map((photo) => {
                    const photoWithEdition: PhotoWithEdition = {
                      ...photo,
                      editionTitle: edition.title,
                      editionId: edition.id,
                    };
                    return (
                      <div
                        key={photo.id}
                        className="glass-panel"
                        onClick={() => setLightboxPhoto(photoWithEdition)}
                        style={{
                          height: "240px",
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
                    );
                  })}
                </div>
              ) : (
                <div
                  className="glass-panel"
                  style={{
                    padding: "2.5rem",
                    textAlign: "center",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-muted)",
                    borderStyle: "dashed",
                  }}
                >
                  <span style={{ fontSize: "1.8rem", display: "block", marginBottom: "0.5rem", opacity: 0.4 }}>🔮</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.85rem", letterSpacing: "0.06em", opacity: 0.6 }}>
                    Fotografías próximamente
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
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
              <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                {lightboxPhoto.tag}
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
                {lightboxPhoto.caption}
              </h3>
              <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                {lightboxPhoto.editionTitle}
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
