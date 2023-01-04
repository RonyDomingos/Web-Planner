import React from 'react'
import './styles/NavLinks.css'

export default function NavLinks() {
  return (
    <div className='nav-links'>
      <div className='link1'>
         <a href="#">Home</a>
      </div>

      <div className='link2'>
         <a href="#">Atividades diárias</a>
      </div>

      <div className='link3'>
         <a href="#">Agenda</a>
      </div>

      <div className='link4'>
         <a href="#">Tecnologias</a>
      </div>

      <div className='button-nav'>
         <img src="#" alt=">" />
      </div>
      
    </div>
  )
}
