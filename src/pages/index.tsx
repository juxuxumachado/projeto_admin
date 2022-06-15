import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <Layout titulo='Imagens'
    subtitulo='Trabalhos de fotografia mundo afora'>
      <b className='flex text-center justify-center text-2xl'>FOTOGRAFIA:</b> 
      <p className=' flex items-center justify-center text-justify text-lg '>
      Do grego φῶς [fós] ("luz") e γραφίς [grafis] ("instrumento para escrever, gravar, desenhar ou pintar") ou γραφή [grafé] (“escrita”), significa "desenhar com luz e contraste"; noutros termos,[1] é essencialmente a técnica de criação de imagens por meio de exposição luminosa, fixando-as em uma superfície sensível.[2] A primeira fotografia reconhecida remonta ao ano de 1826 e é atribuída ao francês Joseph Nicéphore Niépce. Contudo, a invenção da fotografia não é obra de um só autor, mas um processo de acúmulo de avanços por parte de muitas pessoas, trabalhando, juntas ou em paralelo, ao longo de muitos anos. Se por um lado os princípios fundamentais da fotografia se estabeleceram há décadas e, desde a introdução do filme fotográfico colorido, quase não sofreram mudanças, por outro, os avanços tecnológicos têm sistematicamente possibilitado melhorias na qualidade das imagens produzidas, agilização das etapas do processo de produção e a redução de custos, popularizando o uso da fotografia.
Câmera fotográfica em operação.
Atualmente, a introdução da tecnologia digital tem modificado drasticamente os paradigmas que norteiam o mundo da fotografia. Os equipamentos, ao mesmo tempo que são oferecidos a preços cada vez menores, disponibilizam ao usuário médio recursos cada vez mais sofisticados, assim como maior qualidade de imagem e facilidade de uso. A simplificação dos processos de captação, armazenagem, impressão e reprodução de imagens proporcionados intrinsecamente pelo ambiente digital, aliada à facilidade de integração com os recursos da informática, como organização em álbuns, incorporação de imagens em documentos e distribuição via Internet, têm ampliado e democratizado o uso da imagem fotográfica nas mais diversas aplicações. A incorporação da câmera fotográfica aos aparelhos de telefonia móvel têm definitivamente levado a fotografia ao cotidiano particular do indivíduo.
Dessa forma, a fotografia, à medida que se torna uma experiência cada vez mais pessoal, deverá ampliar, através dos diversos perfis de fotógrafos amadores ou profissionais, o já amplo espectro de significado da experiência de se conservar um momento em uma imagem.
      </p>
      <b className='flex text-center justify-center text-2xl'>HISTÓRIA:</b> 
      <p className=' flex items-center justify-center text-justify text-lg '>
      A fotografia não é a obra final de um único criador. Ao longo da história, diversas pessoas foram agregando conceitos e processos que deram origem à fotografia como a conhecemos. O mais antigo destes conceitos foi o da câmara escura, descrita pelo napolitano Giovanni Baptista Della Porta, já em 1558, e conhecida por Leonardo da Vinci[3] que, como outros artistas no século XVI, a usava para esboçar pinturas.
O cientista italiano Angelo Sala, em 1604, percebeu que um composto de prata escurecia ao Sol, supondo que esse efeito fosse produzido pelo calor. Foi então que Johann Heinrich Schulze, fazendo experiências com ácido nítrico, prata e gesso em 1724, determinou que era a prata halógena, convertida em prata metálica, e não o calor, que provocava o escurecimento.
A primeira fotografia reconhecida é uma imagem produzida em 1826 pelo francês Joseph Nicéphore Niépce numa placa de estanho coberta com um derivado de petróleo fotossensível chamado Betume da Judeia. A imagem foi produzida com uma câmera, sendo exigidas cerca de oito horas de exposição à luz solar. Nièpce chamou o processo de "heliografia", gravura com a luz do Sol. Paralelamente, Daguerre, outro francês, produzia com uma câmera escura efeitos visuais em um espetáculo denominado "Diorama". Daguerre e Niépce trocaram correspondência durante alguns anos, vindo finalmente a firmarem sociedade.

Após a morte de Nièpce, Daguerre desenvolveu um processo com vapor de mercúrio que reduzia o tempo de revelação de horas para minutos. O processo foi denominado daguerreotipia. Daguerre descreveu seu processo à Academia de Ciências e Belas Artes, na França, e logo depois requereu a patente do seu invento na Inglaterra. A popularização dos daguerreótipos[4] deu origem às especulações sobre o "fim da pintura", inspirando o Impressionismo.[5]
      </p>
    </Layout>
  )
 
}

