import React from 'react'

function Banner() {
  return (
    <section className='banner'>
      <div className="banner-bg">
        <video autoPlay loop playsInline src='/women/banner/banner-bg-women.mp4' className='banner-bg__image' muted={true} ></video>
      </div>
      <div className="banner-content">
        <h1 className='banner-title'>Day-to-Night Dresses</h1>
        <p className='banner-subtitle'>Every occasion. Every silhouette. Every fit.</p>
        <button className='banner-button'>Shop dresses</button>
      </div>
    </section>
  )
}

export default Banner