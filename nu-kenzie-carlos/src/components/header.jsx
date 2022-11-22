export function Header({ page }) {
  return (
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
  );
}
