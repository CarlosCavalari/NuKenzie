import { useState } from "react";
import { Finance } from "./financeItem";

export function SetFinance({ financesList, setFinancesList }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");
  const [blank, setSection] = useState(true);
  const [atualValue, setTotalValue] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setSection(false);
    let item = {
      description: description,
      value: value,
      valueType: valueType,
    };
    setFinancesList([...financesList, item]);
    setTotalValue(
      item.valueType === "Entrada"
        ? parseInt(atualValue) + parseInt(item.value)
        : parseInt(atualValue) - parseInt(item.value)
    );
  }

  return (
    <section className="total-info-container">
      <form className="filter-section" onSubmit={handleSubmit}>
        <div className="description">
          <h3>Descrição</h3>
          <div>
            <input
              className="default-input"
              type="text"
              placeholder="Digite aqui sua descrição"
              onChange={(event) => setDescription(event.target.value)}
            />
            <small>Ex: Compra de roupas</small>
          </div>
        </div>
        <div className="filters">
          <div>
            <label htmlFor="insert-value">Valor</label>
            <input
              type="number"
              id="insert-value"
              placeholder="1"
              className="default-input"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="insert-type">Tipo de valor</label>
            <select
              className="default-input"
              id="insert-type"
              onChange={(event) => setValueType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button className="brand-btn insert-value-btn" type="submit">
          Inserir valor
        </button>
      </form>
      <div className="total-info">
        <div>
          <h4>Valor total:</h4>
          <h3>$ {atualValue}</h3>
        </div>
        <p>O valor se refere ao saldo</p>
      </div>
    </section>
  );
}
