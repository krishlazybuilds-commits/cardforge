"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function Privacy() {
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
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: June 5, 2026</p>

        <h2>1. Information We Collect</h2>
        <p>
          When you use CardForge, we may collect the following information:
        </p>
        <ul>
          <li>Account information (name, email address)</li>
          <li>Company information (company name, logo)</li>
          <li>Employee photos uploaded for card generation</li>
          <li>Usage data (pages visited, features used)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve our card generation service</li>
          <li>Process and generate employee celebration cards</li>
          <li>Send service-related communications</li>
          <li>Ensure platform security and prevent abuse</li>
        </ul>

        <h2>3. Data Storage & Security</h2>
        <p>
          Your data is stored on secure servers. Uploaded photos are processed
          for card generation and stored only as long as needed to provide the
          service. We use industry-standard encryption for data in transit and
          at rest.
        </p>

        <h2>4. Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with:
        </p>
        <ul>
          <li>Service providers who help us operate the platform</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Export your data</li>
          <li>Opt out of non-essential communications</li>
        </ul>

        <h2>6. Cookies</h2>
        <p>
          We use essential cookies for session management. We do not use
          third-party tracking cookies.
        </p>

        <h2>7. Contact</h2>
        <p>
          For privacy-related questions, reach out at{" "}
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
