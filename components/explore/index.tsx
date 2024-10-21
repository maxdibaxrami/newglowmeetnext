import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './style.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
import ExploreCard from './exploreCart';

const ExplorePage = () => {
  return <div style={{position:"relative"}}>
    
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard/>
        </SwiperSlide>
      </Swiper>

  </div>;
};

export default ExplorePage;
