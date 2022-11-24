import imgTrash from "../../../assets/trash.png";

export function Finance({ transition, filter, financesList, setFinancesList }) {
  function handleDelete(e) {
    e.preventDefault();
    let removedList = financesList.filter((elem) => {
      return elem.id !== transition.id;
    });
    setFinancesList(removedList);
  }

  function Item() {
    return (
      <li>
        <div className="finance-info">
          <h3>{transition.description}</h3>
          <div>
            <p>R$ {transition.value}</p>
            <button
              onClick={(e) => {
                handleDelete(e);
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

  return transition.valueType === filter ? (
    <Item />
  ) : filter === "Todos" ? (
    <Item />
  ) : (
    <></>
  );
}
