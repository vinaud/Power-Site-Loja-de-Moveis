import React from 'react';
import './styles.css';
import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';

const Header = ({ children }) => {
    return (
        <div className = 'p-4 bg-indigo-800 sm:flex justify-between items-center'>
            {children}
        </div>
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

          <div>
          <h5></h5>
          </div>
        </div>
    )
}

export default Index;