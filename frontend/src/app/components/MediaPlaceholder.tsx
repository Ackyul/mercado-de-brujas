"use client";

import React, { useState } from "react";

interface MediaPlaceholderProps {
  type?: "image" | "video" | "flyer" | "oval";
  label?: string;
  sublabel?: string;
  aspectRatio?: string; // e.g. '16/9', '4/5', '1/1', '21/9'
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  showControls?: boolean;
}

export default function MediaPlaceholder({
  type = "image",
  label = "Espacio para Imagen",
  sublabel = "Haz clic para cargar tu archivo de medios",
  aspectRatio,
  height,
  className = "",
  style = {},
  showControls = true,
}: MediaPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const getIcon = () => {
    switch (type) {
      case "video":
        return "🎬";
      case "flyer":
        return "📜";
      case "oval":
        return "🪞";
      default:
        return "🖼️";
    }
  };

  return (
    <div
      className={`media-placeholder ${className}`}
      style={{
        width: "100%",
        height: height || "100%",
        minHeight: height ? undefined : "200px",
        aspectRatio: aspectRatio || undefined,
        backgroundColor: "rgba(45, 50, 36, 0.75)",
        border: "2px dashed rgba(214, 204, 186, 0.4)",
        borderRadius: type === "oval" ? "50%" : "var(--radius-md)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(242, 237, 228, 0.8)";
        e.currentTarget.style.backgroundColor = "rgba(55, 61, 44, 0.85)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(214, 204, 186, 0.4)";
        e.currentTarget.style.backgroundColor = "rgba(45, 50, 36, 0.75)";
      }}
    >
      {/* Background aesthetic line grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(242, 237, 228, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(242, 237, 228, 0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Central content badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "0.5rem",
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: "2.2rem", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}>
          {getIcon()}
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "var(--text-main)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        {sublabel && (
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontStyle: "italic",
              maxWidth: "280px",
            }}
          >
            {sublabel}
          </span>
        )}
      </div>

      {/* Mock Video Controls Overlay */}
      {type === "video" && showControls && (
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            display: "flex",
            gap: "0.5rem",
            zIndex: 3,
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            style={{
              backgroundColor: "rgba(30, 34, 24, 0.85)",
              border: "1px solid rgba(226, 216, 199, 0.4)",
              color: "#f2ede4",
              borderRadius: "4px",
              padding: "0.3rem 0.6rem",
              fontSize: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            {isPlaying ? "⏸ Pausa" : "▶ Reproducir"}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            style={{
              backgroundColor: "rgba(30, 34, 24, 0.85)",
              border: "1px solid rgba(226, 216, 199, 0.4)",
              color: "#f2ede4",
              borderRadius: "4px",
              padding: "0.3rem 0.6rem",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            {isMuted ? "🔇 Silencio" : "🔊 Audio"}
          </button>
        </div>
      )}
    </div>
  );
}
