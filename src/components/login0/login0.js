import React from 'react'
import './login0.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Loginn() {
    // const userRef = useRef();
    const errRef = useRef();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [err, setErr]= useState('');
    const [success, setSuccess] = useState(false);

    const todashboard = useNavigate()

    // useEffect(()=>{
    //     userRef.current.focus();
    // },[])

    useEffect(()=>{
        setErr('');
    },[name,email,password])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
    }, [password])

    function loginHandler(e){
        e.preventDefault();
        console.log(name,email,password);
        setName('')
        setEmail('');
        setPassword('');
        setSuccess(true);

    }

    return (
        <>
            {success ? (
        
                todashboard('/dashboard')
                
            ):
            (
            <div className='login'>
                <div className="login_container">
                <p ref={errRef} className={err ? "error":'offscreen'} aria-live="assertive">{err}</p>
                <form  onSubmit={loginHandler}>
                <div className="loginTitle"><h2>Log In</h2></div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        autoComplete = "off"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control"
                        autoComplete = "off"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                    </div>
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    <button type="submit" className="btn btn-primary" disabled={ !validPwd  ? true : false}>Login</button>
                </form>  
                </div>
            </div>
        )}
        </>
    )
}

export default Loginn
