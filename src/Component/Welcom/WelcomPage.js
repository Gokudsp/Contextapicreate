import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcom.css";

export default function WelcomPage () {
    const navigate = useNavigate();
   

   const handleGoback = () => {
      navigate(-1);
   }

    const handleService = () => {
        navigate('/Service')
    }

    const handleNavigate =(str) => {
        navigate(str)
    }

   

    return <div>
        <h1> welcome</h1>
        <div>
        <button onClick={handleGoback}>HomePage </button> 
        </div>
        <button onClick={()=>handleNavigate('LoginPage ')}> LoginPage</button>
        <button onClick={()=>handleNavigate('AboutPage')}> AboutPage</button>
        <button onClick={()=>handleNavigate('HomePage')}> HomePage</button>
        <button onClick={()=>handleNavigate('Service')}> ServicePage</button> 
       
    </div>
}
