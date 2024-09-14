export default function InputBlocoCadastro({ nomeClassName, textInput, typeInput }) {
    return (
        <div className="blocosInputBlocoCadastro">
            <div className={nomeClassName} type={typeInput}>
                {textInput}
                <form>
                    <input autoComplete="off" required type={typeInput} />
                </form>
            </div>
        </div>

    )
}