"use client";

import React from "react";

interface WitchCreator {
  name: string;
  role: string;
  handle: string;
  specialty: string;
  image: string;
  quote: string;
}

export default function WitchesCircle() {
  const creators: WitchCreator[] = [
    {
      name: "Luna & Obsidiana",
      role: "Alquimista de Cristales",
      handle: "@luna.obsidiana",
      specialty: "Joyería consagrada en plata 925 y cuarzos naturales",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
      quote: "Cada piedra es cargada bajo las fases lunares para actuar como amuleto activo de luz.",
    },
    {
      name: "Boticario Ancestral",
      role: "Herbolaria & Pócimas",
      handle: "@boticario.ancestral",
      specialty: "Tinturas madre, óleos botánicos y saumos orgánicos",
      image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=500&q=80",
      quote: "Honramos el conocimiento herbal de las abuelas para curar el alma y purificar ambientes.",
    },
    {
      name: "Tarot del Nigromante",
      role: "Lecturas & Oráculos",
      handle: "@tarot.nigromante",
      specialty: "Tarot terapéutico, registros akáshicos y limpias con salvia",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
      quote: "El tarot no predice el destino como sentencia, sino que revela las llaves para transformarlo.",
    },
    {
      name: "Velas de la Noche",
      role: "Cera Ritual",
      handle: "@velas.delanoche",
      specialty: "Velas de cera de abeja infundidas con flores sagradas",
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80",
      quote: "La luz encendida con intención abre portales de serenidad en cualquier hogar.",
    },
  ];

  return (
    <section id="circulo" style={{ padding: "5rem 2rem", maxWidth: "1240px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span className="badge badge-gold">✦ Creadores & Comunidad Instagram ✦</span>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", marginTop: "0.5rem" }}>
          El Círculo de Brujas & Alquimistas
        </h2>
        <p className="text-muted" style={{ maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "1.05rem" }}>
          Detrás de cada puesto y artefacto hay un corazón artesanal. Conoce a algunas de las mentes brillantes que dan vida a nuestras ferias.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.75rem" }}>
        {creators.map((c, i) => (
          <div key={i} className="glass-panel" style={{ padding: "1.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "110px", height: "110px", borderRadius: "50%", padding: "4px", background: "linear-gradient(135deg, var(--accent-gold), var(--accent-purple))", marginBottom: "1rem" }}>
              <img src={c.image} alt={c.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
            </div>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{c.name}</h3>
            <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", fontWeight: 600, display: "block", marginBottom: "0.25rem" }}>
              {c.role}
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--accent-glow)", display: "block", marginBottom: "0.85rem" }}>
              {c.handle}
            </span>

            <p className="text-muted" style={{ fontSize: "0.84rem", lineHeight: 1.5, marginBottom: "1rem", flexGrow: 1 }}>
              {c.specialty}
            </p>

            <blockquote style={{ fontSize: "0.78rem", fontStyle: "italic", borderTop: "1px dashed var(--border-subtle)", paddingTop: "0.75rem", color: "var(--text-main)" }}>
              "{c.quote}"
            </blockquote>
          </div>
        ))}
      </div>

      {/* Call to Join Community */}
      <div
        className="glass-card-gold"
        style={{
          marginTop: "3.5rem",
          padding: "2.5rem 2rem",
          borderRadius: "var(--radius-md)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "2.5rem" }}>✨</span>
        <h3 style={{ fontSize: "1.6rem", fontFamily: "var(--font-serif)" }}>
          ¿Eres Artesano, Ilustrador o Bruja Creadora?
        </h3>
        <p className="text-muted" style={{ maxWidth: "600px", fontSize: "0.95rem" }}>
          Buscamos constantemente nuevos talentos independientes para formar parte del mapa de nuestros próximos pop-ups. Postula tu marca para la siguiente edición.
        </p>
        <a
          href="https://www.instagram.com/mercado_brujas/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: "0.8rem 2rem" }}
        >
          📩 Postular mi Marca en Instagram
        </a>
      </div>
    </section>
  );
}
