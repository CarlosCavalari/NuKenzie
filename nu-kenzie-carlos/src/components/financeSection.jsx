import { useState } from "react";
import { BlankList } from "./blankList";
import { FilterContainer } from "./filterButtons";
import { Finance } from "./financeItem";

export function FinanceSection({
  financesList,
  deleted,
  setTotalValue,
  atualValue,
}) {
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
              deleted={deleted}
              filter={filter}
              financesList={financesList}
              setTotalValue={setTotalValue}
              atualValue={atualValue}
            />
          ))
        )}
      </ul>
    </section>
  );
}
