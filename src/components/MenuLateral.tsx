import { iconeCasa, iconeAjustes } from "./icons/index";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside>
            <div className={'bg-gradient-to-r from-indigo-500 to-purple-300 h-20 w-20'}>

            </div>
            <ul>
                <MenuItem url= "/" texto="Inicio" icone={iconeCasa}/>
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}/>
            </ul>
        </aside>
    )
}