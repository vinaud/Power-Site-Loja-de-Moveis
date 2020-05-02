import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';

const Header = ({ children }) => {
    return (
        <header className = 'p-4 bg-indigo-800 sm:flex justify-between items-center'>
            {children}
        </header>
    )
}

const Footer = () => {
    return (
        <footer className = 'p-4 bg-gray-2800 sm:flex justify-between items-center' >
            <div>
              <h5>Loja Móveis</h5>
              <p>Rua rua, Bairro bairro</p>
            </div>

            <BtnWhatsapp/>
          
          </footer>
    )
}

const Index = () => {
    return(
        <div>
          <Header>
              <Logo />
              <div>
                <BtnWhatsapp/>
              </div>
          </Header>

          <Footer/>
        </div>
    )
}

export default Index;