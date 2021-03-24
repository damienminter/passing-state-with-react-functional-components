import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Props</h2>
      <p>State is passed down through components using props</p>
      <Parent />
    </div>
  );
}
