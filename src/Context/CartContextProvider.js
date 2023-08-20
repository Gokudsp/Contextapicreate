import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}) { 
      return <CartContext.Provider value={{text: "Hello From context"}}>
    
       {children}

     </CartContext.Provider>
}