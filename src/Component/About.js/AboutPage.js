
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/HeaderPage';
import { useNavigate } from 'react-router-dom';

export default function AboutUsPage () {

   const [value, setValue] = useState(0);
   const [multipliedValue, setMultipliedValue] = useState(0);
   const [count, setCount] = useState(1);
   const [ subtraction,  setsubtractValue] = useState(0)
   const [Sub, setSub] = useState(0);
   
   const navigate = useNavigate();
   
   const printHello = () => {
   console.log("mounted") 
   setsubtractValue(value-2)   
   }
   const print = () => {
      console.log("mounted") 
      setMultipliedValue(value*2)   
      }
   useEffect (printHello, [value])
   useEffect (print, [value])

   const handleGoback = () => {
      navigate(-1);
   }
   return <div>
    <Header />
   
       <h1>About us</h1>

         <div>  
            <h2> multiplieValue</h2>
        <input value={value} onChange={e=>setValue(Number(e.target.value))} />
         <p>{multipliedValue}</p>
   
        <label>Count = {count}</label>
        </div>

        <div> 
         <h3> subtraction</h3>
        <input value={value} onChange={e=>setValue(Number(e.target.value))} />
         <p>{subtraction}</p>
         <label>Sub = {Sub}</label>
         </div>



   
        <button onClick={() =>setCount(count+1)}>Incremnent</button>
        <button onClick={handleGoback}>HomePage </button> 
      
    
   </div>
}