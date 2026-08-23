"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ediciones", label: "Events" },
  { href: "/origenes", label: "Spill the Magick" },
  { href: "#se-parte", label: "Vendor Apps" },
  { href: "#contacto", label: "Contact" },
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
          backgroundColor: scrolled ? "rgba(59, 65, 45, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: `1px solid ${scrolled ? "rgba(226, 216, 199, 0.2)" : "transparent"}`,
          transition: "all 0.35s ease",
          padding: "1.75rem 1rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top Centered Brand Logo (Magic Market Style) */}
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            marginBottom: "0.85rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ color: "#d8cebe", fontSize: "0.85rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#f2ede4",
                textTransform: "uppercase",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              MAGIC MARKET
            </span>
            <span style={{ color: "#d8cebe", fontSize: "0.85rem" }}>✦</span>
          </div>
        </Link>

        {/* Centered Navigation Row with Vertical Dividers (Magic Market Style) */}
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
                      color: "rgba(226, 216, 199, 0.35)",
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
                    color: isActive ? "#ffffff" : "#d8cebe",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 700 : 400,
                    letterSpacing: "0.08em",
                    padding: "0.25rem 0.5rem",
                    transition: "all 0.2s ease",
                    borderBottom: isActive ? "1px solid #f2ede4" : "1px solid transparent",
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
