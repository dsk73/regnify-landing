import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 🔥 Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.2),transparent_50%)]" />

      {/* 🔥 Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-sm text-blue-300 font-medium">
              Trusted by US Financial Leaders
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            SEC EDGAR & XBRL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Reporting — Simplified
            </span>
            <br />
            with Precision
          </h1>

          <p className="text-xl text-slate-300">
            CONFIAM LLC delivers high-accuracy, deadline-driven SEC EDGAR and
            XBRL reporting services.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl hover:scale-105 transition">
              Request a Consultation
            </Button>

            <Button
              variant="outline"
              className="border-slate-600 text-white bg-slate-900/40 hover:bg-slate-800 hover:text-white px-6 py-4 rounded-xl"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1644088379091-d574269d422f"
            alt="visual"
            className="rounded-2xl shadow-2xl border border-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
};
