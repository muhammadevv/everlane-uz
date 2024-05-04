import React, { useState } from 'react'
import { CartIcon, LogoIcon, SearchIcon, UserIcon } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'
import HeaderCategories from './components/HeaderCategories'

function Header({ setModalOpen }) {
  const [active, setActive] = useState(true)
  const location = useLocation()
  const path = location.pathname.split('').slice(1, 11).join('')
  console.log(path);
  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-row">
            <div className="header-nav">
              <Link className={`header-link ${'mens' === path ? () => setActive(true) === active && 'active' : ''}`} to='/mens'>Men</Link>
              <Link className={`header-link ${'womens' === path ? () => setActive(true) === active && 'active' : ''}`} to={`/womens`}>Women</Link>
              <Link className={`header-link ${'about' === path ? () => setActive(true) === active && 'active' : ''}`} to='/about'>About</Link>
              <Link className={`header-link ${'ever-world' === path ? () => setActive(true) === active && 'active' : ''}`} to='ever-world'>Everworld Stories</Link>
            </div>
            <div className="header-logo">
              <Link to='/'>
                <LogoIcon />
              </Link>
            </div>
            <div className="header-buttons">
              <button className='header-button'><SearchIcon /></button>
              <button className='header-button'><UserIcon /></button>
              <button onClick={() => setModalOpen(true)} className='header-button'><CartIcon /></button>
            </div>
          </div>
        </div>
      </header>
      <HeaderCategories />
    </>
  )
}

export default Header