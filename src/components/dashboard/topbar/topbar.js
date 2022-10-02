import React from 'react'
import './topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i class="bi bi-bell"></i>
          </div>
          <div className="topbarIconContainer">
            <i class="bi bi-globe"></i>
          </div>
          <div className="topbarIconContainer">
            <i class="bi bi-gear-fill"></i> 
          </div>
            <i class="bi bi-person-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default Topbar