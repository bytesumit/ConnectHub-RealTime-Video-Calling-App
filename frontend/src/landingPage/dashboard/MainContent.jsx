// src/components/MainContent.js
import React from 'react';

function MainContent() {
  return (
    <div className="p-4">
      <h4>All Whiteboards</h4>

      <div className="my-3 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">Modified (new-old)</button>
          <button className="btn btn-outline-secondary">Owned by anyone</button>
        </div>
        <input type="text" placeholder="Search" className="form-control w-25" />
      </div>

      <div className="mb-4">
        <h6>Templates</h6>
        <div className="d-flex gap-3 flex-wrap">
          <div className="p-3 border rounded">Brainstorm Session</div>
          <div className="p-3 border rounded">Flowchart Diagram</div>
          <div className="p-3 border rounded">Meeting Notes</div>
          <div className="p-3 border rounded">8 Seed Bracket</div>
          <div className="p-3 border rounded">Prioritization Matrix</div>
          <div className="p-3 border rounded">Meeting Reflection</div>
        </div>
      </div>

      <div>
        <h6>Your Whiteboards</h6>
        <div className="card p-3 mb-3">
          <p>No whiteboards yet. Start creating!</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
