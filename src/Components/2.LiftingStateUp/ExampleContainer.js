import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Lifting State Up</h2>
      <p>Passing state back up the component tree</p>
      <Parent />
    </div>
  );
}
