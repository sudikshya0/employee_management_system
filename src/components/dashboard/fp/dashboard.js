import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../sidebar/sidebar'
import Home from '../pages/home/Home';
import { Link } from 'react-router-dom'
import './dashboard.css';
function Dashboard() {
    return (
        <div >
            <Topbar/>
            <div className='container'>
            <Sidebar/>
            <Home/>
            </div>
        </div>
    )
}

export default Dashboard
