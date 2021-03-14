import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Prop Drilling</h2>
      <p>Drill down the component using props</p>
      <Parent />
    </div>
  );
}
