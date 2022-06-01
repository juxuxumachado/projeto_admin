interface Tituloprops{
    titulo: string
    subtitulo: string
}

export default function Titulo(props: Tituloprops){
    return(
        <div>
            <h1 className={'font-black text-3xl text-purple-800'}>
                {props.titulo}
            </h1>
            <h2 className={'font-light text-2xl text-blue-900'}>
                {props.subtitulo}
            </h2>
        </div>
    )
}