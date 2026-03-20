import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <img
                    src="/logo.png"
                    alt="CONFIAM LLC Logo"
                    className="h-9 w-auto"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white">CONFIAM LLC</h3>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-md">
                Premium SEC EDGAR and XBRL reporting services for mutual funds
                and corporate issuers. Trusted partner for regulatory
                compliance.
              </p>
            </motion.div>

            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
  2.239 5 5 5h14c2.761 0 5-2.239 
  5-5v-14c0-2.761-2.239-5-5-5zm-11 
  19h-3v-11h3v11zm-1.5-12.268c-.966 
  0-1.75-.784-1.75-1.75s.784-1.75 
  1.75-1.75 1.75.784 1.75 1.75-.784 
  1.75-1.75 1.75zm13.5 
  12.268h-3v-5.604c0-1.337-.026-3.058-1.865-3.058-1.867 
  0-2.153 1.459-2.153 
  2.963v5.699h-3v-11h2.881v1.507h.041c.401-.759 
  1.379-1.558 2.837-1.558 3.034 0 
  3.594 1.997 3.594 4.59v6.461z"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.356-6.993L3.8 
  22H1l7.02-8.02L2 2h6.828l4.868 
  6.438L18.244 2zm-2.396 
  18h1.885L7.656 4H5.58l10.268 16z"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="mailto:info@confiamllc.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Mutual Fund Services", link: "#services" },
                { label: "Corporate Services", link: "#services" },
                { label: "XBRL & iXBRL Tagging", link: "#services" },
                { label: "SEC Error Resolution", link: "#services" },
                { label: "Filing Readiness", link: "#services" },
              ].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }}>
                  <a
                    href={item.link}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ✅ NEW: Core Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Core Expertise</h4>
            <ul className="space-y-3">
              {[
                { label: "EDGAR HTML Conversion", link: "#expertise" },
                { label: "XBRL & iXBRL Tagging", link: "#expertise" },
                { label: "Pre-filing QA Review", link: "#expertise" },
                { label: "Urgent Deadline Support", link: "#expertise" },
                { label: "PDF Accessibility", link: "#expertise" },
              ].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }}>
                  <a
                    href={item.link}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} CONFIAM LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
