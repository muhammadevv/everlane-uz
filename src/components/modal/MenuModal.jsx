import React from 'react'
import { Link } from 'react-router-dom'

function MenuModal({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <div onClick={() => setMenuOpen(false)} className="menu-bg"></div>
      <div className={`menu-content ${menuOpen && 'active'}`}>

        <div className="menu-category">
          <p>
            <Link>Men</Link>
          </p>
          <p>
            <Link></Link> Women</p>
          <p>About</p>
          <p>Everworld Stories</p>
        </div>
        <div className="menu-collections">

        </div>

      </div>
    </div>
  )
}

export default MenuModal