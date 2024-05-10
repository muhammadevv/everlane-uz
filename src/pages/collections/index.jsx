import React, { useEffect } from 'react'
import Main from './components/Main'
import Aside from './components/Aside'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections, getProducts } from '../../store/actions/productsActions';

function Collections() {
  const { products, collections } = useSelector(state => state.products)
  const params = useParams()
  const menId = +params.id.split('-').at(-1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts(menId))
    dispatch(getCollections())
  }, [])


  return (
    <div className='collections'>
      <div className="container">
        <div className="collections-wrapper">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  )
}

export default Collections