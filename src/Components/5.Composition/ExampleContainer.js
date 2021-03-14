import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Composition</h2>
      <p>Using Composition over Inheritance and React's Children prop</p>
      <Parent />
    </div>
  );
}
