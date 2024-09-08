import React from "react";
import { Route, Routes } from "react-router-dom"
import PaginaHome from "./pages/PaginaHome";
import PaginaLogin from "./pages/PaginaLogin/PaginaLogin";
// import PaginaCadastroFreelancer from "./pages/PaginaCadastroFreelancer/PaginaCadastroFreelancer";
import PaginaBoasVindas from "./pages/PaginaBoasVindas/PaginaBoasVindas";
import PaginaPreCadastro from "./pages/PaginaPreCadastro/PaginaPreCadastro";
import Pagina2FAtelefone from "./pages/Pagina2FAtelefone/Pagina2FAtelefone";
import Pagina2FAemail from "./pages/Pagina2FAemail/Pagina2FAemail";
import PaginaRecuperaSenha from "./pages/PaginaRecuperarSenha/PaginaRecuperaSenha";
import PaginaCadastroContratante from "./pages/PaginaCadastroContratante/PaginaCadastroContratante";

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<PaginaBoasVindas />} />
            <Route path='/login' element={<PaginaLogin />} />
            <Route path='/home' element={<PaginaHome />} />
            {/* <Route path='/cadastro-freelancer' element={<PaginaCadastroFreelancer />} /> */}
            <Route path='/cadastro-contratante' element={<PaginaCadastroContratante />} />
            <Route path='/precadastro' element={<PaginaPreCadastro />} /> 
            <Route path='/2fa-telefone' element={<Pagina2FAtelefone />} /> {/*Não tá para a mostra steam*/}
            <Route path='/2fa-email' element={<Pagina2FAemail />} />{/*Não tá para a mostra steam*/}
            <Route path='/recuperar-senha' element={<PaginaRecuperaSenha />} /> {/*Não tá para a mostra steam*/}
        </Routes>
    )
}