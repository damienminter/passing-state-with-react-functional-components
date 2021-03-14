import React from "react";

export default function GreatGrandchild() {
  return (
    <div className="component greatgrandchild">
      <div className="info">
        <h3>Great Grandchild</h3>
        <button>Update</button>
        <h6>Update State</h6>
        <div className="state">
          <h5>{}</h5>
        </div>
      </div>
    </div>
  );
}
