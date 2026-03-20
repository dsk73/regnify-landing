import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, DollarSign, Handshake } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-800/70 to-slate-900/90 backdrop-blur-md border border-slate-700/60 hover:border-blue-500/60 transition-all duration-500 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glowing orb */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-all duration-500" />

        <div className="relative z-10">
          <div className="mb-6">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
              <Icon className="w-8 h-8 text-blue-300" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyRegnify = () => {
  const features = [
    {
      icon: Star,
      title: "Regulatory Expertise",
      description:
        "Work directly with experienced professionals who understand the nuances of regulatory reporting, not junior staff.",
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description:
        "Clear, responsive communication with full accountability. No layers of management between you and our experts.",
      delay: 0.2,
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient Excellence",
      description:
        "Premium quality services at competitive rates through our efficient offshore delivery model.",
      delay: 0.3,
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We build lasting relationships with our clients, becoming a trusted extension of your compliance team.",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6"
          >
            <Star className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">
              The Regnify Difference
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Regnify
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A boutique approach to regulatory reporting with enterprise-grade
            quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30">
            <p className="text-2xl font-bold text-white mb-2">
              12+ Years of Trusted Excellence
            </p>
            <p className="text-lg text-slate-300">
              Serving US financial firms with precision and reliability
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
