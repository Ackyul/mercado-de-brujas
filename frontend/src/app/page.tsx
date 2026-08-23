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
                color: "#f2ede4",
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
                color: "#f2ede4",
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
        <div style={{ textAlign: "center", margin: "4rem 0 2rem", opacity: 0.8 }}>
          <span style={{ fontSize: "2.5rem" }}>🦋</span>
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
              color: "#f2ede4",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
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
                color: "#f2ede4",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              MAGIC MARKET
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
                backgroundColor: "var(--accent-gold)",
                color: "#303525",
                fontFamily: "var(--font-serif)",
                fontSize: "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "0.9rem 2.2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f2ede4";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              EVENT INFORMATION
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MAGIC MARKET Gallery Carousel ── */}
      <section
        style={{
          maxWidth: "1140px",
          width: "100%",
          margin: "0 auto 6rem",
          padding: "0 2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
              fontFamily: "var(--font-serif)",
              color: "#f2ede4",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            MAGIC MARKET
          </h2>
        </div>

        {/* Gallery Carousel Grid */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {galleryPlaceholders.map((item, idx) => (
            <div key={idx} style={{ height: "260px" }}>
              <MediaPlaceholder
                type="image"
                label={item.label}
                sublabel={item.sub}
                height="100%"
              />
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 3))}
            aria-label="Anterior"
            style={{
              position: "absolute",
              left: "-1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(30, 34, 24, 0.9)",
              border: "1px solid rgba(226, 216, 199, 0.4)",
              color: "#f2ede4",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              zIndex: 10,
            }}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setActiveSlide((prev) => (prev < 3 ? prev + 1 : 0))}
            aria-label="Siguiente"
            style={{
              position: "absolute",
              right: "-1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(30, 34, 24, 0.9)",
              border: "1px solid rgba(226, 216, 199, 0.4)",
              color: "#f2ede4",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              zIndex: 10,
            }}
          >
            ›
          </button>
        </div>
      </section>

      {/* ── SECTION 5: Mailing List Subscription Form & Footer ── */}
      <section
        id="contacto"
        style={{
          backgroundColor: "#343927",
          borderTop: "1px solid rgba(226, 216, 199, 0.15)",
          padding: "5rem 2rem 3rem",
          marginTop: "auto",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
              fontFamily: "var(--font-serif)",
              color: "#f2ede4",
              marginBottom: "2.5rem",
              lineHeight: 1.35,
              fontWeight: 400,
            }}
          >
            Join our mailing list & be the first to know about upcoming events!
          </h2>

          {subscribed ? (
            <div
              style={{
                backgroundColor: "rgba(78, 85, 62, 0.8)",
                border: "1px solid var(--accent-gold)",
                padding: "1.5rem",
                borderRadius: "var(--radius-sm)",
                color: "#f2ede4",
                marginBottom: "3rem",
              }}
            >
              ✦ ¡Gracias por suscribirte! Te notificaremos pronto sobre los próximos eventos. ✦
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ marginBottom: "3.5rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  maxWidth: "650px",
                  margin: "0 auto 1.25rem",
                }}
              >
                <div style={{ flex: 1, minWidth: "260px", textAlign: "left" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "#d8cebe",
                      marginBottom: "0.4rem",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu.correo@ejemplo.com"
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      backgroundColor: "rgba(55, 61, 44, 0.8)",
                      border: "1px solid rgba(226, 216, 199, 0.3)",
                      borderRadius: "var(--radius-sm)",
                      color: "#f2ede4",
                      fontSize: "0.95rem",
                      outline: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-end",
                    backgroundColor: "var(--accent-gold)",
                    color: "#303525",
                    border: "none",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "0.85rem 2rem",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f2ede4")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-gold)")}
                >
                  Subscribe
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                }}
              >
                <input
                  type="checkbox"
                  id="mailing-agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  style={{ cursor: "pointer" }}
                />
                <label htmlFor="mailing-agree" style={{ cursor: "pointer" }}>
                  I want to subscribe to your mailing list.
                </label>
              </div>
            </form>
          )}

          {/* Bottom Footer Bar (Email, Copyright & Social Icons) */}
          <div
            style={{
              borderTop: "1px solid rgba(226, 216, 199, 0.15)",
              paddingTop: "2rem",
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
                style={{ color: "#f2ede4", textDecoration: "none", fontStyle: "italic" }}
              >
                MagicMarketPopUp@gmail.com
              </a>
            </div>

            <div>
              <span>© {new Date().getFullYear()} Magic Market Pop Up</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1.2rem", fontSize: "1.2rem" }}>
              <a
                href="https://www.instagram.com/mercado_brujas/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#f2ede4", textDecoration: "none" }}
              >
                📸
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{ color: "#f2ede4", textDecoration: "none" }}
              >
                🎵
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
