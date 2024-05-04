import React from 'react'
import { CartIcon, LogoIcon, SearchIcon, UserIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'
import HeaderCategories from './components/HeaderCategories'

function Header() {
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-row">
            <div className="header-nav">
              <a className='header-link active' href="#">Women</a>
              <a className='header-link' href="#">Men</a>
              <a className='header-link' href="#">About</a>
              <a className='header-link' href="#">Everworld Stories</a>
            </div>
            <div className="header-logo">
              <Link to={'/'}>
                <LogoIcon />
              </Link>
            </div>
            <div className="header-buttons">
              <button className='header-button'><SearchIcon /></button>
              <button className='header-button'><UserIcon /></button>
              <button className='header-button'><CartIcon /></button>
            </div>
          </div>
        </div>
      </header>
      <HeaderCategories />
    </>
  )
}

export default Header