import { useState } from "react";
import imgTrash from "../assets/trash.png";

export function Finance({ transition, deleted }) {
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
