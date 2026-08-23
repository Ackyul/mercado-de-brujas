"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Link from "next/link";

export default function EdicionesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Ofrecen reembolso de entradas? / Do you offer ticket refunds?",
      a: "Todas las entradas son finales. No se realizan reembolsos. / All tickets are final. No refunds.",
    },
    {
      q: "¿Los niños necesitan entrada? / Do kids need a ticket?",
      a: "Los niños menores de 8 años ingresan gratis. / Kids under the age of 8 are free.",
    },
    {
      q: "¿Se permiten mascotas? / Are pets allowed?",
      a: "Sí. Las mascotas deben permanecer con correa o en cochecito y recoger sus desechos. / Yes. Keep pets on a leash or stroller and pick up after them.",
    },
    {
      q: "¿El estacionamiento es gratuito? / Is parking free?",
      a: "Por favor revisa las instrucciones de estacionamiento en el botón superior para cada sede. / Please check the parking instructions button above for full details.",
    },
    {
      q: "¿Hay estacionamiento accesibilidad ADA? / Is there ADA parking?",
      a: "Sí, contamos con espacios de parqueo accesibles en la entrada de la sede.",
    },
    {
      q: "¿Puedo ingresar antes de la hora de mi boleto?",
      a: "NO. No puedes ingresar antes de la hora indicada en tu entrada, pero puedes ingresar en cualquier momento posterior.",
    },
    {
      q: "¿Puedo comprar entradas en la puerta?",
      a: "Sí, siempre y cuando no estén agotadas en taquilla. Recomendamos comprar con anticipación en línea.",
    },
    {
      q: "¿Puedo comprar el pase VIP 'The Witch's Pass' en la puerta?",
      a: "No. Todos los pases VIP deben comprarse con anticipación por internet.",
    },
    {
      q: "¿Puedo grabar contenido con cámara profesional?",
      a: "Sí, pero cualquier cámara profesional o micrófono requiere un pase de prensa (Media Pass). Solicítalo en la taquilla al llegar.",
    },
    {
      q: "¿Venden bebidas alcohólicas?",
      a: "No. No se vende ni permite consumo de alcohol en nuestras ediciones para mantener un ambiente familiar y seguro.",
    },
    {
      q: "¿Hay zona de fumadores?",
      a: "¡NO! Está estrictamente prohibido fumar o vapear en todo el recinto del museo para preservar las estructuras históricas.",
    },
  ];

  const communityWearPhotos = [
    { label: "[Foto Comunidad #1 - Atuendo Victoriano]", sub: "Formato 3:4 Vertical" },
    { label: "[Foto Comunidad #2 - Picnic Místico]", sub: "Formato 3:4 Vertical" },
    { label: "[Foto Comunidad #3 - Brujas en el Mercado]", sub: "Formato 3:4 Vertical" },
  ];

  const thingsToDoPhotos = [
    { label: "[Foto Actividades #1 - Lectura Tarot]", sub: "Formato 3:4 Vertical" },
    { label: "[Foto Actividades #2 - Taller en Capilla]", sub: "Formato 3:4 Vertical" },
    { label: "[Foto Actividades #3 - Baño de Sonido]", sub: "Formato 3:4 Vertical" },
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
          gap: "5rem",
        }}
      >
        {/* ── SECTION 1: UPCOMING EVENT (BEWITCHED - LOS ANGELES & ORANGE COUNTY) ── */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Poster Placeholder */}
          <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>
            <MediaPlaceholder
              type="flyer"
              label="[Póster del Evento Presencial - Bewitched]"
              sublabel="Formato recomendado: Afiche 4:5 o Póster de Evento"
              height="580px"
            />
          </div>

          {/* Right Description Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontFamily: "var(--font-serif)",
                color: "#c084fc",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              ✦ PRÓXIMO ENCUENTRO PRESENCIAL ✦
            </span>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
              }}
            >
              BEWITCHED
            </h1>

            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-main)" }}>
              Hello Witches & Warlocks! 🧹🔮
              <br />
              Nos reunimos en comunidad bajo la luna para celebrar la temporada más mágica del año en el mercado de brujas más acogedor de la ciudad. ¡No hay mejor manera de celebrar que con almas afines y magia verdadera!
            </p>

            <div
              style={{
                backgroundColor: "rgba(18, 14, 28, 0.95)",
                border: "1px solid rgba(168, 85, 247, 0.35)",
                borderRadius: "var(--radius-sm)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-serif)",
                  color: "#c084fc",
                  marginBottom: "0.2rem",
                }}
              >
                🌙 Fechas & Sedes Destacadas:
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#ffffff", margin: 0 }}>
                • <strong>Los Angeles:</strong> 10 & 11 de Octubre (5:00 PM - 10:00 PM) en Heritage Square Museum.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#ffffff", margin: 0 }}>
                • <strong>Orange County:</strong> 17 de Octubre (5:00 PM - 10:00 PM) en Heritage Museum of OC.
              </p>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
              👗 <strong>Código de Vestimenta:</strong> ¡Ven vestido con tu atuendo más victoriano, místico o espeluznante! Nuestro equipo estará grabando reels y contenido especial para las redes.
            </p>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
              🔮 <strong>Servicios & Experiencias:</strong> 80 expositores con lecturas de Tarot, Oráculo, Astrología, Limpias energéticas, Fotografía de Aura, Cuencos de Canto, Taller de Amuletos, Comida Vegana y Música en Vivo.
            </p>

            {/* Ticket CTA Buttons */}
            <div style={{ marginTop: "1rem" }}>
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-serif)",
                  color: "#ffffff",
                  marginBottom: "1rem",
                  letterSpacing: "0.08em",
                }}
              >
                ENTRADAS & BOLETERÍA
              </h4>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="#contacto"
                  style={{
                    backgroundColor: "var(--accent-purple)",
                    color: "#ffffff",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "0.85rem 1.8rem",
                    textDecoration: "none",
                    borderRadius: "var(--radius-sm)",
                    transition: "all 0.25s ease",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  }}
                >
                  Boletería Los Angeles
                </a>

                <a
                  href="#contacto"
                  style={{
                    backgroundColor: "rgba(18, 14, 28, 0.9)",
                    border: "1px solid rgba(168, 85, 247, 0.6)",
                    color: "#ffffff",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "0.85rem 1.8rem",
                    textDecoration: "none",
                    borderRadius: "var(--radius-sm)",
                    transition: "all 0.25s ease",
                  }}
                >
                  Boletería Orange County
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: GALLERY PREVIEWS ("What the community wears" & "Things to do") ── */}
        <section style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "1.8rem", color: "#c084fc" }}>🕯️</span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.08em",
                marginTop: "0.5rem",
              }}
            >
              Experiencia & Comunidad Mercado de Brujas
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              WAIT! Scroll down to read our FAQ and important information!
            </p>
          </div>

          {/* Grid 1: What the community wears */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontFamily: "var(--font-serif)",
                color: "#c084fc",
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              What the community wears:
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {communityWearPhotos.map((photo, idx) => (
                <div key={idx} style={{ height: "340px" }}>
                  <MediaPlaceholder
                    type="image"
                    label={photo.label}
                    sublabel={photo.sub}
                    height="100%"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grid 2: Things to do */}
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontFamily: "var(--font-serif)",
                color: "#c084fc",
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              Things to do:
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {thingsToDoPhotos.map((photo, idx) => (
                <div key={idx} style={{ height: "340px" }}>
                  <MediaPlaceholder
                    type="image"
                    label={photo.label}
                    sublabel={photo.sub}
                    height="100%"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FAQ, PARKING & IMPORTANT INFO ── */}
        <section
          style={{
            backgroundColor: "#0b0912",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            borderRadius: "var(--radius-md)",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                letterSpacing: "0.06em",
                marginBottom: "0.75rem",
              }}
            >
              FAQ, Parking & Important Info:
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#c084fc", fontStyle: "italic" }}>
              *It is very important to read all details below to avoid confusion day of the event!
            </p>
          </div>

          {/* Parking Notice Buttons */}
          <div
            style={{
              backgroundColor: "rgba(18, 14, 28, 0.9)",
              border: "1px dashed rgba(168, 85, 247, 0.4)",
              borderRadius: "var(--radius-sm)",
              padding: "1.75rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "0.08em",
              }}
            >
              PARKING & LLEGAR A LA SEDE:
            </h3>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
              <button
                type="button"
                onClick={() => alert("Instrucciones de Estacionamiento Los Angeles")}
                style={{
                  backgroundColor: "var(--accent-purple)",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                }}
              >
                Instrucciones Estacionamiento Los Angeles
              </button>

              <button
                type="button"
                onClick={() => alert("Instrucciones de Estacionamiento Orange County")}
                style={{
                  backgroundColor: "rgba(18, 14, 28, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.6)",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                }}
              >
                Instrucciones Estacionamiento Orange County
              </button>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic", margin: 0 }}>
              *El estacionamiento se llena rápidamente. Recomendamos encarecidamente compartir vehículo o usar servicios de transporte.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "1.25rem",
                letterSpacing: "0.06em",
              }}
            >
              Preguntas Frecuentes (FAQ):
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      backgroundColor: "rgba(18, 14, 28, 0.8)",
                      border: "1px solid rgba(168, 85, 247, 0.25)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.1rem 1.4rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h4
                        style={{
                          fontSize: "0.95rem",
                          fontFamily: "var(--font-serif)",
                          color: isOpen ? "#c084fc" : "#ffffff",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {faq.q}
                      </h4>
                      <span style={{ fontSize: "1.1rem", color: "#c084fc" }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    {isOpen && (
                      <p
                        style={{
                          marginTop: "0.75rem",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          color: "var(--text-muted)",
                          borderTop: "1px solid rgba(168, 85, 247, 0.15)",
                          paddingTop: "0.75rem",
                          margin: "0.75rem 0 0",
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

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
