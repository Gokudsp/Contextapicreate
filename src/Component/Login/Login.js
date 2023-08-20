//import React from "react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { UserContext } from "../../Context/UserContextProvider";



function LoginPage({state, setState}) {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const {userData,setUserData} =useContext(UserContext)
    

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    

   const handleGoback = () => {
      navigate(-1);
   }
     
    const handleLogin = ()=>{
        const payload= {
            name:name,
            email:email,
        }
        setUserData (payload)
        navigate ("/home")
    }

    
    return (
        <div className="login_page_container">
            <div className="card">
                <label htmlFor="name" className="Login_lable"> Name</label>
                <input type="text" id="name" className="input" value={name} onChange={handleNameChange}/>
                <br />

                <label htmlFor="email" className="Login_lable"> Email</label>
                <input type="text" id="email" className="input" value={email} onChange={handleEmailChange}/>
                <br />
                <button className="login_button" onClick={handleLogin} > Login</button>
                <button className=" Go_page" onClick={handleGoback}>HomePage </button> 
            </div>
             
        </div>
    )
}

export default LoginPage