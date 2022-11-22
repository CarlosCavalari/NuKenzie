export function DescriptionContainer({ setDescription }) {
  return (
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
  );
}

export function SetFilterContainer({ setValue }) {
  return (
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
  );
}

export function ValueTypeContainer({ setValueType }) {
  return (
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
  );
}
