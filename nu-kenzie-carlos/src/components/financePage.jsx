import { useState } from "react";
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
      <main className="container main-container">
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
                <label for="insert-value">Valor</label>
                <input
                  type="text"
                  id="insert-value"
                  placeholder="1"
                  className="default-input"
                />
              </div>
              <div>
                <label for="insert-type">Tipo de valor</label>
                <select className="default-input" id="insert-type">
                  <option value="entry" selected>
                    Entrada
                  </option>
                  <option value="exit">Saída</option>
                </select>
              </div>
            </div>
            <button className="brand-btn insert-value-btn">
              Inserir valor
            </button>
          </div>
          <div className="total-info hidden">
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
            <div>
              <button className="brand-btn all-btn">Todos</button>
              <button className="default-btn">Entradas</button>
              <button className="default-btn">Despesas</button>
            </div>
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
                    <img src="../trash.png" />
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
