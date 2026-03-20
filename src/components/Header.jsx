import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ UPDATED NAV ITEMS (removed Expertise)
  const navItems = [
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // ✅ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo → scroll to top */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="CONFIAM LLC Logo"
              className="h-9 w-auto"
            />
            <span className="text-2xl font-bold text-white">CONFIAM LLC</span>
          </motion.div>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* ✅ CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50"
      >
        <nav className="px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() => scrollToSection("#contact")}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 mt-4"
          >
            Get Started
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
};
