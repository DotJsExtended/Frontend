import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaBoasVindas from "./pages/PaginaBoasVindas";
import PaginaSobreNos from "./pages/PaginaSobreNos";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<PaginaBoasVindas/>} /> {/* Mudar */}
            <Route path='/login' element={<PaginaLogin/>} />
            <Route path='/home' element={<PaginaHome/>} />
            <Route path='/cadastro' element={<PaginaCadastro />} />
            <Route path='/sobrenos' element={<PaginaSobreNos />} />
        </Routes>
    )
}