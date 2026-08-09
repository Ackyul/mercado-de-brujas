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
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "rgba(224, 169, 109, 0.12)",
          border: "1px solid rgba(224, 169, 109, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          marginBottom: "0.25rem",
        }}
      >
        🖼️
      </div>
      <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent-gold)", letterSpacing: "0.04em" }}>
        {label}
      </span>
      {sublabel && (
        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500, padding: "0 1rem", textAlign: "center" }}>
          {sublabel}
        </span>
      )}
    </div>
  );
}
