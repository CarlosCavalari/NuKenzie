import { useState } from "react";
function FilterBtnsAll({ choosed }) {
  return (
    <div className="filter-btns">
      <button
        className="default-btn brand-btn all-btn"
        onClick={() => choosed(0)}
      >
        Todos
      </button>
      <button className="default-btn" onClick={() => choosed(1)}>
        Entradas
      </button>
      <button className="default-btn" onClick={() => choosed(2)}>
        Despesas
      </button>
    </div>
  );
}
function FilterBtnsEntries({ choosed }) {
  return (
    <div className="filter-btns">
      <button className="default-btn all-btn" onClick={() => choosed(0)}>
        Todos
      </button>
      <button className="default-btn brand-btn" onClick={() => choosed(1)}>
        Entradas
      </button>
      <button className="default-btn" onClick={() => choosed(2)}>
        Despesas
      </button>
    </div>
  );
}
function FilterBtnsExits({ choosed }) {
  return (
    <div className="filter-btns">
      <button className="default-btn all-btn" onClick={() => choosed(0)}>
        Todos
      </button>
      <button className="default-btn" onClick={() => choosed(1)}>
        Entradas
      </button>
      <button className="default-btn brand-btn " onClick={() => choosed(2)}>
        Despesas
      </button>
    </div>
  );
}

export function FilterContainer() {
  const [choosed, setChoosed] = useState(0);
  return (
    <>
      {choosed === 0 ? (
        <FilterBtnsAll choosed={setChoosed} />
      ) : choosed === 1 ? (
        <FilterBtnsEntries choosed={setChoosed} />
      ) : (
        <FilterBtnsExits choosed={setChoosed} />
      )}
    </>
  );
}
