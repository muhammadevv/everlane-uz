import React from 'react'

function Aside() {

  return (
    <aside className='collections-aside'>
      <div className="aside-head">
        <p className='aside-head__toptitle'>
          <a href="#">Home</a> /
          <a href="#">Men</a>
        </p>
        <h1 className='aside-head__title'>
          Shop All Mne's Clothing & Apparel
        </h1>
      </div>
      <div className="aside-products">
        <div className="aside-product"></div>
      </div>
    </aside>
  )
}

export default Aside