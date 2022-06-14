import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props:LayoutProps){
    return(
        <div className={'flex h-screen w-screen'}>
            <MenuLateral />
                 <div className={'flex-c bg-gradient-to-r from-green-500 to-blue-500  p-6'}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                    <Conteudo> {props.children} </Conteudo>
                 </div>
        </div>
        
    )
}