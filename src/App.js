import "./App.css";
import React, { useState, useEffect } from "react";

import Head from "./components/header/Head";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/project/project";
import enTranslations from "./components/langue/en.json";
import frTranslations from "./components/langue/fr.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply or remove the dark mode class on the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };
  const translations = language === "en" ? enTranslations : frTranslations;
  return (
    <>
      <Head translations={translations.nav} />

      <div className="switchBtn">
        <button className="modeSwitch" onClick={toggleDarkMode}>
          <i className={`uil ${darkMode ? "uil-sun" : "uil-moon"}`} />
        </button>
        <button className="langSwitch" onClick={toggleLanguage}>
          <i className="uil  uil-globe"></i>
       
        </button>
      </div>

      <main className="main">
        <Home translations={translations.data} />
        <div id="gri" className="gridd">
          <div
            style={{ display: "flex", gap: "50px", flexDirection: "column" }}
          >
            <About translations={translations.about} />
            <Qualification translations={translations.resume} />
            <Skills translations={translations.skills} />
            <Services darkMode={darkMode} translations={translations.service} />

            <Project translations={translations.project} />
            <Contact translations={translations.contact} />
          </div>
        </div>
      </main>

      <Footer translations={translations.nav} Myname={translations.data.myName} />
      <ScrollUp />
    </>
  );
}

export default App;
