import React from 'react';
import './home.css';
import Chart from '../../../charts/Chart';
import {activeData} from '../../../../dummydata';
import Card from '../../cards/card';
function Home() {
    return (
        <div className = "home">
          <Chart data = {activeData}  title = "Analytics"/> 
          <div>
            <Card/>
          </div> 
        </div>
    )
}

export default Home
