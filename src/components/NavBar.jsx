import React, { useContext } from 'react'


import {Link, NavLink} from "react-router-dom"
import { UserContext } from '../context/UserContext'
export const NavBar = () => {
   
    
  return (
    <nav>
<ul>
    <li>
    


    </li>
<li>
    <NavLink to = '/'> HOME</NavLink>
</li>
<li>
<NavLink to = 'servicios'> SERVICOS</NavLink>
</li>
<li>
<NavLink to = 'productos'> PRODUCTOS</NavLink>
</li>
<li>
<NavLink to = 'login'> LOGIN</NavLink>
</li>

</ul>

    </nav>
  )
}
