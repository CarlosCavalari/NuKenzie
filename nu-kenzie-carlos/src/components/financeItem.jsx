import imgTrash from "../assets/trash.png";
export function Finance({ description, value, valueType }) {
  return (
    <li>
      <div className="finance-info">
        <h3>{description}</h3>
        <div>
          <p>R$ {value}</p>
          <button>
            <img src={imgTrash} alt="" />
          </button>
        </div>
      </div>
      <p>{valueType}</p>
    </li>
  );
}
