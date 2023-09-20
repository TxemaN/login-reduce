import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { HomePage, LoginPage, ProductsPages, ServicesPages } from "../pages"
import { UserProvider } from '../components/UserProvider'
export const AppRouter = () => {
    return (
        
        <UserProvider>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='servicios' element={<ServicesPages />} />
                <Route path='productos' element={<ProductsPages/>} />
                <Route path='login' element={<LoginPage />} />

                {/* <Route path='/*' element={<LoginPage />} /> */}
                <Route path='/*' element={<Navigate to={'/'} />} />
            </Routes>
            </UserProvider>



       
    )
}
