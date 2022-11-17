import imgCard from "../assets/card-icon.png";
function InitialPage({ page }) {
  return (
    <div className="background">
      <div className="container">
        <div className="brand">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <h3>Centralize o controle das suas finanças</h3>
          <p>de forma rápida e segura</p>
          <button onClick={() => page(false)}>Iniciar</button>
        </div>
        <div className="bg-1">
          <div className="bg-2">
            <div className="bg-3">
              <div className="panel">
                <div className="dots-container">
                  <ul className="dots">
                    <li className="red-dot"></li>
                    <li className="green-dot"></li>
                    <li className="black-dot"></li>
                  </ul>
                </div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
                <div className="blank"></div>
              </div>
              <div className="decorative-1">
                <div className="card-container">
                  <img src={imgCard} alt="" />
                </div>
                <div className="decorative-line">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>
              </div>
              <div className="decorative-2">
                <div className="card-container">
                  <img src={imgCard} alt="" />
                </div>
                <div className="decorative-line">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InitialPage;
