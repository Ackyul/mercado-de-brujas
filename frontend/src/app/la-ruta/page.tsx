"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";

export default function LaRutaPage() {
  const [selectedVenue, setSelectedVenue] = useState<"la" | "oc">("la");

  const venues = {
    la: {
      name: "Heritage Square Museum — Los Angeles",
      address: "3800 Homer St, Los Angeles, CA 90031",
      dates: "10 & 11 de Octubre (5:00 PM - 10:00 PM)",
      desc: "Un fascinante museo al aire libre con casas de arquitectura victoriana preservada. El escenario perfecto para sumergirse en la atmósfera de Mercado de Brujas.",
      parking: "Estacionamiento disponible en las inmediaciones de Homer St y Avenue 43. Se recomienda llegar con anticipación o compartir transporte.",
      transit: "A solo 5 minutos a pie de la estación Heritage Square de la Línea A (Gold Line) del Metro.",
      highlights: ["Atmósfera Victoriana", "Iluminación Nocturna", "Talleres en la Capilla", "Zona Gastronómica"],
    },
    oc: {
      name: "Heritage Museum of OC — Orange County",
      address: "3101 W Santa Ana Blvd, Santa Ana, CA 92704",
      dates: "17 de Octubre (5:00 PM - 10:00 PM)",
      desc: "Rodeado de jardines botánicos, huertos históricos y casas centenarias. Un oasis de paz y magia en el corazón de Orange County.",
      parking: "Estacionamiento en el predio principal del museo con espacios de parqueo accesibles ADA.",
      transit: "Acceso directo por W Santa Ana Blvd con paradas de autobús cercanas a 2 cuadras.",
      highlights: ["Jardines Místicos", "Escenario de Música en Vivo", "Zona de Lecturas al Aire Libre", "Mercado Nocturno"],
    },
  };

  const current = venues[selectedVenue];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-main)",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: "1140px",
          width: "100%",
          margin: "0 auto",
          padding: "3rem 1.5rem 6rem",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        {/* HERO INTRO */}
        <section style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "0.85rem",
              fontFamily: "var(--font-serif)",
              color: "#c084fc",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ✦ MAPA & SEDES MÍSTICAS ✦
          </span>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontFamily: "var(--font-serif)",
              color: "#ffffff",
              letterSpacing: "0.04em",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              textShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
            }}
          >
            La Ruta de Mercado de Brujas
          </h1>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-main)" }}>
            Descubre las sedes históricas donde pop-upea nuestro aquelarre. Consulta cómo llegar, estacionamiento, rutas de transporte y guía de navegación de cada encuentro.
          </p>
        </section>

        {/* VENUE SELECTOR TABS */}
        <section style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setSelectedVenue("la")}
            style={{
              backgroundColor: selectedVenue === "la" ? "var(--accent-purple)" : "rgba(18, 14, 28, 0.9)",
              border: `1px solid ${selectedVenue === "la" ? "#c084fc" : "rgba(168, 85, 247, 0.4)"}`,
              color: "#ffffff",
              padding: "0.9rem 1.8rem",
              fontFamily: "var(--font-serif)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: selectedVenue === "la" ? "0 0 20px rgba(168, 85, 247, 0.5)" : "none",
            }}
          >
            🏛️ Los Angeles (Heritage Square)
          </button>

          <button
            type="button"
            onClick={() => setSelectedVenue("oc")}
            style={{
              backgroundColor: selectedVenue === "oc" ? "var(--accent-purple)" : "rgba(18, 14, 28, 0.9)",
              border: `1px solid ${selectedVenue === "oc" ? "#c084fc" : "rgba(168, 85, 247, 0.4)"}`,
              color: "#ffffff",
              padding: "0.9rem 1.8rem",
              fontFamily: "var(--font-serif)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: selectedVenue === "oc" ? "0 0 20px rgba(168, 85, 247, 0.5)" : "none",
            }}
          >
            🌳 Orange County (Heritage Museum)
          </button>
        </section>

        {/* VENUE DETAIL DISPLAY */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Venue Details */}
          <div
            style={{
              backgroundColor: "rgba(18, 14, 28, 0.95)",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              borderRadius: "var(--radius-md)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.8rem", color: "#c084fc", fontFamily: "var(--font-serif)", letterSpacing: "0.1em" }}>
                SEDE SELECCIONADA
              </span>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "var(--font-serif)",
                  color: "#ffffff",
                  marginTop: "0.3rem",
                  lineHeight: 1.2,
                }}
              >
                {current.name}
              </h2>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-main)", margin: 0 }}>
              {current.desc}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", borderTop: "1px dashed rgba(168, 85, 247, 0.3)", paddingTop: "1.2rem" }}>
              <p style={{ fontSize: "0.9rem", color: "#ffffff", margin: 0 }}>
                📍 <strong>Dirección:</strong> {current.address}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#ffffff", margin: 0 }}>
                📅 <strong>Fechas & Horario:</strong> {current.dates}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                🚗 <strong>Estacionamiento:</strong> {current.parking}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0 }}>
                🚆 <strong>Transporte Público:</strong> {current.transit}
              </p>
            </div>

            {/* Highlights Chips */}
            <div>
              <h4 style={{ fontSize: "0.9rem", fontFamily: "var(--font-serif)", color: "#c084fc", marginBottom: "0.6rem" }}>
                Atractivos de la Sede:
              </h4>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {current.highlights.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "rgba(168, 85, 247, 0.15)",
                      border: "1px solid rgba(168, 85, 247, 0.4)",
                      color: "#ffffff",
                      fontSize: "0.8rem",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Button */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(current.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                textAlign: "center",
                backgroundColor: "var(--accent-purple)",
                color: "#ffffff",
                fontFamily: "var(--font-serif)",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "0.85rem 1.5rem",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                transition: "all 0.25s ease",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                marginTop: "0.5rem",
              }}
            >
              🗺️ Abrir en Google Maps
            </a>
          </div>

          {/* Right Column: Interactive Map Placeholder & Venue Photo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <MediaPlaceholder
              type="image"
              label={`[Mapa Interactivo de Ruta - ${selectedVenue.toUpperCase()}]`}
              sublabel="Vista de satélite y distribución de puestos en la sede"
              height="350px"
            />

            <div
              style={{
                backgroundColor: "rgba(11, 9, 18, 0.9)",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                borderRadius: "var(--radius-sm)",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", color: "#ffffff", marginBottom: "0.5rem" }}>
                🔮 Recomendación de Ruta
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                Te recomendamos llegar al atardecer (5:00 PM) para disfrutar de la iluminación victoriana, recorrer los puestos de artesanías y presenciar los rituales y lecturas nocturnas a las 8:00 PM.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0b0912",
          borderTop: "1px solid rgba(168, 85, 247, 0.25)",
          padding: "3rem 2rem 2.5rem",
          marginTop: "auto",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-serif)" }}>
          <p>© {new Date().getFullYear()} Mercado de Brujas — La Ruta de las Sedes Místicas</p>
        </div>
      </footer>
    </div>
  );
}
