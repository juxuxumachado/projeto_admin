
interface AutInputProps{
    label:string
    valor: any
    tipo?: 'text' |'email'|'password'
    valorMudou:(novoValor: any) => void
}

export default function AutInput(props:AutInputProps){
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