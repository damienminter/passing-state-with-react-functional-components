import React, { useContext } from "react";

import { Context } from "./Parent";

export default function GreatGrandchild() {
  const { state, setState } = useContext(Context);

  return (
    <div className="component greatgrandchild">
      <div className="info">
        <h3>Great Grandchild</h3>
        <button onClick={() => setState("Great Grandchild")}>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{state}</h5>
        </div>
      </div>
    </div>
  );
}
