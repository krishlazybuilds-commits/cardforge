"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="landing">
      {/* Nav */}
      <nav className="topnav">
        <a className="logo" href="/">
          <img src="/icon.svg" alt="" width={28} height={28} />
          CardForge
        </a>

        {/* Desktop links */}
        <div className="nav-right">
          <a href="mailto:hello@cardforge.ai" className="nav-link">
            How it works
          </a>
          <a href="mailto:hello@cardforge.ai" className="nav-link">
            Pricing
          </a>
          <a href="mailto:hello@cardforge.ai" className="nav-link">
            Sign in
          </a>
          <a href="mailto:hello@cardforge.ai" className="nav-cta">
            Sign up
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Navigation menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <a
            href="mailto:hello@cardforge.ai"
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="mailto:hello@cardforge.ai"
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="mailto:hello@cardforge.ai"
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </a>
          <a
            href="mailto:hello@cardforge.ai"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Sign up
            <ArrowRight size={16} />
          </a>
        </div>
      )}

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="kicker">For HR and people teams</p>
          <h1>
            Branded employee cards,
            <br />
            <em>generated in minutes.</em>
          </h1>
          <p className="subtitle">
            Drop in a photo. Pick a template. Our AI crops the portrait,
            fits it to the layout, and exports a social-ready image.
            No designer needed.
          </p>
          <div className="cta-row">
            <a href="mailto:hello@cardforge.ai" className="btn-primary">
              Sign up
              <ArrowRight size={16} />
            </a>
            <p className="cta-note">Free for teams under 50 employees</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="showcase">
            <div className="card-generated">
              <div className="card-top-accent" />
              <div className="card-inner">
                <div className="card-photo-area">
                  <div className="photo-placeholder" />
                  <svg
                    className="crop-marks"
                    viewBox="0 0 100 100"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M0 20 L0 0 L20 0" stroke="currentColor" strokeWidth="2" />
                    <path d="M80 0 L100 0 L100 20" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 80 L100 100 L80 100" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 80 L0 100 L20 100" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="card-copy">
                  <span className="card-occasion">5-Year Anniversary</span>
                  <strong className="card-person">Aarav Mehta</strong>
                  <span className="card-role">Sr. Engineer, Platform</span>
                </div>
                <div className="card-brand-bar">
                  <div className="brand-logo-placeholder" />
                  <span>Company Name</span>
                </div>
              </div>
            </div>
            <div className="card-behind" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <span className="footer-brand">CardForge AI</span>
        <div className="footer-right">
          <span className="footer-copy">© 2026</span>
        </div>
      </footer>
    </main>
  );
}
