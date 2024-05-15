import BlocoCadastro from "../components/BlocoCadastro.jsx"
import Header from "../components/Header.jsx"
import Rodape from "../components/Rodape.jsx"

export default function PaginaCadastro() {
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