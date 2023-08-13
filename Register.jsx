import React, {useState} from "react"

export const  Register=(props) =>{
  
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const [fullname , setfullName]= useState('');
    const hadleSubmit =(e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
      

        <div className="form-container">
            
            <h2 className="head"><font></font>Sign Up</h2>
            
        <form className="register-form" onSubmit={hadleSubmit}>
        <label htmlFor="name">Name</label>
           <input value={fullname} onChange={(e) => setfullName(e.target.value)} type="fullname" placeholder="Full Name" id="fullname" name="fullname" /> 
            <label htmlFor="email">E-mail</label>
           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="xyz@gmail.com" id="email" name="email" /> 
           <label htmlFor="password">Password</label>
           <input value={pass}  onChange={(e) => setPass(e.target.value)}  type="password" placeholder="********"  id="password" name="password" /> 
           <button className="btn" type="submit">Sign Up</button>

        </form>
        <button className="linkbtn" onClick={() => props.onFormSwitch('login')}>Already Have an account? Log In</button>
        </div>
    
    
    )
        
    
}
