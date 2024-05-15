import '../styles/Rodape.css'

export default function Rodape()
{
    return (
        <div className="rodape">
            <div className="loginRodape">
            Já possui uma conta?
                <button>LOGIN</button>
            </div>
            <div className='naoFreelancerRodape'>
                Não é freelancer?
            </div>
        </div>
    )
}