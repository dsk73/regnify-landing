import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Linkedin, Twitter } from "lucide-react";

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
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Regnify</h3>
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
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
              </motion.a>

              <motion.a
                href="mailto:info@regnify.com"
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
                { label: "SEC EDGAR Filing", link: "#services" },
                { label: "XBRL Tagging", link: "#services" },
                { label: "Compliance Review", link: "#services" },
                { label: "Amendment Support", link: "#services" },
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

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {[
                { label: "Mutual Funds", link: "#expertise" },
                { label: "Asset Managers", link: "#expertise" },
                { label: "Public Companies", link: "#expertise" },
                { label: "Fund Administrators", link: "#expertise" },
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
              © {currentYear} Regnify. All rights reserved.
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
