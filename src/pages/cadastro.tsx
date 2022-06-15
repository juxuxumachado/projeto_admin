import AutInput from "../components/AutInput";
import  {useState} from "react";
import Link from "../../node_modules/next/link";
import Layout from "../components/Layout";


function cadastrar(){

}


export default function Autenticacao(): JSX.Element{
    const [nome, setnome]= useState('')
    const [endereco, setendereco]= useState('')
    const [cidade, setcidade]= useState('')
    const [cep, setcep]= useState('')
    const [nasc, setnasc]= useState('')
    return(
        <div  className="flex text-center">
           <Layout titulo="Cadastros" subtitulo="Cadastro de Fotografias">
           <div className={'flex h-all w-screen text-left' }>
                <div className="m-10 w-full md:w-1/3 lg:w-1/3 ">
                    <AutInput 
                        label="Nome"
                        tipo="text"
                        valor ={nome}
                        valorMudou={setnome}
                    />
                    <AutInput
                        label="Endereço"
                        tipo="text"
                        valor ={endereco}
                        valorMudou={setendereco}
                    />
                     <AutInput
                        label="Cidade"
                        tipo="text"
                        valor ={cidade}
                        valorMudou={setcidade}
                    />
                      <AutInput
                        label="CEP"
                        tipo="text"
                        valor ={cep}
                        valorMudou={setcep}
                    />
                       <AutInput
                        label="Data de Nascimento"
                        tipo="Date"
                        valor ={nasc}
                        valorMudou={setnasc}
                    />
                    <Link href="fotos">
                        <button onClick={cadastrar} className={'first-letter:w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 w-full'}>
                            Cadstrar
                        </button>
                        </Link>
                
                    
                </div>
              </div>
                </Layout>
        </div>
    )

}