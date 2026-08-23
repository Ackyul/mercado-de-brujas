"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Hogar" },
  { href: "/ediciones", label: "Próximos encuentros" },
  { href: "/se-parte", label: "Se parte.." },
  { href: "/la-ruta", label: "La ruta" },
  { href: "/comunidad", label: "Comunidad" },
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
          backgroundColor: scrolled ? "rgba(6, 5, 10, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(168, 85, 247, 0.3)" : "transparent"}`,
          transition: "all 0.35s ease",
          padding: "1.75rem 1rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top Centered Brand Logo (Mercado de Brujas Official Gothic Logo) */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            marginBottom: "0.5rem",
          }}
        >
          <img
            src="/logo-white-trans.png"
            alt="Mercado de Brujas"
            style={{
              height: "clamp(70px, 13vw, 115px)",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </Link>

        {/* Centered Navigation Row with Vertical Dividers (Mercado de Brujas Style) */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
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
                      color: "rgba(168, 85, 247, 0.4)",
                      fontSize: "0.8rem",
                      userSelect: "none",
                      padding: "0 0.1rem",
                    }}
                  >
                    |
                  </span>
                )}
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: isActive ? "#ffffff" : "#a1a1aa",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 700 : 400,
                    letterSpacing: "0.08em",
                    padding: "0.25rem 0.5rem",
                    transition: "all 0.2s ease",
                    borderBottom: isActive ? "1px solid #c084fc" : "1px solid transparent",
                    textShadow: isActive ? "0 0 12px rgba(192, 132, 252, 0.8)" : "none",
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
