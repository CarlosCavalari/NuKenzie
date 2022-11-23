import React from "react";
import ReactDOM from "react-dom/client";
import "./components/initialPage/index.css";
import "./mobileFirst.css";
import "./globalStyles.css";
import "./components/financePage/financePage.css";
import "./buttons.css";
import "./components/financePage/input.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
