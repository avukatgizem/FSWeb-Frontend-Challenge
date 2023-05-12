
import React from "react";
import { useState, useEffect } from "react";

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "light" ? false : true
  );

  useEffect(() => {
    if (
      localStorage.darkMode === "dark" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme :dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    setDarkMode(darkMode === false ? true : false);
    if (darkMode === false) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="modeSwitch">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={darkMode === false ? false : true}
          />
          <span className="slider round"></span>
        </label>
        <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
        <div className="modeText">|</div>
        <div className="modeText">
          <span id="lang">TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
    </div>
  );
}