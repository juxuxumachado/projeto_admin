import Link from "../../node_modules/next/link"

interface MenuItemProps{
    url: string
    texto: string
    icone: any
}

export default function MenuItem (props: MenuItemProps){
    return(
        <li className={'hover:bg-green-400'}>
            <Link href={props.url}>
                <a className={'flex flex-col justify-center items-center w-20 h-20'  }>
                {props.icone}
                <span className={'text-purple-800 font-light text-xs'}>
                    {props.texto}
                </span>
                </a>
            </Link>
            
        </li>
    )
}