import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import img from '../assets/img.jpg'
import selo from '../assets/selo.ico'

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
    return(
        <div>
          <Header>
              <Logo />
              <div>
                <BtnWhatsapp/>
              </div>
          </Header>
          <Hero/>
          <div className='flex flex-col'>
             {
                 selos.map(() => {
                     return(
                         <img src={selo} alt="Selo"/>
                     )
                 })
             }
          </div>
          <Footer/>
        </div>
    )
}

export default Index;