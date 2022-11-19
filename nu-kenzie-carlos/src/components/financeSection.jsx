import { useState } from "react";
import { BlankList } from "./blankList";
import { FilterContainer } from "./filterButtons";
import { FinanceList } from "./financeList";

function BlankSection() {
  return (
    <section className="finances-section sec">
      <div className="finances-top">
        <h3>Resumo financeiro</h3>
        <FilterContainer />
      </div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <BlankList />
    </section>
  );
}
function FinanceSection() {
  return (
    <section className="finances-section sec">
      <div className="finances-top">
        <h3>Resumo financeiro</h3>
        <FilterContainer />
      </div>
      <FinanceList />
    </section>
  );
}
export function RenderSection() {
  const [blank, setSection] = useState(true);
  return <>{blank ? <BlankSection /> : <FinanceSection />}</>;
}
