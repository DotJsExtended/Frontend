import '../styles/PaginaPreCadastro.css';


export default function ImagemTexto({className, srcImage, texto}){
    return(
        <div className={className}>
            <img src={srcImage}></img>
                <texto>
                    {texto}
                </texto>
        </div>
    )
}