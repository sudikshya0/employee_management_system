import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './users.css';

function Create() {
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('click');
        axios
        .post('https://633935c1937ea77bfdc7c2d3.mockapi.io/create-ems',
        {
            name: name,
            email: email,
            password: password
        })
        history("/users");
    }

    return (
        <div className='create'>
            <h2>Create New User</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                    type="email" 
                    className="form-control"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Create
