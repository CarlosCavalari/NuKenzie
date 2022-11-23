export function TotalMoney({ financesList }) {
  const total = financesList.reduce((prev, curr) => {
    return curr.valueType === "Entrada"
      ? +prev + +curr.value
      : +prev - +curr.value;
  }, 0);

  return (
    <div className="total-info">
      <div>
        <h4>Valor total:</h4>
        <h3>$ {total}</h3>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
