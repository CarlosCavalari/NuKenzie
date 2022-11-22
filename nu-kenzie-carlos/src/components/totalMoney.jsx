export function TotalMoney({ atualValue }) {
  return (
    <div className="total-info">
      <div>
        <h4>Valor total:</h4>
        <h3>$ {atualValue}</h3>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
