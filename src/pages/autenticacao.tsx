import AutInput from "../components/AutInput";
import  {useState} from "react";
import Link from "../../node_modules/next/link";


function submeter(){

}


export default function Insercao(): JSX.Element{
    const [email, setEmail]= useState('')
    const [senha, setSenha]= useState('')
    return(
        <div  className="flex items-center justify-center h-screen">
            <div className="hidden md:block md:w-1/2 lg:w-2/3 ">
                    <img 
                    src="https://source.unsplash.com/random"
                    alt=" Imagem da Tela de Altenticação"
                    className="h-screen w-full" />
            </div>
                <div className="m-10 w-full md:w-1/2 lg:w-1/3 ">
                    <AutInput 
                        label="Email"
                        tipo="email"
                        valor ={email}
                        valorMudou={setEmail}
                    />
                    <AutInput
                        label="Senha"
                        tipo="password"
                        valor ={senha}
                        valorMudou={setSenha}
                    />
                    <Link href="/">
                        <button onClick={submeter} className={'first-letter:w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 w-full'}>
                            Entrar
                        </button>
                    
                    </Link>
                       
                    
                </div>
        </div>
    )

}