import imgTrash from "../../assets/trash.png";

export function Finance({
  transition,
  deleted,
  filter,
  financesList,
  setTotalValue,
  atualValue,
}) {
  function Item() {
    return (
      <li>
        <div className="finance-info">
          <h3>{transition.description}</h3>
          <div>
            <p>R$ {transition.value}</p>
            <button
              onClick={() => {
                deleted(transition);
              }}
            >
              <img src={imgTrash} alt="" />
            </button>
          </div>
        </div>
        <p>{transition.valueType}</p>
      </li>
    );
  }
  transition.valueType === "Entrada"
    ? setTotalValue(
        financesList.reduce((prev, curr) => prev + +curr.value, 0).toFixed(2)
      )
    : console.log(+atualValue - transition.value);

  return transition.valueType === filter ? (
    <Item />
  ) : filter === "Todos" ? (
    <Item />
  ) : (
    <></>
  );
}
