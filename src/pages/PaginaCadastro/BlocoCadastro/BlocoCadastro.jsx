import './BlocoCadastro.css'
import Button from '../../../components/Buttons/Button'
import InputBlocoCadastro from './InputBlocoCadastro/InputBlocoCadastro'
import TextoProibido from './TextoProibido/TextoProibido'

export default function BlocoCadastro() {
    return (
        <div className="blocoCadastro">
            <div className="titleBlocoCadastro">
                CADASTRO - FREELANCER
            </div>
            <div className="inputsBlocoCadastro">
                <InputBlocoCadastro nomeClassName={"inputNome"} textInput={"Nome Completo"} />
                <InputBlocoCadastro nomeClassName={"inputUser"} textInput={"Nome de Usuário"} />
                <InputBlocoCadastro nomeClassName={"inputEmail"} textInput={"Email"} />
                <InputBlocoCadastro nomeClassName={"inputID"} textInput={"CPF/CNPJ"} />
                <InputBlocoCadastro nomeClassName={"inputTel"} textInput={"Telefone"} />
                <InputBlocoCadastro nomeClassName={"inputSenha"} textInput={"Senha"} typeInput={"password"} />
                <InputBlocoCadastro nomeClassName={"inputAreas"} textInput={"Áreas de Atuação"} />
            </div>

            <div className="blocoTextosProibidos">
                <TextoProibido textoProibido={"Pelo menos 8 caracteres"} />
                <TextoProibido textoProibido={"Pelo menos uma letra"} />
                <TextoProibido textoProibido={"Pelo menos um número"} />
            </div>

            <Button
                className={"botaoContinuar"}
                textobtt={"CONTINUAR"}
                caminho={"/home"}
            />
        </div>
    )
}