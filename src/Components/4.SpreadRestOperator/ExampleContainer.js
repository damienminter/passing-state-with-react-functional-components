import React from "react";
import Parent from "./Parent";
import "../components.css";

export default function ExampleContainer() {
  return (
    <div className="example-container">
      <h2>Prop Drilling with Spread and Rest Operator</h2>
      <p>
        Using the ...spread and ...rest Operator's to pass down the props easily
      </p>
      <Parent />
    </div>
  );
}
