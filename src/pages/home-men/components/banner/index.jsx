import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className='banner'>
      <div className="banner-bg" >
        <img className='banner-bg__image' src='/men/banner/banner-bg.avif' alt="" />
      </div>
      <div className="banner-content">
        <h1 className='banner-title'>Summer Ready</h1>
        <p className='banner-subtitle'>Top styles of season have just droppend</p>
        <Link to={'/collections/mens-new-arrivals-1'}>
          <button className='banner-button'>Shop now</button>
        </Link>
      </div>
    </section>
  )
}

export default Banner