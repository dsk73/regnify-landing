import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building, Target } from "lucide-react";

export const IndustryExpertise = () => {
  const industries = [
    {
      icon: Briefcase,
      title: "Asset Managers",
      description:
        "Specialized support for investment management firms handling complex regulatory requirements",
    },
    {
      icon: Building,
      title: "Fund Administrators",
      description:
        "Comprehensive filing services for fund administration and custody operations",
    },
    {
      icon: Target,
      title: "Public Companies",
      description:
        "Expert guidance for corporate issuers navigating SEC disclosure obligations",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Animated background particles */}
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

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Industry{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep domain knowledge across the financial services landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon; // ✅ correct placement

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, rotateZ: 1 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-10 h-10 text-cyan-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {industry.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
