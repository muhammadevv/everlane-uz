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
            <div className="product-content__row">
              <h3>Product name</h3>
              <p>price</p>
            </div>
            <form>
              <label htmlFor=""></label>
              <input className='radio' type="radio" />
            </form>
            <label class="cr-wrapper">
              <input name="radio" type="radio" />
              <div class="cr-input"><span></span></div>
            </label>
            <p>color</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage