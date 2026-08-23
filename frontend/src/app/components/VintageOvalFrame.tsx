"use client";

import React from "react";

interface VintageOvalFrameProps {
  imageSrc?: string;
  videoSrc?: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export default function VintageOvalFrame({
  imageSrc = "",
  videoSrc,
  alt = "Mercado de Brujas Edición Presencial",
  title,
  subtitle,
}: VintageOvalFrameProps) {
  // Exact frame PNG asset extracted from magicmarketpopup.com
  const FRAME_PNG_URL =
    "https://static.wixstatic.com/media/bf0cab_e90ad6e663ae45bda9d2c57dc700384a~mv2.png";

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "480px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ── Outer Frame Container ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "527 / 658",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner Media Content Container (Clipped Oval Behind Frame) */}
        <div
          style={{
            position: "absolute",
            width: "56.5%",
            height: "68%",
            top: "16%",
            left: "21.75%",
            borderRadius: "50% / 50%",
            overflow: "hidden",
            boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)",
            zIndex: 1,
            backgroundColor: "#090710",
          }}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt={alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1) contrast(1.02)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(18, 14, 28, 0.95)",
                border: "2px dashed rgba(192, 132, 252, 0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🪞</span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.8rem",
                  color: "#c084fc",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                [Espacio para Marco Ovalado]
              </span>
            </div>
          )}

          {/* Inner Vignette Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 55%, rgba(6,5,10,0.7) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── Exact Original Victorian Oval Mirror Frame PNG (Exact Button Purple #a855f7) ── */}
        <img
          src={FRAME_PNG_URL}
          alt="Marco Ovalado Victoriano Morado"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            zIndex: 2,
            filter: "sepia(1) hue-rotate(252deg) saturate(5) brightness(0.8) contrast(1.1)",
          }}
        />
      </div>

      {/* Frame Caption / Title */}
      {(title || subtitle) && (
        <div style={{ textAlign: "center", marginTop: "1rem", zIndex: 3 }}>
          {title && (
            <h3
              style={{
                fontSize: "clamp(1.2rem, 2.8vw, 1.7rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.06em",
                marginBottom: "0.2rem",
              }}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "var(--font-serif)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
