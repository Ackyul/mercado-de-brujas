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
      {/* ── Background Soft Purple Glow Aura ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "90%",
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.28) 0%, rgba(107, 33, 168, 0.12) 50%, transparent 75%)",
          filter: "blur(45px)",
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
          maxWidth: "460px",
          aspectRatio: "3 / 4.3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* SVG Ornamental Frame Decoration Overlay */}
        <svg
          viewBox="0 0 400 580"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 10,
            filter: "drop-shadow(0 8px 24px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.5))",
          }}
        >
          <defs>
            {/* Glowing gradient for frame border: White -> Light Purple -> Deep Amethyst -> White */}
            <linearGradient id="purpleFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#e9d5ff" />
              <stop offset="60%" stopColor="#c084fc" />
              <stop offset="85%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            <filter id="glowEffect">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Top Crown Filigree & Flourishes ── */}
          <g stroke="url(#purpleFrameGrad)" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Center Crown Arch */}
            <path d="M 200 28 C 180 10, 150 15, 160 38 C 170 58, 195 52, 200 42 C 205 52, 230 58, 240 38 C 250 15, 220 10, 200 28 Z" fill="rgba(168, 85, 247, 0.12)" />
            <path d="M 200 15 C 165 -2, 130 30, 155 54 C 172 70, 192 56, 200 44 C 208 56, 228 70, 245 54 C 270 30, 235 -2, 200 15 Z" />
            <circle cx="200" cy="18" r="3.5" fill="#ffffff" filter="url(#glowEffect)" />

            {/* Upper Left Filigree Arcs */}
            <path d="M 155 42 C 120 22, 72 40, 78 82 C 84 120, 118 115, 132 92 C 142 72, 132 52, 112 52" />
            <path d="M 120 60 C 88 52, 55 85, 68 118" />

            {/* Upper Right Filigree Arcs */}
            <path d="M 245 42 C 280 22, 328 40, 322 82 C 316 120, 282 115, 268 92 C 258 72, 268 52, 288 52" />
            <path d="M 280 60 C 312 52, 345 85, 332 118" />

            {/* ── Left Side Ear Flourishes ── */}
            <path d="M 50 235 C 18 265, 18 325, 50 355 C 70 325, 70 265, 50 235 Z" fill="rgba(168, 85, 247, 0.15)" />
            <path d="M 40 210 C 8 260, 8 330, 40 380" />
            <path d="M 60 255 C 38 275, 38 315, 60 335" />

            {/* ── Right Side Ear Flourishes ── */}
            <path d="M 350 235 C 382 265, 382 325, 350 355 C 330 325, 330 265, 350 235 Z" fill="rgba(168, 85, 247, 0.15)" />
            <path d="M 360 210 C 392 260, 392 330, 360 380" />
            <path d="M 340 255 C 362 275, 362 315, 340 335" />

            {/* ── Bottom Pedestal Crown & Flourishes ── */}
            <path d="M 200 552 C 180 570, 150 565, 160 542 C 170 522, 195 528, 200 538 C 205 528, 230 522, 240 542 C 250 565, 220 570, 200 552 Z" fill="rgba(168, 85, 247, 0.12)" />
            <path d="M 200 565 C 165 582, 130 550, 155 526 C 172 510, 192 524, 200 536 C 208 524, 228 510, 245 526 C 270 550, 235 582, 200 565 Z" />
            <circle cx="200" cy="562" r="3.5" fill="#ffffff" filter="url(#glowEffect)" />

            {/* Lower Left Filigree Arcs */}
            <path d="M 155 538 C 120 558, 72 540, 78 498 C 84 460, 118 465, 132 488 C 142 508, 132 528, 112 528" />
            <path d="M 120 520 C 88 528, 55 495, 68 462" />

            {/* Lower Right Filigree Arcs */}
            <path d="M 245 538 C 280 558, 328 540, 322 498 C 316 460, 282 465, 268 488 C 258 508, 268 528, 288 528" />
            <path d="M 280 520 C 312 528, 345 495, 332 462" />
          </g>

          {/* ── Concentric Oval Rings ── */}
          {/* Ring 1: Outer Solid Oval */}
          <ellipse
            cx="200"
            cy="295"
            rx="144"
            ry="206"
            fill="none"
            stroke="url(#purpleFrameGrad)"
            strokeWidth="5"
          />
          {/* Ring 2: Middle Dashed Accent Ring */}
          <ellipse
            cx="200"
            cy="295"
            rx="150"
            ry="212"
            fill="none"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          {/* Ring 3: Inner Purple Glow Rim */}
          <ellipse
            cx="200"
            cy="295"
            rx="137"
            ry="199"
            fill="none"
            stroke="rgba(192, 132, 252, 0.85)"
            strokeWidth="2.5"
          />

          {/* Sparkles on frame nodes */}
          <g fill="#ffffff" opacity="0.95" filter="url(#glowEffect)">
            <path d="M 200 48 L 202 53 L 207 55 L 202 57 L 200 62 L 198 57 L 193 55 L 198 53 Z" />
            <path d="M 200 532 L 202 537 L 207 539 L 202 541 L 200 546 L 198 541 L 193 539 L 198 537 Z" />
            <path d="M 52 295 L 54 298 L 57 300 L 54 302 L 52 305 L 50 302 L 47 300 L 50 298 Z" />
            <path d="M 348 295 L 350 298 L 353 300 L 350 302 L 348 305 L 346 302 L 343 300 L 346 298 Z" />
          </g>
        </svg>

        {/* Inner Media Content Container (Clipped to Oval) */}
        <div
          style={{
            position: "absolute",
            width: "68%",
            height: "70%",
            top: "15.5%",
            left: "16%",
            borderRadius: "50% / 50%",
            overflow: "hidden",
            boxShadow: "inset 0 0 35px rgba(0,0,0,0.95)",
            zIndex: 5,
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
                filter: "brightness(0.92) contrast(1.08)",
                transition: "transform 0.6s ease",
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
                  fontSize: "0.82rem",
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
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(6,5,10,0.85) 100%)",
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
