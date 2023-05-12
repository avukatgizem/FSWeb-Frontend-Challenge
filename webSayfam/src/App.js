import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages_tr from "./translations/tr.json";
import messages_en from "./translations/en.json";
import DarkMode from "./components/DarkMode"
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css"

const messages = {
  tr: messages_tr,
  en: messages_en,
};

const App = () => {
  const [locale, setLocale] = useState(navigator.language);

  const handleLocaleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
      <select class="language-select" value={locale} onChange={handleLocaleChange}>
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
      </select>
      <DarkMode/>
      <Header />
      <Bio />            
      <Skills />
      <Profile />
      <Projects />
        <Footer />
      </div>
    </IntlProvider>
  );
};


export default App;