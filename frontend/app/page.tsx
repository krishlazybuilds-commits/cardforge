"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Preloader from "./preloader";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Preloader>
      <main className="landing">
      {/* Nav */}
      <motion.nav
        className="topnav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <a className="logo" href="/">
          <img src="/icon.svg" alt="" width={28} height={28} />
          CardForge
        </a>

        {/* Desktop links */}
        <div className="nav-right">
          <a href="/contact" className="nav-link">
            Contact
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
      </motion.nav>

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
            href="/contact"
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
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
        <motion.div
          className="hero-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
        >
          <motion.p
            className="kicker"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            For HR and people teams
          </motion.p>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Branded employee cards,
            <br />
            <em>generated in minutes.</em>
          </motion.h1>
          <motion.p
            className="subtitle"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            Drop in a photo. Pick a template. Our AI crops the portrait,
            fits it to the layout, and exports a social-ready image.
            No designer needed.
          </motion.p>
          <motion.div
            className="cta-row"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <a href="mailto:hello@cardforge.ai" className="btn-primary">
              Sign up
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="showcase">
            <div className="card-generated">
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
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="site-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <span className="footer-brand">CardForge AI</span>
        <div className="footer-right">
          <span className="footer-copy">© 2026</span>
        </div>
      </motion.footer>
    </main>
    </Preloader>
  );
}
