import { useState } from "react";
import {
  DescriptionContainer,
  SetFilterContainer,
  ValueTypeContainer,
} from "./formContainers";
import { TotalMoney } from "../totalMoney/totalMoney";

export function SetFinance({ financesList, setFinancesList }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");
  const [blank, setSection] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setSection(false);
    let item = {
      id: financesList.length + 1,
      description: description,
      value: value,
      valueType: valueType,
    };
    setFinancesList([...financesList, item]);
  }

  return (
    <section className="total-info-container">
      <form className="filter-section" onSubmit={(e) => handleSubmit(e)}>
        <DescriptionContainer setDescription={setDescription} />
        <div className="filters">
          <SetFilterContainer setValue={setValue} />
          <ValueTypeContainer setValueType={setValueType} />
        </div>
        <button className="brand-btn insert-value-btn" type="submit">
          Inserir valor
        </button>
      </form>
      <TotalMoney financesList={financesList} />
    </section>
  );
}
