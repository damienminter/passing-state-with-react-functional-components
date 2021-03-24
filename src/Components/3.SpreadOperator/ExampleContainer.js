import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Prop Drilling with Spread Operator</h2>
      <p>Using the ...spread operator to pass props with less code</p>
      <Parent />
      <div className="instructions">
        <h4>
          The ...spread operator is used to pass props between Parent and Great
          Grandchild
        </h4>
      </div>
    </div>
  );
}
