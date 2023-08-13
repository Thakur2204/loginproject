import React, { useState} from "react"

export const Login=(props) =>{
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const hadleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form-container" onSubmit={hadleSubmit}>
            <h2 className="head">Log In</h2>
        <form className="login-form">
            <label htmlFor="email">E-mail</label>
           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="xyz@gmail.com" id="email" name="email" /> 
           <label htmlFor="password">Password</label>
           <input value={pass}  onChange={(e) => setPass(e.target.value)}  type="password" placeholder="********"  id="password" name="password" /> 
           <button className="btn" type="submit">Log In</button>

        </form>
        <button className="linkbtn" onClick={() => props.onFormSwitch('Register')}>Don't Have an account? Sign Up</button>
        </div>
    )
        
    
}
