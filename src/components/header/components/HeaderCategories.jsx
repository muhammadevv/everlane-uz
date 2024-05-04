import React, { useState } from 'react'

function HeaderCategories() {

  const list = [
    {
      id: 1,
      title: 'New Arrivals',
      subtitle: 'New Arrivals'
    },
    {
      id: 2,
      title: 'Best-sellers',
      subtitle: 'Best-sellers'
    },
    {
      id: 3,
      title: 'Clothing',
      subtitle: 'Clothing'
    },
    {
      id: 4,
      title: 'Top & Sweaters',
      subtitle: 'Top & Sweaters'
    },
    {
      id: 5,
      title: 'Pants & Jeans',
      subtitle: 'Pants & Jeans'
    },
    {
      id: 6,
      title: 'Outerwear',
      subtitle: 'Outerwear'
    },
    {
      id: 7,
      title: 'Shoes & Bags',
      subtitle: 'Shoes & Bags'
    },
    {
      id: 8,
      title: 'Sale',
      subtitle: 'Sale'
    },
  ]

  return (
    <div className='header-category'>
      <div className="header-category__items">
        {
          list.map(item => (
            <div className='header-category__item' key={item.id}>
              <a id='header-category' className='header-category__item__link' href="#">{item.title}</a>
              <div id='category-dropdown' className='header-category__dropdown category-dropdown'>
                <div className='category-dropdown__wrapper'>
                  <div className="category-dropdown__content">
                    <p>{item.subtitle}</p>
                    <p>{item.subtitle}</p>
                    <p>{item.subtitle}</p>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <div className='category-dropdown__bg'></div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default HeaderCategories