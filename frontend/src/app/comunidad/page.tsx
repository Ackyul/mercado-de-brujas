"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";
import VintageOvalFrame from "../components/VintageOvalFrame";

export default function ComunidadPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
    }
  };

  const communityWearPhotos = [
    { label: "[Atuendo Victoriano / Gótico]", sub: "Inspiración Dress Code" },
    { label: "[Picnic Místico & Brujas]", sub: "Encuentro en el Parque" },
    { label: "[Estilo Cottagecore & Sombreros]", sub: "Retratos de Comunidad" },
  ];

  const testimonials = [
    {
      name: "Luna V.",
      role: "Visitante Frecuente",
      quote: "Mercado de Brujas no es solo una feria, es un refugio de almas afines. Caminar por Heritage Square vestida de victoriano rodeada de personas con tanta luz es mágico.",
    },
    {
      name: "Boticario Astral",
      role: "Expositor de Sahumerios",
      quote: "La energía de la comunidad es inigualable. Los visitantes aprecian el arte artesanal y las intenciones con las que elaboramos cada producto.",
    },
    {
      name: "Morgana K.",
      role: "Lectora de Tarot",
      quote: "Cada edición reúne una vibra tan elevada que las lecturas fluyen con una claridad impresionante. Un verdadero honor ser parte.",
    },
  ];

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
          gap: "4.5rem",
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
            ✦ NUESTRO AQUELARRE ✦
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
            Comunidad Mercado de Brujas
          </h1>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-main)" }}>
            Somos un espacio seguro e incluyente donde creativos, artesanos, practicantes holísticos y almas afines se reúnen para celebrar la magia, el arte y la naturaleza.
          </p>
        </section>

        {/* SECTION 1: A MAGICKAL COMMUNITY INTRO + OVAL FRAME */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "1.2rem",
                letterSpacing: "0.04em",
              }}
            >
              El Espíritu del Mercado
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-main)", marginBottom: "1.5rem" }}>
              Es un día mágico al cruzar los portones de Mercado de Brujas. Escuchas las aves, sientes el aroma a salvia y lavanda en el aire y la calidez del sol sobre las estructuras históricas victorianas. Estás rodeado de almas en sintonía con la belleza, la magia y la espiritualidad.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/galeria"
                style={{
                  backgroundColor: "var(--accent-purple)",
                  color: "#ffffff",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "0.75rem 1.6rem",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                }}
              >
                📸 Explorar Galería de Memorias
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <VintageOvalFrame imageSrc="" title="" subtitle="" />
          </div>
        </section>

        {/* SECTION 2: DRESS CODE & COMMUNITY STYLE */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "1.8rem", color: "#c084fc" }}>👗</span>
            <h2
              style={{
                fontSize: "1.6rem",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.08em",
                marginTop: "0.4rem",
              }}
            >
              Estilo & Código de Vestimenta
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              "What the community wears" — Inspo para tu atuendo en el próximo encuentro
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {communityWearPhotos.map((photo, idx) => (
              <div key={idx} style={{ height: "350px" }}>
                <MediaPlaceholder type="image" label={photo.label} sublabel={photo.sub} height="100%" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TESTIMONIALS */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.6rem",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.08em",
              }}
            >
              Voces del Aquelarre
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(18, 14, 28, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "var(--text-main)",
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <h4 style={{ fontSize: "1rem", fontFamily: "var(--font-serif)", color: "#c084fc", margin: 0 }}>
                    {t.name}
                  </h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: DIGITAL COVEN SIGNUP */}
        <section
          style={{
            backgroundColor: "rgba(11, 9, 18, 0.95)",
            border: "1px solid rgba(168, 85, 247, 0.35)",
            borderRadius: "var(--radius-md)",
            padding: "3rem 2rem",
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🌙</span>
          <h2
            style={{
              fontSize: "1.6rem",
              fontFamily: "var(--font-serif)",
              color: "#ffffff",
              letterSpacing: "0.06em",
              marginTop: "0.5rem",
              marginBottom: "0.8rem",
            }}
          >
            Únete al Aquelarre Digital
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
            Recibe notificaciones exclusivas sobre nuevos encuentros, venta de entradas VIP y anuncios para la comunidad.
          </p>

          {joined ? (
            <div
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                border: "1px solid #c084fc",
                borderRadius: "var(--radius-sm)",
                padding: "1.2rem",
                color: "#ffffff",
                fontFamily: "var(--font-serif)",
              }}
            >
              ✦ ¡Bienvenid@ al Aquelarre! Te hemos enviado un mensaje de bienvenida.
            </div>
          ) : (
            <form onSubmit={handleJoin} style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center" }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico místico"
                style={{
                  flex: "1 1 280px",
                  maxWidth: "400px",
                  padding: "0.85rem 1.2rem",
                  backgroundColor: "rgba(18, 14, 28, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  borderRadius: "var(--radius-sm)",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "var(--accent-purple)",
                  color: "#ffffff",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "0.85rem 1.8rem",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                }}
              >
                Suscribirme ✦
              </button>
            </form>
          )}

          {/* Social media links */}
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "0.9rem" }}>
            <a
              href="https://www.instagram.com/mercado_brujas/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c084fc", textDecoration: "none" }}
            >
              📸 Instagram: @mercado_brujas
            </a>
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
          <p>© {new Date().getFullYear()} Mercado de Brujas — Comunidad & Aquelarre</p>
        </div>
      </footer>
    </div>
  );
}
