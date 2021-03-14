import React from "react";
import GreatGrandchild from "./GreatGrandchild";

export default function Grandchild() {
  return (
    <div className="component grandchild">
      <div className="info">
        <h3>Grandchild Component</h3>
        <button>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{}</h5>
        </div>
      </div>
      <GreatGrandchild />
    </div>
  );
}
