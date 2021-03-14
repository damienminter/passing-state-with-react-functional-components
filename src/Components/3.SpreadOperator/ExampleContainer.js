import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Prop Drilling with Spread Operator</h2>
      <p>Using the ...spread Operator to pass down the props easily</p>
      <Parent />
    </div>
  );
}
