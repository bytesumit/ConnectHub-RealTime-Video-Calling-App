// src/components/RightSidebar.js
import React from 'react';

function RightSidebar() {
  return (
    <div className="bg-light border-start p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <div className="text-center">
        <h6>23:32</h6>
        <p>Monday, April 14</p>
        <button className="btn btn-sm btn-outline-primary mb-3">Connect Calendar</button>
      </div>
      <div className="text-center mt-4">
        <p>No meetings scheduled.</p>
        <button className="btn btn-primary btn-sm">Schedule a meeting</button>
      </div>
      <div className="mt-4 text-center">
        <a href="#">Open recordings</a>
      </div>
    </div>
  );
}

export default RightSidebar;
