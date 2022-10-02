import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
          <div className="sidebar_container">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/">
              <div className="sidebarIcon">
                <i class="bi bi-house"></i>
                <div className='text'>Home</div>
              </div>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/users">
              <div className="sidebarIcon">
                <i class="bi bi-people"></i>
                <div className="text">Users</div>
              </div>
              </Link>
            </li>
            <li className="sidebarListItem">
              <div className="sidebarIcon">
                <i class="bi bi-chat"></i>
                <div className="text">Chat</div>
              </div>
              
            </li>
            <li className="sidebarListItem">
              <div className="sidebarIcon">
                <i class="bi bi-file-earmark"></i>
                <div className="text">Reports</div>
              </div>
              
            </li>
          </ul>
         </div> 
        </div>
    )
}

export default Sidebar
