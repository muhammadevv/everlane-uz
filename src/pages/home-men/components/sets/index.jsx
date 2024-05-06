import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
function Sets() {

  const width = window.screen.width

  return (
    <section className='sets'>

      <div className="sets-title">
        <h1 className='sets-title__title'>Linen sets for your next getaway.</h1>
      </div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
          '--swiper-pagination-size': '6px',
          '--swiper-navigation-size': '20px',

        }}
        slidesPerView={width >= 375 ? 4 : 1}
        slidesPerGroup={width <= 375 ? 1 : 2}
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
            <img className='sets-item__image__img' src="/men/sets/sets-1.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The relaxed linen short-sleeve shirt</h3>
              <p className='sets-item__price'>$78</p>
            </div>
            <p className='sets-item__subtitle'>Navy/Bone</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-2.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen East Short</h3>
              <p className='sets-item__price'>$50</p>
            </div>
            <p className='sets-item__subtitle'>navy/bone</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-3.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen East Short</h3>
              <p className='sets-item__price'>$88</p>
            </div>
            <p className='sets-item__subtitle'>bone/Cornstalk</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-4.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The 7" Linen Trouser Short</h3>
              <p className='sets-item__price'>$75</p>
            </div>
            <p className='sets-item__subtitle'>Cornstalk Chambray</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-5.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen short-sleeve Standard fit shirt </h3>
              <p className='sets-item__price'>$78</p>
            </div>
            <p className='sets-item__subtitle'>Cornstalk chambray</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-6.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen easy pant</h3>
              <p className='sets-item__price'>$98</p>
            </div>
            <p className='sets-item__subtitle'>Kalamata</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-7.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen ShortSleeav popover shirt</h3>
              <p className='sets-item__price'>$78</p>
            </div>
            <p className='sets-item__subtitle'>Black</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='sets-item'>
          <div className="sets-item__image">
            <img className='sets-item__image__img' src="/men/sets/sets-8.avif" alt="" />
          </div>
          <div className="sets-item__content">
            <div className="sets-item__row">
              <h3 className='sets-item__title'>The Linen Trouser</h3>
              <p className='sets-item__price'>$118</p>
            </div>
            <p className='sets-item__subtitle'>Black</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Sets