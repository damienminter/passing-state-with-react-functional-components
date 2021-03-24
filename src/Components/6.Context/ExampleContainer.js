import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Context</h2>
      <p>Creating context and the useContext hook</p>
      <Parent />
      <div className="instructions">
        <h4>
          Child and Great Grandchild share state while Parent and Great
          Grandchild share the same context
        </h4>
      </div>
    </div>
  );
}
