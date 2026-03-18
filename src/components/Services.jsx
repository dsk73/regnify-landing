import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Code,
  AlertCircle,
  FileCheck,
  Sparkles,
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
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-cyan-600/5 group-hover:to-blue-600/10 transition-all duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
              <Icon className="w-7 h-7 text-blue-400" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

          {/* Description */}
          <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

          {/* Highlights */}
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
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Mutual Fund Filings",
      description:
        "Complete filing services for registered investment companies and mutual funds.",
      highlights: [
        "N-CSR (Certified Shareholder Reports)",
        "N-CEN (Annual Reports for Registered Investment Companies)",
        "N-PORT (Monthly Portfolio Holdings)",
        "485BPOS (Post-Effective Amendments)",
      ],
      delay: 0.1,
    },
    {
      icon: TrendingUp,
      title: "Corporate Filings",
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
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
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
