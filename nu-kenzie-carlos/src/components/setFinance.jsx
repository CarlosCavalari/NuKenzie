export function SetFinance() {
  return (
    <section className="total-info-container">
      <form className="filter-section">
        <div className="description">
          <h3>Descrição</h3>
          <div>
            <input
              className="default-input"
              type="text"
              placeholder="Digite aqui sua descrição"
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
            />
          </div>
          <div>
            <label htmlFor="insert-type">Tipo de valor</label>
            <select className="default-input" id="insert-type">
              <option value="entry" selected>
                Entrada
              </option>
              <option value="exit">Despesa</option>
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
          <h3>$ 0</h3>
        </div>
        <p>O valor se refere ao saldo</p>
      </div>
    </section>
  );
}
