"use client";

import React, { useState, useEffect } from "react";

interface EventItem {
  id: string;
  edition: string;
  name: string;
  date: string;
  time: string;
  location: string;
  city: string;
  description: string;
  workshops: string[];
  isNext: boolean;
  image: string;
}

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registered, setRegistered] = useState(false);
  const [attendeeEmail, setAttendeeEmail] = useState("");

  // Countdown timer calculations
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: (prev.minutes + 59) % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const events: EventItem[] = [
    {
      id: "ev-1",
      edition: "Edición #42 — Luna Llena de Equinoccio",
      name: "Mercado de Brujas: Gran Pop-Up de Primavera",
      date: "Sábado 24 & Domingo 25 de Agosto, 2026",
      time: "11:00 AM – 8:00 PM",
      location: "Casona Cultural Mística (Jardines Principales)",
      city: "Centro Histórico",
      description:
        "Más de 50 puestos artesanales, música instrumental esotérica en vivo, lecturas de oráculos, pociones botánicas, área gastronómica vegetal y ritual colectivo de consagración de deseos al atardecer.",
      workshops: [
        "12:00 PM — Taller de Sahumerios Ancestrales",
        "3:00 PM — Introducción al Tarot de Marsella",
        "6:00 PM — Ritual de Limpieza con Cristales",
      ],
      isNext: true,
      image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ev-2",
      edition: "Edición #43 — Aquelarre de Samhain",
      name: "Mercado de Brujas: Festival Noche de Brujas",
      date: "31 de Octubre & 1 de Noviembre, 2026",
      time: "2:00 PM – 10:00 PM",
      location: "Parque Botánico Nocturno",
      city: "Zona Rosa",
      description:
        "Nuestra edición más grande del año. Celebración de las antepasadas, velada con candelabros, feria de ilustradores oscuros, venta de grimorios artesanales y concierto sagrado bajo las estrellas.",
      workshops: [
        "4:00 PM — Creación de Amuletos de Obsidiana",
        "7:00 PM — Astrología & Tránsitos Planetarios",
      ],
      isNext: false,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (attendeeEmail) {
      setRegistered(true);
    }
  };

  return (
    <section id="eventos" style={{ padding: "5rem 2rem", maxWidth: "1240px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span className="badge badge-gold">✦ Encuentros Presenciales & Pop-Up ✦</span>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-serif)", marginTop: "0.5rem" }}>
          Próximos Encuentros de Mercado de Brujas
        </h2>
        <p className="text-muted" style={{ maxWidth: "680px", margin: "0.5rem auto 0", fontSize: "1.05rem" }}>
          Siente la energía del aquelarre presencial. Descubre la fecha y ubicación de nuestras próximas ediciones pop-up y asegura tu pase ritual.
        </p>
      </div>

      {/* Countdown Box for Next Event */}
      <div
        className="glass-card-gold"
        style={{
          padding: "2.5rem 2rem",
          marginBottom: "4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <span className="badge" style={{ backgroundColor: "rgba(255, 183, 3, 0.2)", color: "var(--accent-gold)" }}>
            ⚡ Cuenta Regresiva para la Próxima Feria Pop-Up
          </span>
        </div>

        <h3 style={{ fontSize: "1.7rem", fontFamily: "var(--font-serif)", marginBottom: "1.5rem" }}>
          Edición #42: Luna Llena de Equinoccio
        </h3>

        {/* Counter Display Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <div className="glass-panel" style={{ width: "90px", padding: "1rem 0" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-gold)", display: "block" }}>
              {timeLeft.days}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Días
            </span>
          </div>
          <div className="glass-panel" style={{ width: "90px", padding: "1rem 0" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-glow)", display: "block" }}>
              {timeLeft.hours}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Horas
            </span>
          </div>
          <div className="glass-panel" style={{ width: "90px", padding: "1rem 0" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--accent-purple)", display: "block" }}>
              {timeLeft.minutes}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Minutos
            </span>
          </div>
          <div className="glass-panel" style={{ width: "90px", padding: "1rem 0" }}>
            <span style={{ fontSize: "2.2rem", fontWeight: 800, color: "#10b981", display: "block" }}>
              {timeLeft.seconds}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
              Segundos
            </span>
          </div>
        </div>

        <button
          className="btn-primary"
          onClick={() => setSelectedEvent(events[0])}
          style={{ padding: "0.85rem 2rem" }}
        >
          🎟️ Reservar Entrada Libre & Registrar Asistencia
        </button>
      </div>

      {/* Events List Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
        {events.map((ev) => (
          <div
            key={ev.id}
            className="glass-panel"
            style={{
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", height: "200px" }}>
              <img src={ev.image} alt={ev.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                <span className="badge badge-gold">{ev.edition}</span>
              </div>
            </div>

            <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>{ev.name}</h3>

              <div style={{ fontSize: "0.88rem", color: "var(--accent-glow)", marginBottom: "0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span>📅 {ev.date}</span>
                <span>⏰ {ev.time}</span>
                <span>📍 {ev.location} ({ev.city})</span>
              </div>

              <p className="text-muted" style={{ fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem", flexGrow: 1 }}>
                {ev.description}
              </p>

              {/* Workshops snippet */}
              <div style={{ marginBottom: "1.25rem", backgroundColor: "rgba(0,0,0,0.3)", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-gold)", display: "block", marginBottom: "0.4rem" }}>
                  🌿 TALLERES CONFIRMADOS:
                </span>
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0, fontSize: "0.78rem", color: "var(--text-main)" }}>
                  {ev.workshops.map((ws, idx) => (
                    <li key={idx} style={{ marginBottom: "0.2rem" }}>✦ {ws}</li>
                  ))}
                </ul>
              </div>

              <button
                className="btn-secondary"
                onClick={() => setSelectedEvent(ev)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Ver Detalles & Asistir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            className="glass-card-gold"
            style={{
              maxWidth: "500px",
              width: "100%",
              padding: "2rem",
              position: "relative",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <button
              onClick={() => {
                setSelectedEvent(null);
                setRegistered(false);
              }}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                color: "var(--text-main)",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {!registered ? (
              <>
                <span className="badge badge-gold" style={{ marginBottom: "0.5rem" }}>
                  {selectedEvent.edition}
                </span>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.75rem", fontFamily: "var(--font-serif)" }}>
                  {selectedEvent.name}
                </h3>

                <p className="text-muted" style={{ fontSize: "0.85rem", marginBottom: "1.25rem" }}>
                  Ingreso libre. Regístrate para recibir el recordatorio de apertura, mapa de puestos y cupón especial para lecturas de oráculo.
                </p>

                <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.8rem", color: "var(--accent-glow)", display: "block", marginBottom: "0.3rem" }}>
                      Tu Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="bruja@sagrada.com"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        border: "1px solid var(--border-subtle)",
                        color: "#fff",
                        outline: "none",
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: "0.75rem" }}>
                    ✨ Confirmar Registro Alquímico
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "1rem 0" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "0.5rem" }}>🔮</span>
                <h3 style={{ fontSize: "1.4rem", color: "var(--accent-gold)", marginBottom: "0.5rem" }}>
                  ¡Registro Confirmado!
                </h3>
                <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Hemos enviado las coordenadas y la guía ritual a <strong>{attendeeEmail}</strong>. Nos vemos pronto en el mercado.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedEvent(null);
                    setRegistered(false);
                  }}
                >
                  Cerrar Ventana
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
