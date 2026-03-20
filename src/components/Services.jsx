import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Code,
  AlertCircle,
  FileCheck,
  Sparkles,
  FileText,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, highlights, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
        {/* Hover glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Icon className="w-7 h-7 text-cyan-400" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

          <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Mutual Fund Services",
      description:
        "Complete filing services for registered investment companies and mutual funds.",
      highlights: [
        "N-CSR (Certified Shareholder Reports)",
        "DEF 14A (Proxy Statements)",
        "485BPOS (Post-Effective Amendments)",
        "486BPOS (Post-Effective Amendments)",
      ],
      delay: 0.1,
    },
    {
      icon: TrendingUp,
      title: "Corporate Services",
      description:
        "Comprehensive SEC filing solutions for public companies and corporate issuers.",
      highlights: [
        "10-K (Annual Reports)",
        "10-Q (Quarterly Reports)",
        "8-K (Current Reports)",
        "S-1 (Registration Statements)",
      ],
      delay: 0.2,
    },
    {
      icon: Code,
      title: "XBRL & iXBRL Tagging",
      description:
        "Expert structured data tagging with full validation and compliance checks.",
      highlights: [
        "US GAAP taxonomy compliance",
        "Inline XBRL (iXBRL) conversion",
        "Extension element creation",
        "SEC validation & error resolution",
      ],
      delay: 0.3,
    },
    {
      icon: AlertCircle,
      title: "SEC Error Resolution",
      description:
        "Fast and accurate resolution of SEC filing errors and amendment support.",
      highlights: [
        "EDGAR error troubleshooting",
        "Filing amendments (10-K/A, 10-Q/A)",
        "Suspension resolution",
        "Technical error fixes",
      ],
      delay: 0.4,
    },
    {
      icon: FileCheck,
      title: "Filing Readiness",
      description:
        "Pre-filing compliance reviews to ensure submission accuracy and timeliness.",
      highlights: [
        "Pre-submission QA checks",
        "Compliance validation",
        "Document formatting review",
        "Deadline management",
      ],
      delay: 0.5,
    },

    // ✅ NEW CARD (ADA TAGGING)
    {
      icon: FileText,
      title: "PDF Accessibility",
      description:
        "ADA-compliant PDF tagging services to ensure accessibility standards for regulatory filings and investor communications.",
      highlights: [
        "WCAG & ADA compliance",
        "Screen reader compatibility",
        "Tagged PDF structure",
        "Accessibility validation",
      ],
      delay: 0.6,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* ✅ SAME BACKGROUND AS INDUSTRY SECTION */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            End-to-end SEC regulatory reporting solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
