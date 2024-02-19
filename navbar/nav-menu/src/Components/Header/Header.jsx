import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.styles.scss'

const Header = ({ title }) => {
  return (
    <div className='Header'>
       <div className="title">{title}</div>
       <div className="nav-container">
          <NavLink className='nav' to='/'>Home</NavLink>
          <NavLink className='nav' to='/info'>Sobre</NavLink>
          <NavLink className='nav' to='/products'>Produtos</NavLink>
          <NavLink className='nav' to='/contacts'>Contato</NavLink>
       </div>
    </div>
  )
}

export default Header
