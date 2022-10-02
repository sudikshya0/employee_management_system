import React from 'react'
import './card.css';
function Card() {
    return (
        <div className='card'>
            <div className='container'>
            <div className='left_container'>
                <div className='cardItems'>
                <span className="cardTitle">
                        <h3>Updates</h3>
                        <span className="cardText">Recent updates</span>
                </span>  
                </div>
                <div className='cardItems'>
                <span className="cardTitle">
                        <h3>Projects</h3>
                        <span className="cardText">Current projects</span>
                </span>  
                </div>
            </div>
            <div className='right_container'>
                <div>
                    <ul className="list-group">
                    <li className="list-group-item">New York</li>
                    <li className="list-group-item">Parish</li>
                    <li className="list-group-item">New Delhi</li>
                    <li className="list-group-item">Beijing</li>
                    <li className="list-group-item">Seoul</li>
                    </ul> 
                </div>
            </div>  
            </div>
        </div>
    )
}

export default Card
