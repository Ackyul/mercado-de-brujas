"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { useEditions } from "../context/EditionsContext";
import { Edition, EditionPhoto } from "../data/editionsData";

export default function AdminConsolePage() {
  const {
    editions,
    addEdition,
    updateEdition,
    deleteEdition,
    toggleEditionStatus,
    addPhotoToEdition,
    deletePhotoFromEdition,
  } = useEditions();

  const [activeTab, setActiveTab] = useState<"ediciones" | "galeria" | "resumen">("ediciones");

  // Modal State for Edition Creation / Editing
  const [isEditionModalOpen, setIsEditionModalOpen] = useState(false);
  const [editingEdition, setEditingEdition] = useState<Edition | null>(null);

  // Form State for Edition
  const [formNumber, setFormNumber] = useState<number>(43);
  const [formTitle, setFormTitle] = useState("");
  const [formStatus, setFormStatus] = useState<"Próxima" | "Realizada">("Próxima");
  const [formDate, setFormDate] = useState("");
  const [formTime, setFormTime] = useState("11:00 AM – 8:00 PM");
  const [formLocation, setFormLocation] = useState("");
  const [formCity, setFormCity] = useState("Centro Histórico");
  const [formAttendees, setFormAttendees] = useState("Esperados ~2,500");
  const [formExhibitors, setFormExhibitors] = useState("50 Marcas");
  const [formShortDesc, setFormShortDesc] = useState("");
  const [formFullStory, setFormFullStory] = useState("");
  const [formHighlights, setFormHighlights] = useState("Ritual Místico, Artesanías Esotéricas, Tarot Ancestral");

  // Gallery Management State
  const [selectedGallerySlug, setSelectedGallerySlug] = useState<string>(
    editions.length > 0 ? editions[0].slug : ""
  );
  const [newPhotoTag, setNewPhotoTag] = useState("Feria");
  const [newPhotoCaption, setNewPhotoCaption] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const currentGalleryEdition = editions.find((ed) => ed.slug === selectedGallerySlug) || editions[0];

  const totalPhotosCount = editions.reduce((acc, ed) => acc + ed.gallery.length, 0);
  const nextEdition = editions.find((ed) => ed.status === "Próxima") || editions[0];

  const handleOpenCreateModal = () => {
    setEditingEdition(null);
    const nextNum = editions.length > 0 ? Math.max(...editions.map((e) => e.number || 0)) + 1 : 43;
    setFormNumber(nextNum);
    setFormTitle(`Edición #${nextNum}`);
    setFormStatus("Próxima");
    setFormDate("15 & 16 de Octubre, 2026");
    setFormTime("11:00 AM – 8:00 PM");
    setFormLocation("Casona Cultural Mística");
    setFormCity("Centro Histórico");
    setFormAttendees("Esperados ~2,500");
    setFormExhibitors("55 Marcas");
    setFormShortDesc("Nueva edición pop-up del Mercado de Brujas con expositores místicos y talleres rituales.");
    setFormFullStory("Una nueva celebración del aquelarre ancestral que reúne a artesanos, botánicos y sabios esotéricos.");
    setFormHighlights("Ritual de Apertura, Mercado Místico, Lecturas de Oráculo");
    setIsEditionModalOpen(true);
  };

  const handleOpenEditModal = (edition: Edition) => {
    setEditingEdition(edition);
    setFormNumber(edition.number);
    setFormTitle(edition.title);
    setFormStatus(edition.status);
    setFormDate(edition.date);
    setFormTime(edition.time);
    setFormLocation(edition.location);
    setFormCity(edition.city);
    setFormAttendees(edition.attendeesCount);
    setFormExhibitors(edition.exhibitorsCount);
    setFormShortDesc(edition.shortDescription);
    setFormFullStory(edition.fullStory);
    setFormHighlights(edition.highlights.join(", "));
    setIsEditionModalOpen(true);
  };

  const handleSaveEdition = (e: React.FormEvent) => {
    e.preventDefault();
    const highlightsArr = formHighlights.split(",").map((h) => h.trim()).filter(Boolean);

    if (editingEdition) {
      updateEdition(editingEdition.slug, {
        title: formTitle,
        number: formNumber,
        status: formStatus,
        date: formDate,
        time: formTime,
        location: formLocation,
        city: formCity,
        attendeesCount: formAttendees,
        exhibitorsCount: formExhibitors,
        shortDescription: formShortDesc,
        fullStory: formFullStory,
        highlights: highlightsArr,
      });
    } else {
      addEdition({
        number: formNumber,
        title: formTitle,
        subtitle: "",
        date: formDate,
        time: formTime,
        location: formLocation,
        city: formCity,
        status: formStatus,
        featuredCover: "",
        shortDescription: formShortDesc,
        fullStory: formFullStory,
        highlights: highlightsArr,
        attendeesCount: formAttendees,
        exhibitorsCount: formExhibitors,
      });
    }

    setIsEditionModalOpen(false);
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGallerySlug) return;
    addPhotoToEdition(selectedGallerySlug, {
      url: newPhotoUrl,
      caption: newPhotoCaption || "Nueva memoria fotográfica",
      tag: newPhotoTag || "Feria",
    });
    setNewPhotoCaption("");
    setNewPhotoUrl("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <Header />

      <main style={{ padding: "3rem 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Admin Header Bar */}
        <div
          className="glass-card-gold"
          style={{
            padding: "1.5rem 2rem",
            borderRadius: "var(--radius-md)",
            marginBottom: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            border: "1px solid var(--accent-gold)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
              <span className="badge badge-purple">🔐 Consola de Administración</span>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", opacity: 0.8 }}>
                Mercado de Brujas v2.0
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontFamily: "var(--font-serif)",
                letterSpacing: "0.04em",
                color: "var(--text-main)",
              }}
            >
              Control de Ediciones & Galería
            </h1>
          </div>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link
              href="/ediciones"
              className="btn-secondary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}
            >
              👁️ Ver Sitio Público
            </Link>

            <button
              onClick={handleOpenCreateModal}
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.2rem", cursor: "pointer" }}
            >
              ✨ + Crear Nueva Edición
            </button>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <div className="glass-panel" style={{ padding: "1.25rem", borderRadius: "var(--radius-sm)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Total de Ediciones
            </span>
            <div style={{ fontSize: "2rem", fontFamily: "var(--font-serif)", color: "var(--accent-gold)", fontWeight: 700, marginTop: "0.25rem" }}>
              {editions.length}
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Registradas en catálogo</span>
          </div>

          <div className="glass-panel" style={{ padding: "1.25rem", borderRadius: "var(--radius-sm)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Edición Próxima
            </span>
            <div style={{ fontSize: "1.4rem", fontFamily: "var(--font-serif)", color: "var(--text-main)", fontWeight: 700, marginTop: "0.25rem" }}>
              {nextEdition ? nextEdition.title : "N/A"}
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)" }}>📅 {nextEdition?.date}</span>
          </div>

          <div className="glass-panel" style={{ padding: "1.25rem", borderRadius: "var(--radius-sm)" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Fotos en Galería
            </span>
            <div style={{ fontSize: "2rem", fontFamily: "var(--font-serif)", color: "var(--accent-gold)", fontWeight: 700, marginTop: "0.25rem" }}>
              {totalPhotosCount}
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Archivos multimedia</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "2rem",
            borderBottom: "1px solid var(--border-subtle)",
            paddingBottom: "0.75rem",
          }}
        >
          <button
            onClick={() => setActiveTab("ediciones")}
            className={activeTab === "ediciones" ? "btn-primary" : "btn-secondary"}
            style={{ fontSize: "0.9rem", padding: "0.55rem 1.25rem", cursor: "pointer" }}
          >
            🔮 Ediciones ({editions.length})
          </button>
          <button
            onClick={() => setActiveTab("galeria")}
            className={activeTab === "galeria" ? "btn-primary" : "btn-secondary"}
            style={{ fontSize: "0.9rem", padding: "0.55rem 1.25rem", cursor: "pointer" }}
          >
            📸 Galería de Fotos ({totalPhotosCount})
          </button>
        </div>

        {/* TAB 1: EDICIONES MANAGEMENT */}
        {activeTab === "ediciones" && (
          <section className="glass-panel ornate-frame" style={{ padding: "2rem", borderRadius: "var(--radius-md)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--accent-gold)" }}>
                Lista General de Ediciones
              </h2>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Haz clic en una acción para gestionar la edición.
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontSize: "0.88rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--accent-gold)", color: "var(--accent-gold)", fontFamily: "var(--font-serif)" }}>
                    <th style={{ padding: "0.75rem 1rem" }}>#</th>
                    <th style={{ padding: "0.75rem 1rem" }}>Título</th>
                    <th style={{ padding: "0.75rem 1rem" }}>Estado</th>
                    <th style={{ padding: "0.75rem 1rem" }}>Fecha</th>
                    <th style={{ padding: "0.75rem 1rem" }}>Sede / Ciudad</th>
                    <th style={{ padding: "0.75rem 1rem" }}>Fotos</th>
                    <th style={{ padding: "0.75rem 1rem", textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {editions.map((ed) => (
                    <tr
                      key={ed.id}
                      style={{
                        borderBottom: "1px solid var(--border-subtle)",
                        transition: "background 0.2s ease",
                      }}
                    >
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "var(--accent-gold)" }}>
                        #{ed.number}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "var(--text-main)" }}>
                        {ed.title}
                      </td>
                      <td style={{ padding: "0.85rem 1rem" }}>
                        <span className={ed.status === "Próxima" ? "badge badge-purple" : "badge badge-gold"}>
                          {ed.status}
                        </span>
                      </td>
                      <td style={{ padding: "0.85rem 1rem", color: "var(--text-muted)" }}>
                        {ed.date}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", color: "var(--text-muted)" }}>
                        {ed.location} ({ed.city})
                      </td>
                      <td style={{ padding: "0.85rem 1rem", color: "var(--accent-gold)" }}>
                        📸 {ed.gallery.length}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", textAlign: "right" }}>
                        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                          <button
                            onClick={() => toggleEditionStatus(ed.slug)}
                            title="Cambiar Estado (Próxima / Realizada)"
                            style={{
                              background: "rgba(212, 175, 55, 0.1)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--accent-gold)",
                              borderRadius: "4px",
                              padding: "0.35rem 0.65rem",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                            }}
                          >
                            ⚡ Estado
                          </button>
                          <button
                            onClick={() => handleOpenEditModal(ed)}
                            title="Editar Datos"
                            style={{
                              background: "rgba(255, 255, 255, 0.08)",
                              border: "1px solid var(--border-subtle)",
                              color: "#fff",
                              borderRadius: "4px",
                              padding: "0.35rem 0.65rem",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                            }}
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => {
                              setSelectedGallerySlug(ed.slug);
                              setActiveTab("galeria");
                            }}
                            title="Gestionar Galería de Fotos"
                            style={{
                              background: "rgba(155, 109, 255, 0.15)",
                              border: "1px solid var(--border-subtle)",
                              color: "var(--text-main)",
                              borderRadius: "4px",
                              padding: "0.35rem 0.65rem",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                            }}
                          >
                            📸 Fotos
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`¿Estás seguro de eliminar la ${ed.title}?`)) {
                                deleteEdition(ed.slug);
                              }
                            }}
                            title="Eliminar Edición"
                            style={{
                              background: "rgba(220, 53, 69, 0.2)",
                              border: "1px solid rgba(220, 53, 69, 0.4)",
                              color: "#ff6b6b",
                              borderRadius: "4px",
                              padding: "0.35rem 0.65rem",
                              fontSize: "0.75rem",
                              cursor: "pointer",
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 2: GALERÍA MANAGEMENT */}
        {activeTab === "galeria" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Edition Picker Header */}
            <div
              className="glass-panel"
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <span className="badge badge-gold" style={{ marginBottom: "0.35rem" }}>
                  Seleccionar Edición
                </span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--text-main)" }}>
                  Galería de {currentGalleryEdition?.title} ({currentGalleryEdition?.gallery.length} fotos)
                </h2>
              </div>

              <select
                value={selectedGallerySlug}
                onChange={(e) => setSelectedGallerySlug(e.target.value)}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(20, 14, 10, 0.95)",
                  border: "1px solid var(--accent-gold)",
                  color: "var(--accent-gold)",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-serif)",
                  cursor: "pointer",
                }}
              >
                {editions.map((ed) => (
                  <option key={ed.id} value={ed.slug}>
                    {ed.title} ({ed.gallery.length} fotos)
                  </option>
                ))}
              </select>
            </div>

            {/* Add Photo Form */}
            <div
              className="glass-card-gold"
              style={{ padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--accent-gold)" }}
            >
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
                ✨ Agregar Nueva Foto a {currentGalleryEdition?.title}
              </h3>
              <form onSubmit={handleAddPhotoSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 120px", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                    Leyenda / Descripción
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Ritual de Cierre con Velas"
                    value={newPhotoCaption}
                    onChange={(e) => setNewPhotoCaption(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(10, 6, 4, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "0.85rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                    Etiqueta / Tag
                  </label>
                  <select
                    value={newPhotoTag}
                    onChange={(e) => setNewPhotoTag(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(10, 6, 4, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <option value="Feria">Feria</option>
                    <option value="Ritual">Ritual</option>
                    <option value="Artefactos">Artefactos</option>
                    <option value="Botánica">Botánica</option>
                    <option value="Música">Música</option>
                    <option value="Comunidad">Comunidad</option>
                  </select>
                </div>

                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", padding: "0.65rem", fontSize: "0.85rem", cursor: "pointer" }}
                  >
                    + Guardar
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Photos Grid */}
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--text-main)", marginBottom: "1rem" }}>
                Fotos Actuales ({currentGalleryEdition?.gallery.length})
              </h3>

              {currentGalleryEdition?.gallery.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {currentGalleryEdition.gallery.map((photo) => (
                    <div
                      key={photo.id}
                      className="glass-panel"
                      style={{
                        borderRadius: "var(--radius-sm)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <div style={{ height: "160px" }}>
                        <ImagePlaceholder height="100%" label="(Imagen)" />
                      </div>
                      <div style={{ padding: "0.85rem", background: "rgba(14, 10, 8, 0.95)" }}>
                        <span className="badge badge-gold" style={{ fontSize: "0.6rem", marginBottom: "0.25rem" }}>
                          {photo.tag || "Feria"}
                        </span>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-main)", marginTop: "0.25rem" }}>
                          {photo.caption || "Fotografía sin descripción"}
                        </p>
                        <button
                          onClick={() => deletePhotoFromEdition(currentGalleryEdition.slug, photo.id)}
                          style={{
                            marginTop: "0.65rem",
                            width: "100%",
                            padding: "0.35rem",
                            background: "rgba(220, 53, 69, 0.2)",
                            border: "1px solid rgba(220, 53, 69, 0.4)",
                            color: "#ff6b6b",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                          }}
                        >
                          🗑️ Eliminar Foto
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="glass-panel"
                  style={{ padding: "3rem", textAlign: "center", borderRadius: "var(--radius-sm)", color: "var(--text-muted)" }}
                >
                  <p>No hay fotografías registradas para esta edición.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* MODAL: CREATE / EDIT EDITION */}
        {isEditionModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
            onClick={() => setIsEditionModalOpen(false)}
          >
            <div
              className="glass-card-gold ornate-frame"
              style={{
                maxWidth: "700px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsEditionModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  color: "var(--accent-gold)",
                  marginBottom: "1.5rem",
                }}
              >
                {editingEdition ? `✏️ Editar ${editingEdition.title}` : "✨ Crear Nueva Edición"}
              </h2>

              <form onSubmit={handleSaveEdition} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Número de Edición
                    </label>
                    <input
                      type="number"
                      value={formNumber}
                      onChange={(e) => setFormNumber(Number(e.target.value))}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Título Oficial
                    </label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Estado
                    </label>
                    <select
                      value={formStatus}
                      onChange={(e) => setFormStatus(e.target.value as "Próxima" | "Realizada")}
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    >
                      <option value="Próxima">Próxima</option>
                      <option value="Realizada">Realizada</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Fecha (ej. 24 & 25 de Agosto, 2026)
                    </label>
                    <input
                      type="text"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Horario
                    </label>
                    <input
                      type="text"
                      value={formTime}
                      onChange={(e) => setFormTime(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Lugar / Sede
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Ciudad / Zona
                    </label>
                    <input
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Asistentes (ej. Esperados ~2,500)
                    </label>
                    <input
                      type="text"
                      value={formAttendees}
                      onChange={(e) => setFormAttendees(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                      Expositores / Marcas (ej. 55 Marcas)
                    </label>
                    <input
                      type="text"
                      value={formExhibitors}
                      onChange={(e) => setFormExhibitors(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "0.6rem",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(10, 6, 4, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                    Relato Histórico Completo
                  </label>
                  <textarea
                    rows={4}
                    value={formFullStory}
                    onChange={(e) => setFormFullStory(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(10, 6, 4, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                    Puntos Clave / Highlights (Separados por comas)
                  </label>
                  <input
                    type="text"
                    value={formHighlights}
                    onChange={(e) => setFormHighlights(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(10, 6, 4, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-main)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                  <button
                    type="button"
                    onClick={() => setIsEditionModalOpen(false)}
                    className="btn-secondary"
                    style={{ padding: "0.65rem 1.25rem", cursor: "pointer" }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: "0.65rem 1.5rem", cursor: "pointer" }}
                  >
                    {editingEdition ? "Actualizar Edición" : "Crear Edición"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
