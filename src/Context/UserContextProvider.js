
import { createContext, useState } from "react";
export const UserContext =createContext()

export default function UserContextProvider ({children}) {
    const[state,setState]= useState({
        name:"goku",
        email:"firetech12@gmail.com"
    })

    return <UserContext.Provider value={ {userData:state,
    setUserData:setState}}>
        {children}

    </UserContext.Provider>
}
