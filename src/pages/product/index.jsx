import React from 'react'
import { BoxIcon, CarIcon, GiftIcon } from '../../assets/icons'
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
            <div className="product-content__head">
              <div className="product-content__row">
                <h3 className='product-head__title'>The Seersucker Short</h3>
                <p className='product-head__title'>$78</p>
              </div>
              <p><span>⭐⭐⭐⭐⭐</span> No review yet</p>
            </div>
            <div className="product-content__content">
              <div className="product-content__col">
                <p className='product-content__title'>Color <span>black</span></p>
                <div className="product-content__color">
                  <button className='product-content__color_button black'></button>
                  <button className='product-content__color_button grey'></button>
                  <button className='product-content__color_button red'></button>
                </div>
              </div>
              <div className="product-content__col">
                <p className='product-content__title'>Size</p>
                <div className='product-content__size'>
                  <button className='product-content__size_button'>M</button>
                  <button className='product-content__size_button'>S</button>
                  <button className='product-content__size_button'>XL</button>
                </div>
              </div>
              <div className='product-content__button'>
                <button className='product-content__button_add'>ADD to BAg</button>
              </div>
            </div>
            <div className="product-content__info">
              <div className="product-info__item">
                <CarIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Shipping Discount</h4>
                  <p className='product-info__subtitle'>Reduced rate express shipping on orders over undefined.</p>
                </div>
              </div>
              <div className="product-info__item">
                <BoxIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Easy Returns</h4>
                  <p className='product-info__subtitle'>null Duties & taxes are non-refundable.</p>
                </div>
              </div>
              <div className="product-info__item">
                <GiftIcon />
                <div className="product-info__text">
                  <h4 className='product-info__title'>Send It As A Gift</h4>
                  <p className='product-info__subtitle'>Add a free personalized note during checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage