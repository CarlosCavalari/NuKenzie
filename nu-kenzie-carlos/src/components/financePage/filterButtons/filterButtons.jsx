import { useState } from "react";

export function FilterContainer({ setFilter }) {
  const [all, setAll] = useState("default-btn brand-btn");
  const [entry, setEntry] = useState("default-btn");
  const [exit, setExit] = useState("default-btn");

  function handleButtonChange(e) {
    e.preventDefault();
    e.target.value === "Todos"
      ? setFilter("Todos")
      : e.target.value === "Entradas"
      ? setFilter("Entrada")
      : setFilter("Despesa");

    e.target.value === "Todos"
      ? setAll("brand-btn")(setEntry("default-btn")(setExit("default-btn")))
      : e.target.value === "Entradas"
      ? setAll("default-btn")(setEntry("brand-btn")(setExit("default-btn")))
      : setAll("default-btn")(setEntry("default-btn")(setExit("brand-btn")));
  }
  return (
    <div className="filter-btns">
      <button
        value="Todos"
        className={all}
        onClick={(e) => handleButtonChange(e)}
      >
        Todos
      </button>
      <button
        value="Entradas"
        className={entry}
        onClick={(e) => handleButtonChange(e)}
      >
        Entradas
      </button>
      <button
        value="Despesas"
        className={exit}
        onClick={(e) => handleButtonChange(e)}
      >
        Despesas
      </button>
    </div>
  );
}
