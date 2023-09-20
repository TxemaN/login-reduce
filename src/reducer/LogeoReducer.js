import { LoginPage } from "../pages"

  
export const LogeoReducer = (state, action) => {
    
    console.log(state)
    switch (action.type) {

        case 'Login':
           return "Login"

        case 'Logout':
           return  "Logout"
            
        default:
            
            return state
            
    }
    
}