import React from "react";
import { useNavigate } from "react-router-dom"

export default function ServicePage () {
   const navigate = useNavigate();

   const handleGoback = () => {
      navigate(-1);
   }

   return (
      <div>

         <h1> ABJ Books </h1>
         <div> 
            
         <tr>
                    <td> User Name</td>
                    <td>
                        <input type="text" name="user1"/>
                    </td>
                </tr>
                <tr>
                    <td> Address</td>
                    <td> 
                        <input type="address" name="add1"/>
                    </td>
                </tr>
                <tr>
                    <td> Password</td>
                    <td>
                        <input type="password" naem="'passi"/>
                    </td>
                </tr>
                <tr>
                    <td> lang</td>
                    <td> 
                        <input type="checkbox" name="gd1" value="Tamil" />Tamil
                        <input type="checkbox" name="gd2" value=" English"/> English
                        <input type="checkbox" name="gd3" value=" Hindi"/> Hindi
                    </td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>
                        <input type="radio" name="r1" value="eee"/> EEE
                        <input type="radio" name="r2" value="mech"/>mECH
                        <input type="radio" name="r3" value="csc"/>CSC
                    </td>
                </tr>
                <td>  
                    Branch
                </td>
                <td> 
                <select name="droup1">
                    <option value="salem" > Salem</option>
                    <option vale ="mecheri"> Mecheri</option>
                    <option value=" mettur"> Mettur</option>
                    <option value=" erode"> Erode</option>
                    <option value=" dharmapuri"> Dharmapuri</option>
                    <option value=" damcity"> Damcity</option>
                </select>
                </td>
                <tr>
                    <td>File</td>
                    <td> 
                        <input type="file" name="f1"/>
                    </td>
                </tr>

                <td colspan="1"align="center"> 
                    <button> singup</button>

                </td>
         </div>
         




         <button onClick={handleGoback}>HomePage </button> 

        
      </div>
   )
}