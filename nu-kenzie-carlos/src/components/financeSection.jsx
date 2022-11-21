import { useState } from "react";
import { BlankList } from "./blankList";
import { FilterContainer } from "./filterButtons";
import { Finance } from "./financeItem";

export function FinanceSection({ lista, setLista, deleted }) {
  return (
    <section className="finances-section sec">
      <div className="finances-top">
        <h3>Resumo financeiro</h3>
        <FilterContainer />
      </div>
      <ul className="finance-list">
        {lista.length === 0 ? (
          <BlankList />
        ) : (
          lista.map((transition, index) => (
            <Finance key={index} transition={transition} deleted={deleted} />
          ))
        )}
      </ul>
    </section>
  );
}
