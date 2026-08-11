"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Historia" },
  { href: "/origenes", label: "Orígenes" },
  { href: "/ediciones", label: "Ediciones" },
  { href: "/galeria", label: "Galería" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(14, 10, 8, 0.97)" : "rgba(14, 10, 8, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "rgba(201, 164, 90, 0.35)" : "rgba(201, 164, 90, 0.12)"}`,
          transition: "all 0.35s ease",
          padding: "0.9rem 1.25rem",
        }}
      >
        {/* Gold accent top line on scroll */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201, 164, 90, 0.6) 30%, rgba(153, 102, 204, 0.4) 70%, transparent 100%)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 164, 90, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.15rem",
                background: "radial-gradient(circle, rgba(40, 30, 15, 0.9), rgba(15, 10, 5, 0.95))",
                boxShadow: "0 0 10px rgba(201, 164, 90, 0.18)",
                flexShrink: 0,
              }}
            >
              🌙
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "block",
                  lineHeight: 1.1,
                  color: "var(--accent-cream)",
                  textTransform: "uppercase",
                }}
              >
                Mercado de Brujas
              </span>
              <span
                className="hide-mobile"
                style={{
                  fontSize: "0.56rem",
                  letterSpacing: "0.18em",
                  color: "var(--accent-gold)",
                  textTransform: "uppercase",
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  opacity: 0.75,
                }}
              >
                ✦ Aquelarre · Historia & Ferias ✦
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: isActive ? "var(--accent-gold)" : "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "2px",
                    backgroundColor: isActive ? "rgba(201, 164, 90, 0.1)" : "transparent",
                    border: isActive ? "1px solid rgba(201, 164, 90, 0.3)" : "1px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://www.instagram.com/mercado_brujas/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary desktop-cta"
            style={{ padding: "0.4rem 0.9rem", fontSize: "0.7rem", borderRadius: "2px" }}
          >
            📸 Instagram
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            style={{ position: "relative", zIndex: 300 }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu overlay */}
      <div
        className={`mobile-menu-overlay${menuOpen ? " open" : ""}`}
        style={{ zIndex: 200 }}
        aria-hidden={!menuOpen}
      >
        {/* Brand inside overlay */}
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <span style={{ fontSize: "2rem" }}>🌙</span>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
              marginTop: "0.5rem",
              opacity: 0.7,
            }}
          >
            ✦ Aquelarre ✦
          </p>
        </div>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${isActive ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}

        <a
          href="https://www.instagram.com/mercado_brujas/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: "2rem", width: "100%", justifyContent: "center" }}
          onClick={() => setMenuOpen(false)}
        >
          📸 @mercado_brujas
        </a>
      </div>
    </>
  );
}
