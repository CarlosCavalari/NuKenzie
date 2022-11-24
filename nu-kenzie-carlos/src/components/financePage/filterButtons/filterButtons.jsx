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
