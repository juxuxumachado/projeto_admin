import { iconeCasa, iconeAjustes,iconeFoto, iconeCadastro } from "./icons/index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside>
            <div className={'bg-gradient-to-r from-indigo-500 to-purple-300 h-20 w-20 flex flex-col items-center justify-center' }>
                <Logo />
            </div>
            <ul>
                <MenuItem url= "/" texto="Inicio" icone={iconeCasa}/>
                <MenuItem url="fotos" texto="Imagens" icone={iconeFoto}/>
                <MenuItem url="cadastro" texto="Cadastro" icone={iconeCadastro}/>
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}/>
            </ul>
        </aside>
    )
}