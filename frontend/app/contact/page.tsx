"use client";

import { ArrowLeft, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:krish.lazybuilds@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
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
        <div className="nav-right">
          <a href="/" className="nav-link back-link">
            <ArrowLeft size={14} />
            Back
          </a>
        </div>
      </motion.nav>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.div
          className="contact-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <h1 className="contact-heading">
              Let&apos;s talk<span className="dot"></span>
            </h1>
            <p className="contact-description">
              I&apos;m building CardForge solo — whether you have feedback, want to
              collaborate, or just want to say hi, I&apos;d love to hear from you.
            </p>

            <div className="contact-links">
              <a href="mailto:krish.lazybuilds@gmail.com" className="contact-link-item">
                <Mail size={18} />
                <span>krish.lazybuilds@gmail.com</span>
              </a>
              <a
                href="https://github.com/krishlazybuilds-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/krishlazybuilds-commits</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            {submitted ? (
              <div className="contact-success">
                <p>Your email client should have opened. Thanks for reaching out!</p>
                <a href="/" className="btn-primary" style={{ marginTop: 20 }}>
                  Back to home
                  <ArrowLeft size={16} />
                </a>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit">
                  Send message
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
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
