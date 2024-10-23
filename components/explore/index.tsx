import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import { HeartEyesImoji, NotLikeImoji } from "../icons/exploreIcons";

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

      <div className="backdrop-blur-md flex justify-center footerswipcard before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <NotLikeImoji />
        <HeartEyesImoji />
      </div>
    </div>
  );
};

export default ExplorePage;
