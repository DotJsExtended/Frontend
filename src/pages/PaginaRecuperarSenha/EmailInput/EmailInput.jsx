import './EmailInput.css'

export default function EmailInput() {
    return (
        <div className="blocoInputEmailRecuperarSenha">
            <div>
                <p>Para recuperar sua senha, insira o e-mail</p>
                <p>cadastrado em sua conta do FreeLaB</p>
            </div>

            <input type='text' placeholder="example@example.com" />
        </div>
    )
}