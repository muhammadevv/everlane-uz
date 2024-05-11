import React from 'react'
import { Link } from 'react-router-dom';

function Aside({ collections, products }) {
  return (
    <div className='collections-aside'>
      <div className="aside-head"><p>{products.list.length} Products</p></div>
      <div className="aside-content">
        <div className='aside-content__category'>
          <h4 className='aside-category__title'>Category</h4>
          <ul className='aside-category__content'>
            {
              collections.list.map(item => (
                <li key={item.id} className='aside-category__link'>
                  <Link to={`/collections/${item.slug}-${item.id}`} key={item.id}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aside