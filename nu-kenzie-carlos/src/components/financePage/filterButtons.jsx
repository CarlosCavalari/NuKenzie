/*
function FilterBtnsAll({ choosed, setFilter }) {
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
function FilterBtnsEntries({ choosed, setFilter }) {
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
function FilterBtnsExits({ choosed, setFilter }) {
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

export function FilterContainer({ setFilter }) {
  const [choosed, setChoosed] = useState(0);
  return (
    <>
      {choosed === 0 ? (
        <FilterBtnsAll choosed={setChoosed} setFilter={setFilter} />
      ) : choosed === 1 ? (
        <FilterBtnsEntries choosed={setChoosed} setFilter={setFilter} />
      ) : (
        <FilterBtnsExits choosed={setChoosed} setFilter={setFilter} />
      )}
    </>
  );
}
*/

export function FilterContainer({ setFilter }) {
  function handleButtonChange(e) {
    e.preventDefault();
    e.target.value === "Todos"
      ? setFilter("Todos")
      : e.target.value === "Entradas"
      ? setFilter("Entrada")
      : setFilter("Despesa");
  }
  return (
    <div className="filter-btns">
      <button
        value="Todos"
        className="default-btn brand-btn all-btn"
        onClick={(e) => handleButtonChange(e)}
      >
        Todos
      </button>
      <button
        value="Entradas"
        className="default-btn"
        onClick={(e) => handleButtonChange(e)}
      >
        Entradas
      </button>
      <button
        value="Despesas"
        className="default-btn"
        onClick={(e) => handleButtonChange(e)}
      >
        Despesas
      </button>
    </div>
  );
}
