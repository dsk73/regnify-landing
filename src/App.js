import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { CoreCapabilities } from "./components/CoreCapabilities";
import { Services } from "./components/Services";
import { WhyRegnify } from "./components/WhyRegnify";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { Privacy } from "./pages/Privacy"; // 👈 new page
import { Terms } from "./pages/Terms";

import { ScrollToTop } from "./components/ScrollToTop";

// ✅ Home page layout (your current structure)
function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />

      <div id="expertise">
        <CoreCapabilities />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <WhyRegnify />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

// ✅ App with routing
function App() {
  return (
    <Router>
      <div className="App bg-slate-950">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
