"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import MediaPlaceholder from "../components/MediaPlaceholder";

export default function SePartePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
    email: "",
    instagram: "",
    categoria: "artesania",
    sede: "todas",
    descripcion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    { title: "🔮 Lecturas & Sanación", desc: "Tarot, oráculo, astrología, limpias energéticas, quiromancia y fotografía de aura." },
    { title: "🎨 Artesanía Mística", desc: "Varitas, grimorios, arte ceremonial, amuletos, cerámica esotérica y talismanes." },
    { title: "🌿 Botánica & Aromaterapia", desc: "Pociones, velas alquímicas, sahumerios, aceites esenciales, hierbas y cristales." },
    { title: "👗 Moda & Joyería", desc: "Ropa victoriana, indumentaria gótica, joyería en plata, cristales y accesorios místicos." },
    { title: "🍲 Gastronomía Vegana", desc: "Alimentos artesanales veganos, repostería temática, elixires y pócimas botánicas." },
    { title: "🎵 Performances & Talleres", desc: "Música en vivo, baños de sonido, yoga místico y facilitadores de talleres." },
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
            ✦ CONVOCATORIA ABIERTA ✦
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
            Sé Parte del Aquelarre
          </h1>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-main)" }}>
            ¿Creas arte esotérico, practicas las artes adivinatorias, elaboras gastronomía consciente o diseñas indumentaria mística? Invita tu magia a formar parte de las próximas ediciones itinerantes de <strong>Mercado de Brujas</strong>.
          </p>
        </section>

        {/* CATEGORIES GRID */}
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
              Categorías de Expositores
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(18, 14, 28, 0.85)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.75rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "var(--font-serif)",
                    color: "#c084fc",
                    marginBottom: "0.6rem",
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* APPLICATION FORM & MEDIA */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Form */}
          <div
            style={{
              backgroundColor: "rgba(11, 9, 18, 0.95)",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              borderRadius: "var(--radius-md)",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--font-serif)",
                color: "#ffffff",
                marginBottom: "0.5rem",
                letterSpacing: "0.06em",
              }}
            >
              Formulario de Postulación
            </h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
              Completa la información sobre tu marca o proyecto para revisar tu solicitud.
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                  border: "1px solid #c084fc",
                  borderRadius: "var(--radius-sm)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>✨</span>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.3rem",
                    color: "#ffffff",
                    marginTop: "0.8rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  ¡Solicitud Recibida!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Gracias por tu interés en ser parte de Mercado de Brujas. Nuestro equipo curador revisará tu propuesta y te contactaremos vía email o Instagram en breve.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "1.2rem",
                    backgroundColor: "transparent",
                    border: "1px solid #c084fc",
                    color: "#c084fc",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.85rem",
                  }}
                >
                  Enviar otra postulación
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-serif)",
                      color: "#c084fc",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(18, 14, 28, 0.9)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: "var(--radius-sm)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-serif)",
                      color: "#c084fc",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Nombre de Marca / Proyecto *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.marca}
                    onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                    placeholder="Ej. Boticario Místico"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(18, 14, 28, 0.9)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: "var(--radius-sm)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-serif)",
                        color: "#c084fc",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        backgroundColor: "rgba(18, 14, 28, 0.9)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        borderRadius: "var(--radius-sm)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-serif)",
                        color: "#c084fc",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Instagram / Portfolio *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      placeholder="@tu_usuario"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        backgroundColor: "rgba(18, 14, 28, 0.9)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        borderRadius: "var(--radius-sm)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-serif)",
                        color: "#c084fc",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Categoría
                    </label>
                    <select
                      value={formData.categoria}
                      onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        backgroundColor: "rgba(18, 14, 28, 0.9)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        borderRadius: "var(--radius-sm)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="artesania">Artesanía & Productos</option>
                      <option value="tarot">Tarot & Lecturas</option>
                      <option value="botanica">Botánica & Velas</option>
                      <option value="moda">Moda & Joyería</option>
                      <option value="comida">Comida Vegana</option>
                      <option value="performance">Música / Taller</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-serif)",
                        color: "#c084fc",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Sede de Interés
                    </label>
                    <select
                      value={formData.sede}
                      onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        backgroundColor: "rgba(18, 14, 28, 0.9)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        borderRadius: "var(--radius-sm)",
                        color: "#ffffff",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="todas">Todas las sedes</option>
                      <option value="la">Los Angeles (Heritage Square)</option>
                      <option value="oc">Orange County (Heritage Museum)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-serif)",
                      color: "#c084fc",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Descripción de tus productos o propuesta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    placeholder="Cuéntanos brevemente sobre tus productos, proceso artesanal o servicio..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(18, 14, 28, 0.9)",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: "var(--radius-sm)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "var(--accent-purple)",
                    color: "#ffffff",
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    padding: "0.9rem 2rem",
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    marginTop: "0.5rem",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Enviar Postulación ✦
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Information & Media */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <MediaPlaceholder
              type="image"
              label="[Ambiente de Expositores & Stalls]"
              sublabel="Formato recomendado 4:3"
              height="300px"
            />

            <div
              style={{
                backgroundColor: "rgba(18, 14, 28, 0.9)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-serif)",
                  color: "#c084fc",
                  marginBottom: "1rem",
                }}
              >
                📜 Beneficios de Exponer:
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                }}
              >
                <li style={{ display: "flex", gap: "0.6rem" }}>
                  <span style={{ color: "#c084fc" }}>✦</span>
                  <span><strong>Gran Afluencia:</strong> Miles de visitantes apasionados por la estética mística y victoriana.</span>
                </li>
                <li style={{ display: "flex", gap: "0.6rem" }}>
                  <span style={{ color: "#c084fc" }}>✦</span>
                  <span><strong>Difusión en Redes:</strong> Cobertura fotográfica y menciones activas en @mercado_brujas.</span>
                </li>
                <li style={{ display: "flex", gap: "0.6rem" }}>
                  <span style={{ color: "#c084fc" }}>✦</span>
                  <span><strong>Sedes de Encanto:</strong> Ubicaciones históricas rodeadas de arquitectura victoriana.</span>
                </li>
                <li style={{ display: "flex", gap: "0.6rem" }}>
                  <span style={{ color: "#c084fc" }}>✦</span>
                  <span><strong>Comunidad Colaborativa:</strong> Red de apoyo entre artesanos, sanadores y creativos independientes.</span>
                </li>
              </ul>
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
          <p>© {new Date().getFullYear()} Mercado de Brujas — Se parte del Aquelarre</p>
        </div>
      </footer>
    </div>
  );
}
