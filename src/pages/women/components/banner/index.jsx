import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBannerList } from '../../../../store/actions/homeActions'

function Banner() {
  const { banner } = useSelector(state => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerList())
  }, [])
  return (
    <section className='banner'>
      {
        banner.list.filter(item => item.id !== 1).map(item => (
          <div key={item.id}>
            <div className="banner-bg" >
              <video autoPlay playsInline loop muted={true} className='banner-bg__image' src={item.image} alt="" />
            </div>
            <div className="banner-content">
              <h1 className='banner-title'>{item.title}</h1>
              <p className='banner-subtitle'>{item.subtitle}</p>
              <button className='banner-button'>Shop now</button>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Banner