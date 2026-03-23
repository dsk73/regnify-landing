import React from "react";
import { motion } from "framer-motion";

export const Privacy = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden overflow-x-hidden">
      {/* Background effects (same feel as other sections) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      <div className="hidden md:block absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="hidden md:block absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Policy
            </span>
          </h1>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          {/* Card wrapper function style */}
          {[
            {
              title: "1. Introduction",
              content:
                "CONFIAM LLC (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.",
            },
            {
              title: "2. Information We Collect",
              content:
                "We may collect personal information such as your name, email address, company details, and any information you provide through our contact form or communications with us.",
            },
            {
              title: "3. How We Use Your Information",
              list: [
                "To respond to inquiries and provide requested services",
                "To improve our website and user experience",
                "To communicate updates, insights, and relevant service information",
              ],
            },
            {
              title: "4. Data Security",
              content:
                "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.",
            },
            {
              title: "5. Third-Party Services",
              content:
                "We may use trusted third-party services such as Formspree to process contact form submissions. These providers operate under their own privacy policies.",
            },
            {
              title: "6. Your Rights",
              content:
                "You have the right to access, update, or request deletion of your personal information. You may contact us at any time to exercise these rights.",
            },
            {
              title: "7. Contact Us",
              content:
                "If you have any questions regarding this Privacy Policy or our data practices, please reach out to us at:",
              email: "info@confiamllc.com",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-slate-300">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.email && (
                <p className="text-white font-medium mt-4">{section.email}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
