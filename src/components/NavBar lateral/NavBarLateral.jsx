import "./NavBarLateral.css"
import Campo from "./Campo/Campo"
import { NavLink } from "react-router-dom"

export default function NavBarLateral({ campoSelecionado }) {
    return (
        <div className="lateral">
            <div className="logoHomePage">
                Freelab
            </div>
            <div className="campos">
                <Campo
                    caminho={"/home"}
                    nomeCampo={"Pagina Inicial"}
                    iconeSelecionado={"/homeSelecionado.svg"}
                    iconeNaoSelecionado={"/homeNaoSelecionado.svg"}
                />
                <Campo
                    caminho={"/meus-trabalhos"}
                    nomeCampo={"Meus Trabalhos"}
                    iconeSelecionado={"/workSelecionado.svg"}
                    iconeNaoSelecionado={"/workNaoSelecionado.svg"} />

                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Calendário"}
                    iconeNaoSelecionado={"/calendar.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Salvos"}
                    iconeNaoSelecionado={"/saves.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Meu Perfil"}
                    iconeNaoSelecionado={"/profileNaoSelecionado.svg"}
                    iconeSelecionado={"/profileSelecionado.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Relatórios"}
                    iconeNaoSelecionado={"/relatorio.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Recebimentos"}
                    iconeNaoSelecionado={"/profits.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}
                    nomeCampo={"Conversas"}
                    iconeNaoSelecionado={"/chat.svg"}
                />
                <Campo
                    caminho={"/em-construcao"}  
                    nomeCampo={"Contratos"}
                    iconeNaoSelecionado={"/contract.svg"}
                />
            </div>
        </div>
    )
}