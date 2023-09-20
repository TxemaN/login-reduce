import React, { useReducer, useState} from 'react'
import { LogeoReducer } from '../reducer/LogeoReducer'

export const BotonLog = () => {

    const [log, dispatch] = useReducer(LogeoReducer, [])
    
    
    const handleLog = () => {
        
        const action = {
            type: 'Login'
        }
        dispatch(action)
        console.log(action.type)
    }

    const handleLogOut = () => {
       
        const action = {
            type: 'Logout'
        }
        dispatch(action)
        console.log(action.type)
    }


    return (
        <>
        
            <button onClick={handleLog}>  LOGIN </button> 
            <button onClick={handleLogOut}>  LOGOUT </button>
        
        </>
    )
}
