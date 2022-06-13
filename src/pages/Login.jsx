import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/auth.css'

export function Login() {
    const navigate = useNavigate();
    const {userData,setUserData} = useAuth()

    useEffect(() => {
        setUserData('')       
    }, [])
    

    const handleSubmit = (e)=>{
        e.preventDefault() 
        setUserData(userData) 
        navigate('/home')             
    }

    const HandleLogin=() =>{
        setUserData((form)=>({
          ...form,
          name:'Tester',
          email: "testing@test.com",
          password: "test123",
        }));
    }
  return (
    <div>
        <div className="form-container">
            <form className="form" onSubmit={ handleSubmit}>
                <h1 className="form-heading h5">Log In</h1>
                <div className="input-grp">
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" className="input-field" value={userData.email}
                    onChange={(e)=>setUserData((form)=>({...form,email:e.target.value}))} />
                </div>
                <div className="input-grp">
                    <label>Password</label>
                    <input type="password" className="input-field" value={userData.password}
                    onChange={(e)=>setUserData((form)=>({...form,password:e.target.value}))} />
                </div>
                <button type='submit' className="btn primary-btn">Login</button>
                <button className="btn secondary-btn" onClick={()=>HandleLogin()}>Guest Login</button>
                <p>Don't have an account ?
                  <span className="primary-text" onClick={() => navigate("/signup")}>
                     SignUp</span>
                </p>
            </form>
        </div>
    </div>
  )
}
