export default function InputBlocoCadastro({nomeClassName, textInput})
{
    return(
        <div className={nomeClassName}>
            {textInput}
            <form>
                <input autocomplete="off" required/>
            </form>
        </div>
    )
}