import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
function Sets() {

  return (
    <section className='sets'>

      <div className="sets-title">
        <h1 className='sets-title__title'>Dress for the Summer You Want</h1>
      </div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
          '--swiper-pagination-size': '6px',
          '--swiper-navigation-size': '30px',

        }}
        slidesPerView={4.2}
        slidesPerGroup={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="sets-content"
      >

        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-1.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The linen daytripper shirtdress</h3>
              <p className='sets-item__price'>$118</p>
            </div>
            <p className='sets-item__subtitle'>white/black</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-2.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The gauze smock dress</h3>
              <p className='sets-item__price'>$128</p>
            </div>
            <p className='sets-item__subtitle'>navy</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-3.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The TENCEL™ midi slip dress</h3>
              <p className='sets-item__price'>$118</p>
            </div>
            <p className='sets-item__subtitle'>balck/cornstalk abstract</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-4.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The TENCEL™ gathered maxi dress</h3>
              <p className='sets-item__price'>$168</p>
            </div>
            <p className='sets-item__subtitle'>red currant</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-5.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen workwear midi dress</h3>
              <p className='sets-item__price'>$148</p>
            </div>
            <p className='sets-item__subtitle'>bone</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-6.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The supima® jersey riviera dress</h3>
              <p className='sets-item__price'>$98</p>
            </div>
            <p className='sets-item__subtitle'>black</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-7.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen shirt dress</h3>
              <p className='sets-item__price'>$98</p>
            </div>
            <p className='sets-item__subtitle'>grass green</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/women/sets/sets-8.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The ribbed tank dress</h3>
              <p className='sets-item__price'>$98</p>
            </div>
            <p className='sets-item__subtitle'>colar</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Sets