import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome";
import PaginaLogin from "./pages/PaginaLogin";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<PaginaHome/>} /> {/* Mudar */}
            <Route path='/login' element={<PaginaLogin/>} />
            <Route path='/home' element={<PaginaHome/>} />
        </Routes>
    )
}