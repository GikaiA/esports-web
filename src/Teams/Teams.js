import React from "react";
import "./Teams.css";
import SplitPane from "react-split-pane";

function Teams() {
  return (
    <div className="teams">
      <SplitPane split="vertical" minSize={100} defaultSize={100}>
        <div className="cod-pane">
          <div className="pane-info">
            <p> Call of Duty</p>
          </div>
        </div>
        <div>
          <p> Call of Duty</p>
        </div>
        <div>
          <p> Call of Duty</p>
        </div>
        <div>
          <p> Call of Duty</p>
        </div>
      </SplitPane>
    </div>
  );
}

export default Teams;
