import React, { useState } from "react";
import Grandchild from "./Grandchild";

export default function Child(props) {
  const [moreState, setMoreState] = useState("");
  return (
    <div className="component child">
      <div className="info">
        <h3>Child Component</h3>
        <button onClick={() => setMoreState("Child")}>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{moreState}</h5>
        </div>
      </div>
      <Grandchild {...{ moreState, setMoreState }} />
    </div>
  );
}
