import React from 'react'

// Importtação dos componentes JSX
import Header from './Header'
import Post from './Post'

// importação dos componentes CSS
import './styles/CenterMenu.css'


export default function CenterMenu() {
  return (
   <div className="centerMenu">
      <Header />
      {/* Futuramente, adicionar todos os posts em uma única timeline */}
      <div className='conteudos'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
   </div>
  )
};
