import React from "react";
import ReactDOM from "react-dom/client";
import "./components/financePage/blankList/blankList.css";
import "./components/financePage/filterButtons/buttons.css";
import "./components/financePage/filterButtons/input.css";
import "./components/financePage/financePage/financePage.css";
import "./components/financePage/financeSection/financeSection.css";
import "./components/financePage/formContainer/formContainer.css";
import "./components/financePage/header/header.css";
import "./components/financePage/totalMoney/totalMoney.css";
import "./components/initialPage/brandSide/index.css";
import "./components/initialPage/decorationSide/decoration.css";
import "./mobileFirst.css";
import "./globalStyles.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
