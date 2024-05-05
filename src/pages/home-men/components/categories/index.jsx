import React from 'react'

function Category() {
  return (
    <section className='categories'>
      <div className="categories-title">
        <h1 className='categories-title__title'>Shop by Categoty</h1>
      </div>
      <div className="categories-content">
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-1.avif" alt="" />
          </div>
          <p className='categories-item__text'>Tops & Tees</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-2.avif" alt="" />
          </div>
          <p className='categories-item__text'>Bottoms</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-3.avif" alt="" />
          </div>
          <p className='categories-item__text'>Outerwear</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-4.avif" alt="" />
          </div>
          <p className='categories-item__text'>Jeans</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-5.avif" alt="" />
          </div>
          <p className='categories-item__text'>sweaters</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/men/categories/categories-6.avif" alt="" />
          </div>
          <p className='categories-item__text'>shoes & accessories</p>
        </div>
      </div>
    </section>
  )
}

export default Category