import { useState } from "react";
import { BlankList } from "../blankList/blankList";
import { FilterContainer } from "../filterButtons/filterButtons";
import { Finance } from "../financeSection/financeItem";

export function FinanceSection({ financesList, setFinancesList }) {
  const [filter, setFilter] = useState("Todos");

  return (
    <section className="finances-section sec">
      <div className="finances-top">
        <h3>Resumo financeiro</h3>
        <FilterContainer setFilter={setFilter} />
      </div>
      <ul className="finance-list">
        {financesList.length === 0 ? (
          <BlankList />
        ) : (
          financesList.map((transition, index) => (
            <Finance
              key={index}
              transition={transition}
              filter={filter}
              financesList={financesList}
              setFinancesList={setFinancesList}
            />
          ))
        )}
      </ul>
    </section>
  );
}
