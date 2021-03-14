import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Context</h2>
      <p>Creating Context with the useContext hook</p>
      <Parent />
    </div>
  );
}
