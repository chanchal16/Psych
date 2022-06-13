import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/auth.css';

export function Signup() {
    const {registerUser,setRegisterUser} = useAuth()
    const navigate= useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setRegisterUser(registerUser)
        navigate('/login')  
    }

    const handleSignUp = ()=>{
        setRegisterUser((form)=>({
            ...form,
        }))
    }
  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading h5">Sign Up</h1>
            <div className="input-grp">
                <label>Name</label>
                <input type="text" className="input-field" value={registerUser.name} onChange={(e)=>setRegisterUser((f)=>({...f,name:e.target.value}))} />
            </div>
            <div className="input-grp">
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" className="input-field"
                value={registerUser.email} onChange={(e)=>setRegisterUser((f)=>({...f,email:e.target.value}))} />
            </div>
            <div className="input-grp">
                <label>Password</label>
                <input type="password" className="input-field"
                value={registerUser.password} onChange={(e)=>setRegisterUser((f)=>({...f,password:e.target.value}))} />
            </div>
            <button type='submit' className="btn primary-btn" onClick={handleSignUp}>Sign Up</button>
            <p>Already have an account ?<Link to='/' className="primary-text">Sign in</Link></p>
        </form>
    </div>
  )
}
