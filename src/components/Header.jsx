import React from 'react';
import NavLinks from './NavLinks';

// Importação dos componentes JSX
import SearchBar from './SearchBar';

// Importação dos componentes CSS
import './styles/Header.css'
import './styles/SearchBar.css'

// import { Container } from './styles';

function Header() {
  return(
    <div className="header">
      <div className="up">
        <SearchBar />
        {/* Botao para add posts */}
      </div>
      
      <div className="down">
        <NavLinks />
      </div>
    </div>
   );
}

export default Header;