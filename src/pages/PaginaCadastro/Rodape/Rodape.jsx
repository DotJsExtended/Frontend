import { Link } from 'react-router-dom'
import './Rodape.css'

export default function Rodape() {
    return (
        <div className="rodape">
            <div className="loginRodape">
                Já possui uma conta?
                <Link to={"/login"}><button>
                    LOGIN
                </button></Link>
            </div>
            <div className='naoFreelancerRodape'>
                Não é freelancer?
            </div>
        </div>
    )
}