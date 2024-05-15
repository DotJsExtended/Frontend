import BlocoCadastro from "./BlocoCadastro.jsx"
import Header from "./Header.jsx"
import Rodape from "./Rodape.jsx"

export default function Cadastro() {
    return (
        <>
            <Header />
            <BlocoCadastro />
            
            <div className="gekkoCadastro">
            <img src="../../public/gekko.svg" />
            </div>

            <Rodape/>
        </>
    )
}