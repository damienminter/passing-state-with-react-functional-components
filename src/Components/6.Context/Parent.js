import React, { useState } from "react";
import Child from "./Child";

export const Context = React.createContext();

export default function Parent() {
  const [state, setState] = useState("");
  const value = { state, setState };

  return (
    <Context.Provider value={value}>
      <div className="component parent">
        <div className="info">
          <h3>Parent Component</h3>
          <button onClick={() => setState("Parent")}>Update</button>
          <h6>Update State</h6>
          <div className="state">
            <h5>{state}</h5>
          </div>
        </div>
        <Child />
      </div>
    </Context.Provider>
  );
}
