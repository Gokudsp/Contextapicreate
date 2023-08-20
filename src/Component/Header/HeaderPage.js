import React from "react";
import { useNavigate } from "react-router-dom"

export default function HeaderPage() {
    const navigate = useNavigate();

   const handleGoback = () => {
      navigate(-1);
   }

   return (
      <div>

         <h1> Header </h1>
         <button onClick={handleGoback}>Home Page </button>

        
      </div>
   )
}