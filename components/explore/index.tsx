import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";
import { EffectCreative } from "swiper/modules";

import ExploreCard from "./exploreCart";

const ExplorePage = () => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        className="mySwiper2"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        effect={"creative"}
        grabCursor={true}
        modules={[EffectCreative]}
      >
        <SwiperSlide>
          <ExploreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExploreCard />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default ExplorePage;
