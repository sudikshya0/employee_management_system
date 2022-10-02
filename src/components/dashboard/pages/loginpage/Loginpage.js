import React,{useState} from 'react'
import Login from '../../../login/Login';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
function Loginpage() {
    // const todashboard = useNavigate();
    const adminUser = {
        email: "admin@admin.com",
        password: "1Apassword@"
    }
    const [user,setUser] = useState({name: "", email: ""});
    const [error,setError] = useState("");
    function log(data) {
        if (data.email == adminUser.email && data.password == adminUser.password){
            console.log("Logged in");
            setUser({
                name: data.name,
                email: data.email
            })

        }
        else{
            console.log("Details do not match");
            setError("Details do not match");
        }
    }

    const logout = () =>{
        setUser({
            name: "",
            email: ""
        })
    }

    return (
        <div className='loginpage'>
          {(user.email !== "")?(
            // todashboard('/dashboard')
            <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick = {logout} className= 'btn'>Logout</button>
            </div>
          ):(
            <Login log={log}/>
          )}
          
        </div>
    )
}

export default Loginpage
