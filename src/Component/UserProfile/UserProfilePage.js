
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContextProvider';
import "./UserProfile.css";

   function  UserProfile () {
      const [state, setState] = useState({
       name:"", email:""

   })
    const navigate = useNavigate()
   const contextData = useContext(UserContext);
   function init() {
    setState(contextData.userData)

   }
   console.log("userprofile" ,contextData)

       useEffect(()=>{
        init()
        },[])

         const handleSave = () => {

        contextData.setUserData(state);
        navigate(-1)

      }

    const handleChange =(event) =>{
    const { name, value} = event.target;
    setState({...state,[name]:value})
  }  

    
   return (

     <div className=" user_container">

     <h1>User Name</h1>
       <input value={state.name} onChange={handleChange} name="name" /> 
       <br />
       <h1>User email</h1>

       <input value={state.email} onChange={handleChange} name="email" /> 
       <br />

       <button onClick={handleSave}>Save Data</button>

     </div>
    )
   }

export default UserProfile