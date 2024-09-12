import { NavLink } from 'react-router-dom'
import './Campo.css'

export default function Campo({ caminho, nomeCampo, iconeSelecionado, iconeNaoSelecionado }) {
    return (
        <NavLink className="navLink" to={caminho}>
            {({ isActive, isPending, isTransitioning }) => (
                <div className='campo'>
                    <img className="imagemCampo" src={isActive ? iconeSelecionado : iconeNaoSelecionado} />
                    <p>{nomeCampo}</p>
                </div>
            )}

        </NavLink>

    )
}