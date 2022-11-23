import { useState } from "react";
import {
  DescriptionContainer,
  SetFilterContainer,
  ValueTypeContainer,
} from "./formContainers";
import { TotalMoney } from "./totalMoney";

export function SetFinance({ financesList, setFinancesList, atualValue }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");
  const [blank, setSection] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setSection(false);
    let item = {
      description: description,
      value: value,
      valueType: valueType,
    };
    setFinancesList([...financesList, item]);
  }

  return (
    <section className="total-info-container">
      <form className="filter-section" onSubmit={handleSubmit}>
        <DescriptionContainer setDescription={setDescription} />
        <div className="filters">
          <SetFilterContainer setValue={setValue} />
          <ValueTypeContainer setValueType={setValueType} />
        </div>
        <button className="brand-btn insert-value-btn" type="submit">
          Inserir valor
        </button>
      </form>
      <TotalMoney atualValue={atualValue} />
    </section>
  );
}
