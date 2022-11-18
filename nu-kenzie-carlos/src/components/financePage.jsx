import imgTrash from "../assets/trash.png";
import { FilterContainer } from "./filterButtons.jsx";
function FinancePage({ page }) {
  return (
    <div>
      <header>
        <div className="top">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <button className="default-btn" onClick={() => page(true)}>
            Início
          </button>
        </div>
      </header>
      <main className="finance-container main-container">
        <section className="total-info-container">
          <div className="filter-section">
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
            <button className="brand-btn insert-value-btn">
              Inserir valor
            </button>
          </div>
          <div className="total-info">
            <div>
              <h4>Valor total:</h4>
              <h3>$ 8456</h3>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </section>
        <section className="finances-section sec">
          <div className="finances-top">
            <h3>Resumo financeiro</h3>
            <FilterContainer />
          </div>
          <h2>Você ainda não possui nenhum lançamento</h2>
          <ul className="empty-list">
            <li>
              <div className="empty-container">
                <div className="empty-decoration-1"></div>
                <div className="empty-decoration-2"></div>
              </div>
            </li>
            <li>
              <div className="empty-container">
                <div className="empty-decoration-1"></div>
                <div className="empty-decoration-2"></div>
              </div>
            </li>
            <li>
              <div className="empty-container">
                <div className="empty-decoration-1"></div>
                <div className="empty-decoration-2"></div>
              </div>
            </li>
          </ul>
          <ul className="finance-list hidden">
            <li>
              <div className="finance-info">
                <h3>Salário - Mês Dezembro</h3>
                <div>
                  <p>R$ 6.660,00</p>
                  <button>
                    <img src={imgTrash} />
                  </button>
                </div>
              </div>
              <p>Entrada</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
export default FinancePage;
