import React from "react";
import "./popup.css";

function PopUpModal ({showPopup,setShowPopup,children}) {
    console.log("children" ,children)

    return (
<div>

        <div className="overlay" onClick={() => setShowPopup(!showPopup)}>

        </div>

        <div className="popup"> 
       
          
           { children}
        </div>
        </div>
    )
}

export default PopUpModal