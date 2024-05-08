import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getSetsList } from "../../../../store/actions/homeActions";
function Sets() {
  const width = window.screen.width;
  const { sets } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetsList());
  }, []);
  return (
    <section className="sets">
      <div className="sets-title">
        <h1 className="sets-title__title">Linen sets for your next getaway.</h1>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-pagination-size": "6px",
          "--swiper-navigation-size": "20px",
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
        {
          sets.list.map((item, i) => (
            <SwiperSlide className="sets-item" key={i}>
              <div className="sets-item__image">
                <img
                  className="sets-item__image__img"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="sets-item__content">
                <div className="sets-item__row">
                  <h3 className="sets-item__title">{item.title}</h3>
                  <p className="sets-item__price">${item.price}</p>
                </div>
                <p className="sets-item__subtitle">{item.color}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Sets;
