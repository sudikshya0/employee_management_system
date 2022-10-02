import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Update() {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const back = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
    },[])

    function editHandler(e) {
        e.preventDefault();
        axios.put(`https://633935c1937ea77bfdc7c2d3.mockapi.io/create-ems/${id}`,{
            name: name,
            email: email,
            password: password
        })
        .then(()=>{ back('/users') })
        
    }
    return (
        <div className='update'>
            <h2>Edit User</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" 
                onClick={editHandler}
                >Edit</button>
            </form>
        </div>
    )
}

export default Update
