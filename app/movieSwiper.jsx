"use client";
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/bundle";
import 'swiper/css/navigation';

import Movie from './movie'



export default function movieSwiper({ similarRes }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={2}
      navigation={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {similarRes.results.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}