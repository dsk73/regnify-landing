import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { CoreCapabilities } from "./components/CoreCapabilities";
import { Services } from "./components/Services";
import { WhyRegnify } from "./components/WhyRegnify";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App bg-slate-950">
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
