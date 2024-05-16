import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaBoasVindas from "./pages/PaginaBoasVindas";
import PaginaPreCadastro from "./pages/PaginaPreCadastro";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<PaginaBoasVindas/>} /> {/* Mudar */}
            <Route path='/login' element={<PaginaLogin/>} />
            <Route path='/home' element={<PaginaHome/>} />
            <Route path='/cadastro' element={<PaginaCadastro />} />
            <Route path='/sobrenos' element={<PaginaPreCadastro />} />
        </Routes>
    )
}