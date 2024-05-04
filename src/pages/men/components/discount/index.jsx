import React from 'react'

function Discount() {
  return (
    <section className='discount'>
      {/* <div className="discount-banner">
          <div className="discount-bg">
            <img src="/discount/discount-bg.avif" alt="" />
          </div>

          <div className="discount-banner__content">
            <p className='discount-banner__subtitle'>Over 600+ styles are on sale. </p>
            <h1 className='discount-banner__title'>Up to 60% Off</h1>
            <p className='discount-banner__subtitle'>Shop Now</p>
          </div>
        </div> */}

      <div className="discount-content">
        <div className="discount-item">
          <div className="discount-item__image">
            <img className='discount-item__image__img' src="/discount/discount-1.avif" alt="" />
          </div>
          <div className="discount-item__content">
            <p className='discount-item__title'>The Line Edit</p>
            <button className='discount-item__button'>Shop Linen</button>
          </div>
        </div>
        <div className="discount-item">
          <div className="discount-item__image">
            <img className='discount-item__image__img' src="/discount/discount-2.avif" alt="" />
          </div>
          <div className="discount-item__content">
            <p className='discount-item__title'>New Arrivals</p>
            <button className='discount-item__button'>Shop the latest</button>
          </div>
        </div>
        <div className="discount-item">
          <div className="discount-item__image">
            <img className='discount-item__image__img' src="/discount/discount-3.avif" alt="" />
          </div>
          <div className="discount-item__content">
            <p className='discount-item__title'>Best-Sellers</p>
            <button className='discount-item__button'>shop your favorites</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount