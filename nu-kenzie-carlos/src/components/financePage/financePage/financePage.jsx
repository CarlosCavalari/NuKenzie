import { useState } from "react";
import { Header } from "../header/header";
import { FinanceSection } from "../financeSection/financeSection";
import { SetFinance } from "../formContainer/setFinance";
export function FinancePage({ page }) {
  const [financesList, setFinancesList] = useState([]);
  const [atualValue, setTotalValue] = useState(0);
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
          setTotalValue={setTotalValue}
          atualValue={atualValue}
        />
      </main>
    </div>
  );
}
