import { useState } from "react";
import { FinanceSection } from "./financeSection.jsx";
import { SetFinance } from "./setFinance.jsx";
export function FinancePage({ page }) {
  const [financesList, setFinancesList] = useState([]);
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
        <SetFinance
          financesList={financesList}
          setFinancesList={setFinancesList}
        />
        <FinanceSection
          financesList={financesList}
          setFinancesList={setFinancesList}
        />
      </main>
    </div>
  );
}
