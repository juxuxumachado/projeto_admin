
interface AutInputCadProps{
    label:string
    valor: any
    tipo?: 'text' |'number'|'Date'
    valorMudou:(novoValor: any) => void
}

export default function AutInputCad(props:AutInputCadProps){
    return(
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input type={props.tipo ?? 'text'}
            value = {props.valor}
            onChange={e => props.valorMudou?.(e.target.value)}
            className = {'px-4 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 outline-none transition-duration-200'}
            />
        </div>
    )
}