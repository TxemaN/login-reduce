import React, {useContext} from 'react'

import { UserContext } from '../context/UserContext'

export const LoginPage = () => {
  const { mensaje, user, setUser } = useContext(UserContext)

  const usuario = {id: 1000,name: 'Pruebausuario',pass: 12345}
  return (
    <div>
    <h1>LoginPages</h1>

    <h2>{mensaje}</h2>

    <pre>{JSON.stringify(user, null, 1)}</pre>

    <button onClick={() => setUser(usuario)}>
        ACTIVAR EL USUARIO PARA TODOS LOS PATH
    </button>

</div>
  )
}
