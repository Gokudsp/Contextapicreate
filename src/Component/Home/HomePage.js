 import React, { useContext, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import "./HomePage.css";
 import  PopUpModal from"../CommonComponent/popup/indexPage";
import { UserContext } from "../../Context/UserContextProvider";
import { CartContext } from "../../Context/CartContextProvider";
import redesign from '../../Assets/redesign.png';
import isbooks from '../../Assets/isbooks.jpg';
//import { BooksContext } from "../../Context/BooksContextProvider";



//import React from "react";

export default function HomePage ({state, setState}) {
    const navigate = useNavigate();

    const [name, setName] = useState()
    const [brand, setBrand] = useState()
    const [showPopup, setShowPopup] = useState (false)
    const [ selectedBooks, SetSelectedBooks] = useState({
        id:"",name:"",brand:""
    })
     const[showDeletePopup,setShowDeletePopup] =useState(false);
       const {userData}= useContext(UserContext)
       const CartContextData = useContext(CartContext)
   

      console.log("context value",CartContextData);

     const handleNavigate = (str) => {
        navigate(str);
     }

     const handleLogout =() => {
        setState({ type:"logout"});
        navigate("/login")
     } 

     
 
    const handleAddBooks = () => {
        const payload = {
            id: new Date().getTime(),
            name,
            brand
        }
        setState({
            type: "Add_books",
            payload:payload
        })
    }
 

     const handleDelete =(Books) =>{
        SetSelectedBooks (Books)
        setShowDeletePopup(true)
     }

     const confirmDelete = () =>{
        const payload =selectedBooks.id
        setState({
            type:"Delete",
            payload
        })
     }

     const handleEditClick =(currentBooks) =>{
        SetSelectedBooks(currentBooks);
        setShowPopup(true);
     } 


     const handleEditChange =(event) =>{
        console.log(event.target.name,event.target.value)
        SetSelectedBooks ({...selectedBooks, [event.target.name]: event.target.value})
     }  

     const handleSave =() =>{
        const payload = selectedBooks
        const action ={
            type:"Edit_books",
            payload
        }
        setState(action)
          setShowPopup(false)
     }
     const handleEditUser =() =>{
        navigate('/profile')
     }

     const handleGoback = () => {
        navigate(-1);
     }
   
    return <div>
        <div> 
        
        </div>
 <div className="page_container"> 
 
 {/* <img src={redesign} alt='redesign' height="900px" />  */}

 

    
    <h2> Name : {userData.name}</h2>
    <h2> Email :{userData.email}</h2>
    <button onClick={handleEditUser}> Edit user details</button>
    <button onClick={ handleLogout}> logout</button> 
    <button onClick={handleGoback}>HomePage </button>  </div >
    
    
           <div  className="input_container">
         
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
            <br />
            <button onClick={handleAddBooks}> Add Books +</button>
        </div>
            
       {
            state.BooksList.map((Books) => <div>
                 <img src={isbooks} alt='isbooks'  /> 
                <h1> {Books.name}</h1>
                <h2>{Books.brand}</h2>
                <div className="edit_but">
                  <button onClick={() => handleDelete(Books)}> Delete</button>  
                  <button onClick={()=> handleEditClick(Books)}>Edit </button>
                   </div>

            </div>)
      }
           
        { showPopup &&
        <PopUpModal showPopup = {showPopup} setShowPopup ={setShowPopup}> 
            
            
            <div className="handle_view"> 

                <label> Name</label>
                <input type="text" value={selectedBooks.name} name="name" onChange={handleEditChange} />
                <br/>
                <label htmlFor=""> Brand</label>
                <input type="text" value={selectedBooks.brand} name="brand" onChange={handleEditChange} />

                <br />
                <div className="save_but">   <button  onClick={handleSave}> Save Item Books</button> </div>
               
            </div>
            </PopUpModal>

        }

        { showDeletePopup &&
         <PopUpModal showPopup = {showDeletePopup} setShowPopup ={setShowDeletePopup}>  

        <div> 
            <div className="Show_name">  <h1>  Are You Sure ?</h1> </div>
          
           
            <br />
            <button onClick={confirmDelete}> yes</button>
            <button onClick={() =>setShowDeletePopup (false)}>No</button>
        </div>
        
        </PopUpModal>
}
        </div>
} 
