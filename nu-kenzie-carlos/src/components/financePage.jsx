import { useState } from "react";
import { FinanceSection } from "./financeSection.jsx";
import { SetFinance } from "./setFinance.jsx";
export function FinancePage({ page }) {
  const [lista, setLista] = useState([]);
  return (
    <div>
      <header>
        <div className="top">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button className="default-btn" onClick={() => page(true)}>
            Início
          </button>
        </div>
      </header>
      <main className="finance-container main-container">
        <SetFinance lista={lista} setLista={setLista} />
        <FinanceSection lista={lista} setLista={setLista} />
      </main>
    </div>
  );
}
