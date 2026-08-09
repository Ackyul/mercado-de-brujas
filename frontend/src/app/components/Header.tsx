"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Historia" },
    { href: "/origenes", label: "Orígenes" },
    { href: "/ediciones", label: "Ediciones" },
    { href: "/galeria", label: "Galería" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled
          ? "rgba(14, 10, 8, 0.97)"
          : "rgba(14, 10, 8, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(201, 164, 90, 0.35)" : "rgba(201, 164, 90, 0.12)"}`,
        transition: "all 0.35s ease",
        padding: "0.9rem 2rem",
      }}
    >
      {/* Subtle top accent line */}
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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.85rem", textDecoration: "none" }}>
          {/* Moon sigil */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(201, 164, 90, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              background: "radial-gradient(circle, rgba(40, 30, 15, 0.9), rgba(15, 10, 5, 0.95))",
              boxShadow: "0 0 12px rgba(201, 164, 90, 0.2)",
              flexShrink: 0,
            }}
          >
            🌙
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                display: "block",
                lineHeight: 1.1,
                color: "var(--accent-cream)",
                textTransform: "uppercase",
              }}
            >
              Mercado de Brujas
            </span>
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                display: "block",
                fontFamily: "var(--font-serif)",
                opacity: 0.8,
              }}
            >
              ✦ Aquelarre · Historia & Ferias ✦
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
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
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.45rem 0.85rem",
                  borderRadius: "2px",
                  backgroundColor: isActive
                    ? "rgba(201, 164, 90, 0.1)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(201, 164, 90, 0.3)"
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/mercado_brujas/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ padding: "0.4rem 0.9rem", fontSize: "0.72rem", borderRadius: "2px" }}
        >
          📸 Instagram
        </a>
      </div>
    </header>
  );
}
