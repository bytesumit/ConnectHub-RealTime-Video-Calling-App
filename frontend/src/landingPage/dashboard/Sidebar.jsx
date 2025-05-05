// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
      <div className="p-3">
        <h5 className="mb-4">Zoom Workplace</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">All Whiteboards</li>
          <li className="nav-item mb-2">Recent</li>
          <li className="nav-item mb-2">My Whiteboards</li>
          <li className="nav-item mb-2">Shared with Me</li>
          <li className="nav-item mb-2">Starred</li>
          <li className="nav-item mb-2">Trash</li>
        </ul>
        <div className="mt-4">
          <strong>Projects</strong>
          <button className="btn btn-sm btn-outline-primary mt-2">+ Add Project</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
