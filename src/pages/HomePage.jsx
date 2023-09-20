
import React, {useContext} from 'react'

import { UserContext } from '../context/UserContext'
export const HomePage = () => {
  const { mensaje, user, setUser } = useContext(UserContext)

  
  return (
    <div> <h1>LoginPages</h1>

    <h2>{mensaje}</h2>

    <pre>{JSON.stringify(user, null, 1)}</pre>
    </div>
  )
}
