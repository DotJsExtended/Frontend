export default function ResumeProject({ResumeProject, Fotoperfil,NomeEmpresa,AreaAtuação}) {   
    return (
        <>
        <div className={ResumeProject}>
               <img src={Fotoperfil} alt="Foto de perfil do usuario"/>
                <h1>{NomeEmpresa}</h1>
                <h2>{AreaAtuação}</h2>
        </div>
        </>
    )
}