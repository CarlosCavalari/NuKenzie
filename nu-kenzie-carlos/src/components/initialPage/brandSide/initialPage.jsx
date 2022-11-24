import { Decoration } from "../decorationSide/decoration";

export function InitialPage({ page }) {
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
        <Decoration />
      </div>
    </div>
  );
}
