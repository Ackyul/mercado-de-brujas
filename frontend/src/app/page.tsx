"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import VintageOvalFrame from "./components/VintageOvalFrame";
import MediaPlaceholder from "./components/MediaPlaceholder";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [agree, setAgree] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const galleryPlaceholders = [
    { label: "[Espacio para Galería #1 - Stalls]", sub: "Formato 1:1 o 4:3" },
    { label: "[Espacio para Galería #2 - Tarot]", sub: "Formato 1:1 o 4:3" },
    { label: "[Espacio para Galería #3 - Music]", sub: "Formato 1:1 o 4:3" },
    { label: "[Espacio para Galería #4 - Community]", sub: "Formato 1:1 o 4:3" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

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

      {/* ── SECTION 1: Hero Video Placeholder Container (Magic Market Style) ── */}
      <section
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "1.5rem auto 4rem",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <MediaPlaceholder
            type="video"
            label="[Espacio para Video de Portada - Magic Market]"
            sublabel="Recomendado: Video loop MP4 de alta calidad (16:9)"
            aspectRatio="16/9"
            height="520px"
            showControls={true}
          />
        </div>
      </section>

      {/* ── SECTION 2: A Magickal Community (Text + Vintage Oval Frame) ── */}
      <section
        id="comunidad"
        style={{
          maxWidth: "1140px",
          width: "100%",
          margin: "0 auto 5rem",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Text Block */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "1.5rem",
                letterSpacing: "0.04em",
                lineHeight: 1.15,
              }}
            >
              A Magickal Community
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-main)",
                marginBottom: "2rem",
                fontFamily: "var(--font-sans)",
              }}
            >
              It's a beautiful day as you enter the gates of Magic Market. You hear the birds chirp, feel the warmth of the sun, smell the trees and grass. The energy of the space feels surreal as you're surrounded with beautiful Victorian homes. You're excited to frolic with your people and connect with like minded souls in a place that feels other worldly.
            </p>

            <h3
              style={{
                fontSize: "1.35rem",
                fontFamily: "var(--font-serif)",
                color: "#c084fc",
                marginBottom: "0.85rem",
                letterSpacing: "0.04em",
              }}
            >
              Welcome to Magic Market
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              A metaphysical market featuring 75 vendors ranging from metaphysical products, vintage, plants, tarot, palmistry, witch supply as well as workshops and classes including sound healing, yoga and more. Come join our witchy community and enjoy delicious vegan food while listening to the sounds of local featured artists. We currently pop up at Heritage Museums in Los Angeles and Orange County.
            </p>
          </div>

          {/* Right Vintage Oval Frame Placeholder */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <VintageOvalFrame
              imageSrc=""
              title=""
              subtitle=""
            />
          </div>
        </div>

        {/* Butterfly / Moth Emblem Divider */}
        <div style={{ textAlign: "center", margin: "4rem 0 2rem", opacity: 0.85 }}>
          <span style={{ fontSize: "2.5rem", filter: "drop-shadow(0 0 12px rgba(168, 85, 247, 0.7))" }}>🦋</span>
        </div>
      </section>

      {/* ── SECTION 3: UPCOMING EVENT Showcase ── */}
      <section
        id="events"
        style={{
          maxWidth: "1140px",
          width: "100%",
          margin: "0 auto 6rem",
          padding: "0 2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontFamily: "var(--font-serif)",
              color: "#ffffff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
          >
            ✦ UPCOMING EVENT ✦
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Event Flyer / Poster Placeholder */}
          <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>
            <MediaPlaceholder
              type="flyer"
              label="[Espacio para Afiche / Flyer del Evento]"
              sublabel="Formato recomendado: Afiche 4:5 o Póster de Evento"
              height="480px"
            />
          </div>

          {/* Event Info Action Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "1.5rem",
              padding: "1rem",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
              }}
            >
              MERCADO DE BRUJAS
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: "480px",
              }}
            >
              Encuentros itinerantes de magia, artesanías independientes, talleres holísticos y comunidad mística.
            </p>

            <Link
              href="/ediciones"
              style={{
                display: "inline-block",
                backgroundColor: "var(--accent-purple)",
                color: "#ffffff",
                fontFamily: "var(--font-serif)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
                transition: "all 0.3s ease",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c084fc";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-purple)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              EVENT INFORMATION
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER BAR ── */}
      <footer
        id="contacto"
        style={{
          backgroundColor: "#0b0912",
          borderTop: "1px solid rgba(168, 85, 247, 0.25)",
          padding: "3rem 2rem 2.5rem",
          marginTop: "auto",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-serif)",
            }}
          >
            <div>
              <span>Email: </span>
              <a
                href="mailto:MagicMarketPopUp@gmail.com"
                style={{ color: "#c084fc", textDecoration: "none", fontStyle: "italic" }}
              >
                MagicMarketPopUp@gmail.com
              </a>
            </div>

            <div>
              <span>© {new Date().getFullYear()} Mercado de Brujas / Magic Market</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1.2rem", fontSize: "1.2rem" }}>
              <a
                href="https://www.instagram.com/mercado_brujas/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                📸
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                🎵
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
