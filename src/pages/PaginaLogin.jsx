import React from "react";
import "../style/paginaLogin.css"
import CampoLogin from "../components/PaginaLogin/CampoLogin";
import BotaoContinuar from "../components/PaginaLogin/BotaoContinuar";
import BotaoCriarConta from "../components/PaginaLogin/BotaoCriarConta";
import BotaoVoltar from "../components/PaginaLogin/BotaoVoltar";
import Imagem from "../components/PaginaLogin/Imagem";
import Logo from "../components/PaginaLogin/Logo";

export default function PaginaLogin(){
    return(
        <div>
            <div className="textoBoasVindas">
                <Logo />
                <BotaoVoltar />
                <p>Bem vindo de volta! Faça login para acessar sua conta e explorar novas oportunidades ou gerenciar seus projetos</p>
                <Imagem />
            </div>
            <div className="retanguloAzul">
                <h1>Login</h1>
                <p>ou use seu endereço de email ou nome de usuário</p>
                <CampoLogin placeholder={"Email ou nome de usuário"} />
                <CampoLogin iconSrc={""} placeholder={"Senha"} icon2Src={""}/>
                <p>Esqueci a minha senha</p>
                <BotaoContinuar />
                <p>Não tem uma conta?</p>
                <BotaoCriarConta />
            </div>
        </div>
    )
}