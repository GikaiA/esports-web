import React from 'react';
import './Split.css';

const SplitScreen = () => {
  return (
    <div className="split-screen">
      <div className="left-pane">
        {/* Content for the left pane */}
        <h2>Left Pane Content</h2>
        <p>This is the left side of the split screen.</p>
      </div>
      <div className="right-pane">
        {/* Content for the right pane */}
        <h2>Right Pane Content</h2>
        <p>This is the right side of the split screen.</p>
      </div>
    </div>
  );
};

export default SplitScreen;
