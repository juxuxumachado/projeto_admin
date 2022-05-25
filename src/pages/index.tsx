import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <Layout titulo='Pagina Inicial'
    subtitulo='Estamos construindo um novo template admin'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam fugiat nesciunt repellendus nulla quam, ab itaque neque praesentium sequi quae tempore modi nisi harum possimus ad aliquid deleniti voluptas? 
      </p>
    </Layout>
  )
 
}


//return (
 // <div className={'bg-gradient-to-r from-green-500 to-blue-500 h-screen'}>
  //  <h1>
  //    Pagina Admin
  //  </h1>

 // </div>
//)