import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Prop Drilling with Spread and Rest Operator</h2>
      <p>
        Using the ...spread and ...rest operator to seperate out multiple states
      </p>
      <Parent />
      <div className="instructions">
        <h4>
          Child and Grandchild share state while the ...rest of the state is
          passed between Parent and Great Grandchild
        </h4>
      </div>
    </div>
  );
}
