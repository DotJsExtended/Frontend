import '../styles/BlocoCadastro.css'
import InputBlocoCadastro from './InputBlocoCadastro'

export default function BlocoCadastro()
{
    return (
        <div className="blocoCadastro">
            <div className="titleBlocoCadastro">
                CADASTRO - FREELANCER
            </div>
        <div className="inputsBlocoCadastro">
            <InputBlocoCadastro nomeClassName={"inputNome"} textInput={"Nome Completo"}/>
            <InputBlocoCadastro nomeClassName={"inputUser"} textInput={"Nome de Usuário"}/>
            <InputBlocoCadastro nomeClassName={"inputEmail"} textInput={"Email"}/>
            <InputBlocoCadastro nomeClassName={"inputID"} textInput={"CPF/CNPJ"}/>
            <InputBlocoCadastro nomeClassName={"inputTel"} textInput={"Telefone"}/>
            <InputBlocoCadastro nomeClassName={"inputSenha"} textInput={"Senha"}/>
            <InputBlocoCadastro nomeClassName={"inputAreas"} textInput={"Áreas de Atuação"}/>
        </div>
        
        </div>
    )
}