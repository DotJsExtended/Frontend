import BlocoCadastro from "./BlocoCadastro/BlocoCadastro.jsx"
import Header from "./Header/Header.jsx"
import Rodape from "./Rodape/Rodape.jsx"

export default function PaginaCadastroContratante() {
    return (
        <>
            <Header />
            <BlocoCadastro />

            <div className="gekkoCadastro">
                <img src="../../public/gekko.svg" />
            </div>

            <Rodape />
        </>
    )
}