import imgCard from "../../../assets/card-icon.png";
export function Decoration() {
  return (
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
  );
}
