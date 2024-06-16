import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaBoasVindas from "./pages/PaginaBoasVindas";
import PaginaPreCadastro from "./pages/PaginaPreCadastro";
import Pagina2FAtelefone from "./pages/Pagina2FAtelefone";
import Pagina2FAemail from "./pages/Pagina2FAemail";

export default function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<PaginaBoasVindas/>} />
            <Route path='/login' element={<PaginaLogin/>} />
            <Route path='/home' element={<PaginaHome/>} />
            <Route path='/cadastro' element={<PaginaCadastro />} />
            <Route path='/precadastro' element={<PaginaPreCadastro />} />
            <Route path='/2fa-telefone' element={<Pagina2FAtelefone />} />
            <Route path='/2fa-email' element={<Pagina2FAemail />} />
        </Routes>
    )
}