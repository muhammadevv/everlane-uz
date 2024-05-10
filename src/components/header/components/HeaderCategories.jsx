import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getMenCollectionsList } from '../../../store/actions/homeActions'

function HeaderCategories() {
  const { menCollections } = useSelector(state => state.home)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenCollectionsList())
  }, [])


  return (
    <div className='header-category'>
      <div className="header-category__items">
        {
          menCollections.list.map(item => (
            <div className='header-category__item' key={item.id}>
              <Link to={`/collections/${item.slug}-${item.id}`} className='header-category__item__link'>{item.title}</Link>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default HeaderCategories