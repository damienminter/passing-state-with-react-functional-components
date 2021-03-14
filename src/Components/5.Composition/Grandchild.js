import React from "react";

export default function Grandchild(props) {
  return (
    <div className="component grandchild">
      <div className="info">
        <h3>Grandchild Component</h3>
        <button onClick={() => props.setMoreState("Grandchild")}>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{props.moreState}</h5>
        </div>
      </div>
      {props.children}
    </div>
  );
}
