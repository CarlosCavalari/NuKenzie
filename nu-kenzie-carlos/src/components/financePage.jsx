import { useState } from "react";
import { FinanceSection } from "./financeSection.jsx";
import { Header } from "./header.jsx";
import { SetFinance } from "./setFinance.jsx";
export function FinancePage({ page }) {
  const [financesList, setFinancesList] = useState([]);
  return (
    <div>
      <Header page={page} />
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
