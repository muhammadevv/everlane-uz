import React from 'react'

function Banner() {
  return (
    <section className='banner'>
      <div className="banner-bg">
        <img className='banner-bg__image' src="/banner/banner-bg.avif" alt="" />
      </div>
      <div className="banner-content">
        <h1 className='banner-title'>Summer Ready</h1>
        <p className='banner-subtitle'>Top styles of the season have just droppend</p>
        <button className='banner-button'>Shop now</button>
      </div>
    </section>
  )
}

export default Banner