import React from 'react'

function ProductPage() {
  return (
    <div className='product'>
      <div className="container">
        <div className="product-wrapper">
          <div className="product-images">
            <div className="product-images__img">
              <img src="/men/categories/categories-1.avif" alt="" />
            </div>
            <div className="product-images__img">
              <img src="/men/categories/categories-2.avif" alt="" />
            </div>
            <div className="product-images__img">
              <img src="/men/categories/categories-3.avif" alt="" />
            </div>
            <div className="product-images__img">
              <img src="/men/categories/categories-4.avif" alt="" />
            </div>
            <div className="product-images__img">
              <img src="/men/categories/categories-5.avif" alt="" />
            </div>
            <div className="product-images__img">
              <img src="/men/categories/categories-6.avif" alt="" />
            </div>
          </div>
          <div className="product-content">
            <div className="product-content__title">
              <h3 className='product-title'>The Seersucker Short</h3>
              <p className='product-title'>$78</p>
            </div>
            <div className="product-content__review">
              sfvsvsvdfv
            </div>
            <div className="product-content__col">
              <p className='product-subtitle'>Color <span>black</span></p>
              <div className="product-color__buttons">
                <button className='product-color__button black'></button>
                <button className='product-color__button grey'></button>
                <button className='product-color__button red'></button>
              </div>
            </div>
            <div className="product-content__col">
              <p className='product-subtitle'>Size</p>
              <div className='product-size__buttons'>
                <button className='product-size__button'>M</button>
                <button className='product-size__button'>S</button>
                <button className='product-size__button'>XL</button>
              </div>
            </div>
            <button className='product-add'>ADD to BAg</button>
            <div className="product-content__info">
              <div className="info__item">
                <img src="" alt="" />

                <div className="col">
                  <h4>dgs</h4>
                  <p>ljsjndv</p>
                </div>
              </div>
              <div className="info-item"></div>
              <div className="info-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage