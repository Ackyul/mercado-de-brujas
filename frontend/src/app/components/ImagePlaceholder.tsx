"use client";

import React from "react";

interface ImagePlaceholderProps {
  height?: string;
  label?: string;
  sublabel?: string;
  className?: string;
  onClick?: () => void;
}

export default function ImagePlaceholder({
  height = "100%",
  label = "(Imagen)",
  sublabel,
  className = "",
  onClick,
}: ImagePlaceholderProps) {
  return (
    <div
      onClick={onClick}
      className={`image-placeholder-box ${className}`}
      style={{
        height: height,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {/* Sigil-like SVG ornament instead of plain emoji */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.45, marginBottom: "0.25rem" }}
      >
        <circle cx="18" cy="18" r="17" stroke="rgba(201, 164, 90, 0.6)" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="18" cy="18" r="10" stroke="rgba(201, 164, 90, 0.4)" strokeWidth="0.6" />
        <line x1="18" y1="1" x2="18" y2="35" stroke="rgba(201, 164, 90, 0.25)" strokeWidth="0.6" />
        <line x1="1" y1="18" x2="35" y2="18" stroke="rgba(201, 164, 90, 0.25)" strokeWidth="0.6" />
        <circle cx="18" cy="18" r="2.5" fill="rgba(201, 164, 90, 0.5)" />
      </svg>

      <span
        style={{
          fontSize: "0.88rem",
          fontWeight: 700,
          fontFamily: "var(--font-serif)",
          color: "rgba(201, 164, 90, 0.7)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>

      {sublabel && (
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            fontWeight: 400,
            fontFamily: "var(--font-sans)",
            padding: "0 1rem",
            textAlign: "center",
            letterSpacing: "0.04em",
            lineHeight: 1.4,
            opacity: 0.75,
          }}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
}
