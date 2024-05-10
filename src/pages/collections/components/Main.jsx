import React from 'react'

function Main() {

  return (
    <main className='collections-main'>
      <div className="main-head">
        {/* <p className='main-head__toptitle'>
          <a href="#">Home</a> /
          <a href="#">Men</a>
        </p> */}
        <h1 className='main-head__title'>
          Shop All Men's Clothing & Apparel
        </h1>
      </div>
      <div className="main-products">
        <div className="main-product">
          <div className="main-product__image">
            <img src="/men/discount/discount-1.avif" alt="" />
          </div>
          <div className="main-product__content">
            <div className="main-product__text">
              <div className="main-product__row">
                <h3 className='main-product__title'>The Seersucker Short-Sleeve Shirt</h3>
                <p className='main-product__price'>$78</p>
              </div>
              <p className='main-product__subtitle'>Black</p>
            </div>
            <div className="main-product__buttons">
              <button className='main-product__button black'></button>
              <button className='main-product__button orange'></button>
              <button className='main-product__button grey'></button>
              <button className='main-product__button brown'></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main