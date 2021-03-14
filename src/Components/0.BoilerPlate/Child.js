import React from "react";
import Grandchild from "./Grandchild";

export default function Child() {
  return (
    <div className="component child">
      <div className="info">
        <h3>Child Component</h3>
        <button>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{}</h5>
        </div>
      </div>
      <Grandchild />
    </div>
  );
}
