import React from 'react';
import { Helmet} from 'react-helmet';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import img from '../assets/img.jpg';
import img2 from '../assets/img2.jpg';
import selo from '../assets/selo.jpg';
import {graphql, useStaticQuery} from 'gatsby';

const Header = ({ children }) => {
    return (
        <header className = 'p-4 bg-indigo-800 sm:flex justify-between items-center'>
            {children}
        </header>
    )
}

const Footer = () => {
    return (
        <footer className = 'p-4 bg-gray-200 sm:flex justify-between items-center' >
            <div>
              <h5>Loja Móveis</h5>
              <p>Rua rua, Bairro bairro</p>
            </div>

            <BtnWhatsapp/>
          
          </footer>
    )
}


const Hero = () => {
    
    return(
        <div className='flex flex-col items-center sm:flex-row sm: justify-between bg-fixed'  >
              <div className='p-8'>
                  <h2 className='font-bold text-2xl'>Móveis Planejados</h2>
                  <p className='text-xl '>Comerciais e residenciais para todos os ambientes</p>
                  <p className='text-blue-800'>Atendemos Cidade e região </p>
              </div>
              <img className='w-1/2' src ={img} alt='Móveis Planejados'/>
          </div>
    )

}


const Index = () => {

    const selos = [1,2,3,4]
    const projetos = [1,2,3,4,5,6]

   /* const { site } = useStaticQuery(graphql`query MyQuery {
            site {
              siteMetaData {
                title
              }
            }
          } `)
*/
    return(
        <div>
          <Helmet>
             <title>Loja Móveis</title>
          </Helmet>
          
          <Header>
              <Logo />
              <div>
                <BtnWhatsapp/>
              </div>
          </Header>
          <Hero/>
          <div className='flex flex-col sm:flex-row justify-around'>
             {
                 selos.map(() => {
                     return(
                         <img className="my-4 object-scale-down h-48 w-48" src={selo} alt="Selo"/>
                     )
                 })
             }
          </div>
          <div>
              <h2 className='px-8 py-2 text-2xl font-bold'>Projetos de Móveis Planejados</h2>
              <div className='flex flex-wrap justify-around'>
              {projetos.map(() => {
                     return(
                       <div className='max-w-sm'>
                        <div className=' m-6 rounded shadow-lg'>
                            <img  src={img2} alt='Projeto'/>
                            <div className='px-6 py-4'>
                                <p className ='font-bold text-xl mb-2'>Projeto </p>
                                <p>Descrição</p>
                            </div>
                        </div>
                      </div>
                     )
              })}
              </div>
          </div>
          <Footer/>
        </div>
    )
}

export default Index;