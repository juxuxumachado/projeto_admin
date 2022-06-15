import Layout from "../components/Layout";


export default function Fotos(){
    return(
        <div className="flex text-center">
            
        <Layout titulo="Imagens" subtitulo="Amostra de Fotografias">
            
            <div className={'flex h-all w-screen align-center'}>
                <div className=" flex-c hidden md:block md:w-70 lg:w-70">
                        <img 
                        src="https://source.unsplash.com/random"/>
                </div>
                
            </div>
        </Layout>

        </div>
    )
}