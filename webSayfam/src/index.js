import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import messages_tr from "./translations/tr.json";
import messages_en from "./translations/en.json";

const locale = navigator.language;
const messages = locale.startsWith("tr")
  ? messages_tr
  : messages_en;

/*ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={locale} messages={messages}>
    <App />
    </IntlProvider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
