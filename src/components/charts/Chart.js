import React from 'react'
import './chart.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
function Chart({title, data}) {
    return (
        <div className='chart'>
                <h3 className="chartTitle">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                <BarChart data= {data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="active" fill="#8884d8" />
                    </BarChart>
        </ResponsiveContainer>
            
        </div>
    )
}

export default Chart
