"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Hogar" },
  { href: "/ediciones", label: "Próximos encuentros" },
  { href: "#se-parte", label: "Sé parte" },
  { href: "/origenes", label: "La ruta" },
  { href: "#comunidad", label: "Comunidad" },
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
          position: "relative",
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(5, 5, 7, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(255, 255, 255, 0.15)" : "transparent"}`,
          transition: "all 0.35s ease",
          padding: "1.5rem 1rem 0.8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Accent top line on scroll */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 30%, rgba(168, 85, 247, 0.6) 70%, transparent 100%)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* ── Top Centered Brand Logo (Magic Market Style) ── */}
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3.8vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#ffffff",
                textTransform: "uppercase",
                textShadow: "0 0 25px rgba(255, 255, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.4)",
              }}
            >
              MERCADO DE BRUJAS
            </span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>✦</span>
          </div>
        </Link>

        {/* ── Centered Navigation Row with Vertical Dividers (Magic Market Style) ── */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <React.Fragment key={link.href}>
                {idx > 0 && (
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.3)",
                      fontSize: "0.75rem",
                      userSelect: "none",
                      padding: "0 0.15rem",
                    }}
                  >
                    |
                  </span>
                )}
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.08em",
                    padding: "0.35rem 0.5rem",
                    transition: "all 0.2s ease",
                    borderBottom: isActive ? "1px solid #ffffff" : "1px solid transparent",
                    textShadow: isActive ? "0 0 10px rgba(255,255,255,0.6)" : "none",
                  }}
                >
                  {link.label}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.25rem",
            zIndex: 300,
          }}
        >
          <span />
          <span />
          <span />
        </button>
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
