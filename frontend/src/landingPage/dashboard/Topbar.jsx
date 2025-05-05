// src/components/Topbar.js
import React from 'react';

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <div className="navbar-nav">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">Meetings</a>
          <a className="nav-link" href="#">Team Chat</a>
          <a className="nav-link" href="#">Docs</a>
          <a className="nav-link" href="#">Whiteboards</a>
          <a className="nav-link" href="#">More</a>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
