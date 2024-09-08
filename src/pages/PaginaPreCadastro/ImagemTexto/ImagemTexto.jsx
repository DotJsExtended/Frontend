export default function ImagemTexto({ className, srcImage, texto }) {
    return (
        <div className={className}>
            <img src={srcImage}></img>
            <p>
                {texto}
            </p>
        </div>
    )
}