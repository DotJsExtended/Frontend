import React from "react";
import "../style/paginaLogin.css"
import CampoLogin from "../components/PaginaLogin/CampoLogin";
import CampoSenha from "../components/PaginaLogin/CampoSenha";

import BotaoContinuar from "../components/PaginaLogin/BotaoContinuar";
import BotaoCriarConta from "../components/PaginaLogin/BotaoCriarConta";
import BotaoVoltar from "../components/PaginaLogin/BotaoVoltar";
import ImagemPadrao from "../components/ImagemPadrao";
import Logo from "../components/Logo"; 

export default function PaginaLogin(){
    return(
        <div>
            <div className="retanguloBranco">
                <BotaoVoltar />
                <Logo className={"Logo"}/>
                <div className="textoBemVindo">
                    <p>Bem vindo de volta! Faça login para
                    acessar sua conta e explorar novas
                    oportunidades ou gerenciar seus projetos</p>
                </div>
                <ImagemPadrao imagem = {"image-removebg-preview 1.png"} className={"imagem"} />
            </div>
            <div className="retanguloAzul">
                <h1>LOGIN</h1>
                <img className="oAuthIcons" src="Group 4.png"></img>
                <div className="alternatives">
                    <p>ou use seu endereço de email ou</p>
                    <p>nome de usuário</p>
                </div>
                <CampoLogin iconSrc={"mail.png"} placeholder={"Email ou nome de usuário"} />
                <div className="senha">
                    <CampoSenha iconSrc={"lock.png"} placeholder={"Senha"} icon2Src={"eye.png"}/>
                    <a href="">Esqueci a minha senha</a>
                </div>
                
                <BotaoContinuar />
                <div className="semConta">
                    <p>Não tem uma conta?</p>
                    <BotaoCriarConta />
                </div>
                
            </div>
        </div>
    )
}