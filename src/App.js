
import './App.css';
import { useContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Component/Login/Login';
import HomePage from './Component/Home/HomePage';
import AboutPage from './Component/About.js/AboutPage';
import ServicePage from './Component/Service/ServicePage';
import WelcomPage from './Component/Welcom/WelcomPage';
import UserProfilePage from './Component/UserProfile/UserProfilePage';
import EventPage from './Component/Events/EventPage';
import { FirstPage } from './Component/first page';





const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'login':
      return {
        ...state, userData: {
          name: payload.name,
          email: payload.email,
          isLogged: true
        }
      }


    case " logout":
      return {
        ...state, userData: {
          name: "",
          email: "",
          isLogged: false

        }
      }

    case "Add_books":
      return {...state, BooksList: [...state.BooksList,payload]}
    case "Edit_books":
      return {...state, BooksList: [...state.BooksList].map(Books => {
          if (Books.id === payload.id) {
            return payload
          }
          return Books
        })
      }

    case "Delete":
      return {
        ...state, BooksList: [...state.BooksList].filter(Books => Books.id !== payload)
      }
    default:
      return state;
   }
  }

 const initialState = { 
  userData: {
    name: "",
    email: "",
    isLogged: true,
  },

  BooksList: [
    { id:"1", name: "ABJ ", description: " books", brand: "Book", image: "" }
  ],
  cart: []
}


function App() {
  const [state, setState] = useReducer(reducer, initialState);

  return (
    <div>
    
      <Routes>
        <Route path='/' element={<FirstPage/>} />
        <Route path='/login' element={<LoginPage state={state} setState={setState} />} />
        <Route path='/home' element={<HomePage state={state} setState={setState} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/WelcomPage' element={<WelcomPage />} />
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/events' element={<EventPage/>}/>



      </Routes>
    </div>

  );

};



export default App;

