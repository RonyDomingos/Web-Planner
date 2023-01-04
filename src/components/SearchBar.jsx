import React from 'react'
import './styles/SearchBar.css'
import search from "../assets/search.png"

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <div className="search-icon">
         <img src={search} alt="Logo"></img>
      </div>
      <div className="search-placeholder">
         <p>Faça sua pesquisa aqui...</p>
      </div>
    </div>
  )
}
