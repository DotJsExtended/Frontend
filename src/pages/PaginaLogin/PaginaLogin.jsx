import React, { useEffect, useState } from "react";
import "./PaginaLogin.css";
import Button from "../../components/Buttons/Button";
import ButtonTxt from "../../components/Buttons/ButtonTxt";
import ImageStandard from "../../components/Images/ImageStandard";
import Logo from "./Logo/Logo";
import CampoSenha from "./CampoSenha/CampoSenha";
import CampoLogin from "./CampoLogin/CampoLogin";
import Voltar from "../../components/Buttons/ButtonVoltar/Voltar";
import { Link } from "react-router-dom";

export default function PaginaLogin() {
    const [email, setEmail] = useState(''); // Estado para o email
    const [senha, setSenha] = useState(''); // Estado para a senha
    const [caminhoContinuar, setCaminhoContinuar] = useState('')
    useEffect(() => {
        if (email === "exemplo@gmail.com" && senha === "123456")
            setCaminhoContinuar("/home")

    }, [email, senha])
    // Função que atualiza o estado de email
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Função que atualiza o estado de senha
    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };
    return (
        <div>
            <div className="retanguloBranco">
                <Voltar />
                <Logo className={"Logo"} />
                <div className="textoBemVindo">
                    <p>Bem vindo de volta! Faça login para acessar sua conta e explorar novas oportunidades ou gerenciar seus projetos</p>
                </div>
                <ImageStandard imagem={"image-removebg-preview 1.png"} className={"imagem"} />
            </div>
            <div className="retanguloAzul">
                <h1>LOGIN</h1>
                <img className="oAuthIcons" src="Group 4.png"></img>
                <div className="alternatives">
                    <p>ou use seu endereço de email ou</p>
                    <p>nome de usuário</p>
                </div>
                <div className="camposPreencherLogin">
                    {/* CampoLogin agora recebe o valor do estado e a função onChange */}
                    <CampoLogin
                        className={"campoLogin"}
                        iconSrc={"mail.png"}
                        placeholder={"Email ou nome de usuário"}
                        type={'text'}
                        value={email} // Estado email
                        onChange={handleEmailChange} // Função para atualizar o estado de email
                    />
                    <div className="senha">
                        {/* CampoSenha agora recebe o valor do estado e a função onChange */}
                        <CampoSenha
                            className={"campoSenha"}
                            iconSrc={"lock.png"}
                            placeholder={"Senha"}
                            value={senha} // Estado senha
                            onChange={handleSenhaChange} // Função para atualizar o estado de senha
                        />
                        <Link to={""}>Esqueci minha senha</Link>
                    </div>
                </div>

                <Button className={"continuar"} textobtt={"CONTINUAR"} caminho={caminhoContinuar} />
                <div className="semConta">
                    <p>Não tem uma conta?</p>
                    <Button caminho={"/precadastro"} className={"criarConta"} textobtt={"CRIAR CONTA"} />
                </div>
            </div>
        </div>
    );
}
