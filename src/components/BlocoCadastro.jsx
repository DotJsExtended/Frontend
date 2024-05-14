import '../styles/BlocoCadastro.css'
import InputBlocoCadastro from './InputBlocoCadastro'
import TextoProibido from './TextoProibido'

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
                <InputBlocoCadastro nomeClassName={"inputSenha"} textInput={"Senha"} typeInput={"password"}/>
                <InputBlocoCadastro nomeClassName={"inputAreas"} textInput={"Áreas de Atuação"}/>
            </div>

            <div className="blocoTextosProibidos">
                <TextoProibido textoInput={"sadsAaad"}/>   
                <TextoProibido textoInput={"Oiasdasda"}/>  
                <TextoProibido textoInput={"Oiasdasd"}/>  
            </div>    
        
        </div>
    )
}