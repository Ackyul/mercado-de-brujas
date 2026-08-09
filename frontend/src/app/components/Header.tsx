"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Historia" },
    { href: "/origenes", label: "Orígenes" },
    { href: "/ediciones", label: "Ediciones de la Feria" },
    { href: "/galeria", label: "Recopilación Fotográfica" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(30, 19, 13, 0.92)" : "rgba(30, 19, 13, 0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid " + (scrolled ? "var(--border-glow)" : "var(--border-subtle)"),
        transition: "all 0.3s ease",
        padding: "0.85rem 2rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent-brown), var(--accent-gold))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              boxShadow: "0 0 15px rgba(224, 169, 109, 0.35)",
            }}
          >
            🌙
          </div>
          <div>
            <span
              className="text-gradient"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "0.02em",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              MERCADO DE BRUJAS
            </span>
            <span
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.16em",
                color: "var(--accent-gold)",
                textTransform: "uppercase",
                display: "block",
                fontWeight: 700,
              }}
            >
              ✦ Historia & Ferias Pop-Up ✦
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.6rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "var(--accent-gold)" : "var(--text-main)",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  fontWeight: isActive ? 800 : 600,
                  padding: "0.25rem 0.5rem",
                  borderRadius: "6px",
                  backgroundColor: isActive ? "rgba(224, 169, 109, 0.15)" : "transparent",
                  border: isActive ? "1px solid rgba(224, 169, 109, 0.3)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Instagram */}
        <div>
          <a
            href="https://www.instagram.com/mercado_brujas/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "0.45rem 0.95rem",
              fontSize: "0.82rem",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            <span>📸 Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
