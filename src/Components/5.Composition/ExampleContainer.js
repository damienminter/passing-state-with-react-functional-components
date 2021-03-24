import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Composition</h2>
      <p>Using composition and the react children prop</p>
      <Parent />
      <div className="instructions">
        <h4>
          Child and Great Grandchild share state while Parent and Great
          Grandchild share state directly using composition
        </h4>
      </div>
    </div>
  );
}
