
 import React,{useEffect, useState} from "react"
 import PopUpModal from "../CommonComponent/popup/indexPage";
 import { useNavigate } from "react-router-dom";
 import "./EventPage.css";
 import axios from 'axios';

 function EventPage() {
  const [events, setEvents] =useState([])
  const navigate = useNavigate();

  

  const [state, setState] =useState({
     title:"",description:"",contacts:""
  });

  const [selectedState, setSelectedState] = useState({
    title:"",description:"",contacts:"",id:'',
  });
  
  const [showPopup, setShowPopup] =useState(true);
  const [ showDelete, setShowDelete]= useState(true);

  const fetchData= async() => {
    try{
      const response = axios.get ('https://61485ffa035b3600175b9dd2.mockapi.io/cq/events',{
        headers:{
          Authorization:"Bearer token"
        },params:{
          name:"goku",email:"gokufireval@gmail.com"
        }

      })

      console.log(response)
      setEvents((await response).data)
    }  catch(err) {
       console.log("error",err)
    }
  }
 

    const postData = () => {
      axios.post("https://61485ffa035b3600175b9dd2.mockapi.io/cq/events",
      {title: state.title,description: state.description, contacts:state.contacts}
      ).then((res)=>{console.log('post is sucess',res.data)}).catch((err)=>{console.log('post is error',err)})
       
      
       }
   
    const putData = async() =>{
      try{
         const response= await axios.put("https://61485ffa035b3600175b9dd2.mockapi.io/cq/events/"+selectedState.id,
           selectedState);
           console.log("put is success", response.data);
           await fetchData();
           setShowPopup(false)
      } catch (error) {
        alert(error?.response?.data, error?.response?.status);
      }
    }

   const deleteData =() =>{
    fetch("https://61485ffa035b3600175b9dd2.mockapi.io/cq/events/"+selectedState.id,{method:'Delete'})
    .then(()=>fetchData()).then(()=>setShowDelete(false));
   }

    useEffect (() =>{
      fetchData();
  
    const obj = [{
      name:"goku",age:27
     }]
  console.log(JSON.stringify(obj));

    },[]) 

    const handleChange =(e)=>{
      const{name,value} =e.target;
      const payload={
        ...state,
        [name]:value

      }

      setState(payload)
    }
      
    const handleSelectedChange =(e) =>{
      const{name,value} =e.target;
      const payload={
        ...selectedState,
        [name]:value

      }

      setSelectedState(payload)
    }

    const handleGoback = () => {
      navigate(-1);
   }

    

    return (
      <div>
        <div className="form">
                <label htmlFor=""> Title</label>
                <input type="text" value={state.title}name="title" onChange={handleChange} />
                <br />
                <label htmlFor=""> Description</label>
                <input type="text" value={state.description}name="description" onChange={handleChange} />
                <br />
                <label htmlFor=""> contacts</label>
                <input type="text" value={state.contacts} name="contacts" onChange={handleChange} />
                <br />
                </div>
      
        <button onClick={()=>fetchData()}> Get Data</button>
        <button onClick={postData}> postData</button>
        <button onClick={handleGoback}>HomePage </button> 
    
       
        {events.map(event => <div key={event.id}>
          {/* <img src={event.poster}alt="poster" height="150px"/> */}
          <div className="heading">
          <p className="title"> {event.title}</p>
          <p className="description">{event.description} </p>
          <p className="contacts">{event.contacts} </p>
          </div>
          <button onClick={()=> { setSelectedState(event);
                  setShowPopup(true)
                  }}>Edit</button>
           <button onClick={()=>{
                  setShowDelete(true);
                  setSelectedState(event);
                }}> Deletes</button>

        </div>)}
      
            {setShowPopup && <PopUpModal showPopup={showPopup} setShowPopup={setShowPopup}>  
             <div className="form">
                <label htmlFor=""> Title</label>
                <input type="text" value={selectedState.title}name="title" onChange={handleSelectedChange} />
                <br />
                <label htmlFor=""> Description</label>
                <input type="text" value={selectedState.description}name="description" onChange={handleSelectedChange} />
                <br />
                <label htmlFor=""> contacts</label>
                <input type="text" value={selectedState.contacts} name="contacts" onChange={handleSelectedChange} />
                  <br />
                 <button onClick={putData}>save item</button>
                  <button onClick={()=>setShowPopup(false)}>Cancel</button>
                 </div> 

 
             </PopUpModal>}
             {
              showDelete && <PopUpModal showPopup={showDelete} setShowPopup={setShowDelete}>
                <div>
                <p> Are You show</p>
              <button onClick={deleteData}> Yes</button>
              <button onClick={()=>setShowDelete(false)}>No</button>

                </div>
             

              </PopUpModal>
             }
       </div>
      
      )   
    }

   export default EventPage























