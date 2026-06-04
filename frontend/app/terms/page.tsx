"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function Terms() {
  return (
    <main className="landing">
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

      <motion.section
        className="legal-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: June 5, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using CardForge, you agree to be bound by these Terms
          of Service. If you do not agree, do not use the service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          CardForge is an AI-powered platform that generates branded employee
          celebration cards. We provide template selection, AI portrait
          cropping, and image export functionality.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You are responsible for maintaining the security of your account
          credentials. You must provide accurate information when creating an
          account. You are responsible for all activity under your account.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Upload content that violates any law or infringes rights</li>
          <li>Use the service to harass, abuse, or harm others</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Use the service for any illegal purpose</li>
          <li>Resell or redistribute the service without permission</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          You retain ownership of content you upload (photos, logos). Cards
          generated using our templates are licensed for your internal business
          use. The CardForge platform, templates, and AI models remain our
          property.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          CardForge is provided &ldquo;as is&rdquo; without warranties of any kind. We
          are not liable for any indirect, incidental, or consequential damages
          arising from your use of the service.
        </p>

        <h2>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms. You may delete your account at any time by contacting us.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the
          service after changes constitutes acceptance of the new terms.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about these terms? Reach out at{" "}
          <a href="mailto:krish.lazybuilds@gmail.com">krish.lazybuilds@gmail.com</a>.
        </p>
      </motion.section>

      <footer className="site-footer">
        <span className="footer-brand">CardForge AI</span>
        <div className="footer-right">
          <span className="footer-copy">© 2026</span>
        </div>
      </footer>
    </main>
  );
}
