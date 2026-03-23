import React from "react";
import { motion } from "framer-motion";

export const Terms = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden overflow-x-hidden">
      {/* Background (same style) */}
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
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Service
            </span>
          </h1>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing or using the services provided by CONFIAM LLC, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
            },
            {
              title: "2. Services Overview",
              content:
                "CONFIAM LLC provides SEC EDGAR filing, XBRL tagging, and related regulatory reporting services. All services are subject to agreed timelines, scope, and compliance requirements.",
            },
            {
              title: "3. User Responsibilities",
              list: [
                "Provide accurate and complete information",
                "Ensure timely submission of required documents",
                "Comply with applicable laws and regulations",
              ],
            },
            {
              title: "4. Intellectual Property",
              content:
                "All content, branding, and materials on this website are the property of CONFIAM LLC unless otherwise stated. Unauthorized use or reproduction is prohibited.",
            },
            {
              title: "5. Confidentiality",
              content:
                "We maintain strict confidentiality of client data and documents. All information shared with us will be handled securely and used only for service delivery purposes.",
            },
            {
              title: "6. Limitation of Liability",
              content:
                "CONFIAM LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the extent permitted by law.",
            },
            {
              title: "7. Third-Party Services",
              content:
                "We may rely on third-party tools or platforms to deliver services. We are not responsible for the performance or policies of such third parties.",
            },
            {
              title: "8. Termination",
              content:
                "We reserve the right to suspend or terminate services if there is a breach of these terms or misuse of our services.",
            },
            {
              title: "9. Changes to Terms",
              content:
                "We may update these Terms of Service from time to time. Continued use of our services after updates constitutes acceptance of the revised terms.",
            },
            {
              title: "10. Contact Information",
              content:
                "For any questions regarding these Terms, please contact us at:",
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
