"use client";

import { ArrowLeft, Mail, Globe, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Preloader from "../preloader";

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
    window.location.href = `mailto:hello@cardforge.ai?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Preloader title="Get in Touch" tagline="I'd love to hear from you">
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
              <a href="mailto:hello@cardforge.ai" className="contact-link-item">
                <Mail size={18} />
                <span>hello@cardforge.ai</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <Globe size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <Globe size={18} />
                <span>LinkedIn</span>
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
    </Preloader>
  );
}
