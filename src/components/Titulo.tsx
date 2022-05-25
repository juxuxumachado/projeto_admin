interface Tituloprops{
    titulo: string
    subtitulo: string
}

export default function Titulo(props: Tituloprops){
    return(
        <div>
            <h1>
                {props.titulo}
            </h1>
            <h2>
                {props.subtitulo}
            </h2>
        </div>
    )
}