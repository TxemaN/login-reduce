import React, {useState} from 'react'
import { UserContext } from '../context/UserContext'


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

   return (
       <UserContext.Provider value={{ mensaje: 'USUARIO ACTIVADO', user, setUser }}>
           {children}
       </UserContext.Provider>
   )
}