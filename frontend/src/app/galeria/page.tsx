"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { EDITIONS_DATA, EditionPhoto } from "../data/editionsData";

type PhotoWithEdition = EditionPhoto & { editionTitle: string; editionId: string };

function EditionGallerySlider({
  edition,
  onPhotoClick,
}: {
  edition: any;
  onPhotoClick: (photo: PhotoWithEdition) => void;
}) {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper" style={{ position: "relative" }}>
      {/* PC & Mobile Navigation Arrows */}
      <button
        onClick={scrollLeft}
        className="carousel-arrow-btn carousel-arrow-left"
        aria-label="Anterior"
        title="Ver fotos anteriores"
      >
        ‹
      </button>

      <button
        onClick={scrollRight}
        className="carousel-arrow-btn carousel-arrow-right"
        aria-label="Siguiente"
        title="Ver más fotos"
      >
        ›
      </button>

      {/* Horizontal scroll slider (7 photos + 8th arrow card) */}
      <div
        ref={sliderRef}
        className="ediciones-gallery-slider"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: "0.85rem",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* First 7 photos */}
        {edition.gallery.slice(0, 7).map((photo: any) => {
          const photoWithEdition: PhotoWithEdition = {
            ...photo,
            editionTitle: edition.title,
            editionId: edition.id,
          };
          return (
            <div
              key={photo.id}
              className="glass-panel"
              onClick={() => onPhotoClick(photoWithEdition)}
              style={{
                flex: "0 0 auto",
                width: "250px",
                height: "210px",
                scrollSnapAlign: "start",
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

        {/* 8th item: Arrow Card to view all photos of the feria */}
        <Link
          href={`/galeria/${edition.slug}`}
          className="glass-card-gold ver-mas-galeria-card"
          style={{
            flex: "0 0 auto",
            width: "210px",
            height: "210px",
            scrollSnapAlign: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--accent-gold)",
            padding: "1.25rem",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 4px 18px rgba(212, 175, 55, 0.2)",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid var(--accent-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              color: "var(--accent-gold)",
              marginBottom: "0.75rem",
              background: "rgba(212, 175, 55, 0.12)",
            }}
          >
            ➔
          </div>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.92rem",
              color: "var(--accent-gold)",
              fontWeight: 700,
              letterSpacing: "0.03em",
              marginBottom: "0.25rem",
            }}
          >
            Ver todas las fotos
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {edition.title}
          </span>
        </Link>
      </div>
    </div>
  );
}

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
            Explora la galería fotográfica histórica de cada una de nuestras ediciones pop-up celebradas.
          </p>
        </div>

        {/* One section per edition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
          {EDITIONS_DATA.map((edition) => (
            <div key={edition.id}>
              {/* Edition header */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div>
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

                <div style={{ display: "flex", gap: "0.6rem" }}>
                  <Link
                    href={`/ediciones/${edition.slug}`}
                    className="btn-primary"
                    style={{ textDecoration: "none", fontSize: "0.78rem", padding: "0.45rem 0.85rem" }}
                  >
                    ✦ Ver Edición
                  </Link>
                  <Link
                    href={`/galeria/${edition.slug}`}
                    className="btn-secondary"
                    style={{ textDecoration: "none", fontSize: "0.78rem", padding: "0.45rem 0.85rem" }}
                  >
                    📸 Ver Galería
                  </Link>
                </div>
              </div>

              {/* Slider with arrow buttons for PC & Mobile */}
              <EditionGallerySlider
                edition={edition}
                onPhotoClick={setLightboxPhoto}
              />
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
