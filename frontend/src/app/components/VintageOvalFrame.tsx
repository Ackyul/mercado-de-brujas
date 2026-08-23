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
  imageSrc = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
  videoSrc,
  alt = "Mercado de Brujas Edición Presencial",
  title,
  subtitle,
}: VintageOvalFrameProps) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "680px",
        width: "100%",
        margin: "0 auto",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ── Background Soft Glow ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          height: "85%",
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.22) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Frame Wrapper ── */}
      <div
        className="vintage-oval-frame-container"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          aspectRatio: "3 / 4.2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* SVG Ornamental Frame Decoration Overlay */}
        <svg
          viewBox="0 0 400 560"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 10,
            filter: "drop-shadow(0 6px 22px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.35))",
          }}
        >
          <defs>
            {/* Gradient for the frame border */}
            <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e4e4e7" />
              <stop offset="65%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Outer Ornamental Scrolls - Top Crest */}
          <g stroke="url(#frameGradient)" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Top crown flourish */}
            <path d="M 200 18 C 180 5, 160 15, 165 30 C 170 45, 195 45, 200 25 C 205 45, 230 45, 235 30 C 240 15, 220 5, 200 18 Z" fill="rgba(255,255,255,0.08)" />
            <path d="M 200 8 C 170 -5, 140 25, 160 48 C 175 62, 192 50, 200 38 C 208 50, 225 62, 240 48 C 260 25, 230 -5, 200 8 Z" />
            <circle cx="200" cy="12" r="3" fill="#ffffff" />

            {/* Top Left Leaf Swirls */}
            <path d="M 160 35 C 130 25, 90 40, 85 70 C 80 100, 110 110, 130 90 C 145 75, 140 50, 120 48" />
            <path d="M 125 55 C 95 50, 65 80, 75 110" />

            {/* Top Right Leaf Swirls */}
            <path d="M 240 35 C 270 25, 310 40, 315 70 C 320 100, 290 110, 270 90 C 255 75, 260 50, 280 48" />
            <path d="M 275 55 C 305 50, 335 80, 325 110" />

            {/* Bottom Crest flourish */}
            <path d="M 200 542 C 180 555, 160 545, 165 530 C 170 515, 195 515, 200 535 C 205 515, 230 515, 235 530 C 240 545, 220 555, 200 542 Z" fill="rgba(255,255,255,0.08)" />
            <path d="M 200 552 C 170 565, 140 535, 160 512 C 175 498, 192 510, 200 522 C 208 510, 225 498, 240 512 C 260 535, 230 565, 200 552 Z" />
            <circle cx="200" cy="548" r="3" fill="#ffffff" />

            {/* Bottom Left Leaf Swirls */}
            <path d="M 160 525 C 130 535, 90 520, 85 490 C 80 460, 110 450, 130 470 C 145 485, 140 510, 120 512" />
            <path d="M 125 505 C 95 510, 65 480, 75 450" />

            {/* Bottom Right Leaf Swirls */}
            <path d="M 240 525 C 270 535, 310 520, 315 490 C 320 460, 290 450, 270 470 C 255 485, 260 510, 280 512" />
            <path d="M 275 505 C 305 510, 335 480, 325 450" />

            {/* Side Accents Left */}
            <path d="M 45 230 C 25 260, 25 300, 45 330 C 60 300, 60 260, 45 230 Z" fill="rgba(200, 132, 252, 0.15)" />
            <path d="M 35 210 C 15 250, 15 310, 35 350" />

            {/* Side Accents Right */}
            <path d="M 355 230 C 375 260, 375 300, 355 330 C 340 300, 340 260, 355 230 Z" fill="rgba(200, 132, 252, 0.15)" />
            <path d="M 365 210 C 385 250, 385 310, 365 350" />
          </g>

          {/* Main Oval Frame Rim */}
          <ellipse
            cx="200"
            cy="280"
            rx="142"
            ry="202"
            fill="none"
            stroke="url(#frameGradient)"
            strokeWidth="5"
          />
          <ellipse
            cx="200"
            cy="280"
            rx="148"
            ry="208"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <ellipse
            cx="200"
            cy="280"
            rx="135"
            ry="195"
            fill="none"
            stroke="rgba(168, 85, 247, 0.6)"
            strokeWidth="2"
          />

          {/* Small Stars / Sparkles around frame */}
          <g fill="#ffffff" opacity="0.9">
            <path d="M 200 40 L 202 45 L 207 47 L 202 49 L 200 54 L 198 49 L 193 47 L 198 45 Z" />
            <path d="M 200 506 L 202 511 L 207 513 L 202 515 L 200 520 L 198 515 L 193 513 L 198 511 Z" />
            <path d="M 52 280 L 54 283 L 57 285 L 54 287 L 52 290 L 50 287 L 47 285 L 50 283 Z" />
            <path d="M 348 280 L 350 283 L 353 285 L 350 287 L 348 290 L 346 287 L 343 285 L 346 283 Z" />
          </g>
        </svg>

        {/* Inner Media Content Container (Clipped to Oval) */}
        <div
          style={{
            position: "absolute",
            width: "68%",
            height: "71%",
            top: "14.5%",
            left: "16%",
            borderRadius: "50% / 50%",
            overflow: "hidden",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.85)",
            zIndex: 5,
            backgroundColor: "#000",
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
                filter: "brightness(0.92) contrast(1.08)",
                transition: "transform 0.6s ease",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(45, 50, 36, 0.9)",
                border: "2px dashed rgba(214, 204, 186, 0.4)",
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
                  fontSize: "0.82rem",
                  color: "#f2ede4",
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
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(45,50,36,0.85) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Frame Caption / Title */}
      {(title || subtitle) && (
        <div style={{ textAlign: "center", marginTop: "1.2rem", zIndex: 2 }}>
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
