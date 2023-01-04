import React from 'react';
import './styles/IdPerfil.css';
import react from '../assets/react.svg';

// import { Container } from './styles';

export default function IdPerfil() {
  return(
   <div className='id-perfil'>
      <div className='img-post'></div>
      <div className="id-post">
         
         <div className="id">
            <h3>Ronynho</h3>

            <div className="separador"></div>

            <p>@ronysantos_d18</p>

            <div className="separador"></div>

            <p>02 de Janeiro</p>
         </div>
         <div className="conteudo-post">
            {/* Texto do post e/ou Imagem do post */}
            <h3>Feliz ano novo, galerinha!</h3>
            <img src={react} alt="imagem" />
         </div>
         <div className='actions-post'>
            {/* Comentar, estatísticas, like...  */}
            <img src={react} alt="react" />
            <img src={react} alt="react" />
            <img src={react} alt="react" />
            <img src={react} alt="react" />
         </div>
         
      </div>
   </div>
  )
};