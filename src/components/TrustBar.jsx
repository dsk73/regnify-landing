import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const StatCard = ({ icon: Icon, value, label, delay }) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value);

  useEffect(() => {
    if (isNaN(targetValue)) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group"
    >
      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <p className="text-3xl font-bold text-white">
          {isNaN(targetValue) ? value : `${count}+`}
        </p>
        <p className="text-sm text-slate-400">{label}</p>
      </div>
    </motion.div>
  );
};

export const TrustBar = () => {
  const stats = [
    { icon: Award, value: "12", label: "Years Experience", delay: 0.1 },
    { icon: Shield, value: "500", label: "Filings Completed", delay: 0.2 },
    { icon: Users, value: "US GAAP", label: "Expertise", delay: 0.3 },
    { icon: TrendingUp, value: "99.8", label: "% Accuracy Rate", delay: 0.4 },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Leading Firms
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Delivering excellence in regulatory reporting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
