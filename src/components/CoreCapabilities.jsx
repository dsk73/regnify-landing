import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckSquare, Search, Zap } from "lucide-react";

const CapabilityCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, rotateY: 5 }}
      className="relative group"
    >
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] group-hover:blur-[80px] transition-all duration-500" />

        <div className="relative z-10">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>

        {/* Bottom glow bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/60 to-transparent transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: FileText,
      title: "EDGAR HTML Conversion",
      description:
        "End-to-end EDGAR HTML conversion and submission services, ensuring accurate formatting, compliance with SEC standards, and timely, error-free regulatory filings.",
      delay: 0.1,
    },
    {
      icon: CheckSquare,
      title: "XBRL & iXBRL Tagging",
      description:
        "Expert XBRL and iXBRL tagging with comprehensive validation against US GAAP taxonomy standards.",
      delay: 0.2,
    },
    {
      icon: Search,
      title: "Pre-filing QA Review",
      description:
        "Rigorous compliance reviews and quality assurance checks to ensure error-free submissions.",
      delay: 0.3,
    },
    {
      icon: Zap,
      title: "Urgent Deadline Support",
      description:
        "Rapid turnaround for amendments and urgent filing deadlines with dedicated priority handling.",
      delay: 0.4,
    },
    {
      icon: FileText,
      title: "PDF Accessibility",
      description:
        "ADA-compliant PDF tagging to ensure accessibility standards for regulatory and investor documents.",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive regulatory reporting services designed for precision
            and compliance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 ">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={index} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
};
