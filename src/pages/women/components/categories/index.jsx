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
            <img className='categories-item__image__img' src="/women/categories/categories-1.avif" alt="" />
          </div>
          <p className='categories-item__text'>dresses</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/women/categories/categories-2.avif" alt="" />
          </div>
          <p className='categories-item__text'>tops</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/women/categories/categories-3.avif" alt="" />
          </div>
          <p className='categories-item__text'>jeans</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/women/categories/categories-4.avif" alt="" />
          </div>
          <p className='categories-item__text'>pants</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/women/categories/categories-5.avif" alt="" />
          </div>
          <p className='categories-item__text'>tees</p>
        </div>
        <div className="categories-item">
          <div className='categories-item__image'>
            <img className='categories-item__image__img' src="/women/categories/categories-6.avif" alt="" />
          </div>
          <p className='categories-item__text'>shoes & accessories</p>
        </div>
      </div>
    </section>
  )
}

export default Category