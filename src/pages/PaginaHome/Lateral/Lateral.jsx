import "./Lateral.css"
import Campo from "./Campo/Campo"

export default function Lateral() {
    return (
        <div className="lateral">
            <div className="logoHomePage">
                Freelab
            </div>
            <div className="campos">
                <Campo
                    campo={"campoPaginaInicial"}
                    nomeCampo={"Pagina Inicial"}
                    icone={"/home.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Meus Trabalhos"}
                    icone={"/work.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Calendário"}
                    icone={"/calendar.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Salvos"}
                    icone={"/saves.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Meu Perfil"}
                    icone={"/profile.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Relatórios"}
                    icone={"/relatorio.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Recebimentos"}
                    icone={"/profits.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Conversas"}
                    icone={"/chat.svg"}
                />
                <Campo
                    campo={""}
                    nomeCampo={"Contratos"}
                    icone={"/contract.svg"}
                />
            </div>
        </div>
    )
}