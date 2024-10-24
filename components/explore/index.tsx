import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";

import { HeartEyesImoji, NotLikeImoji } from "../icons/exploreIcons";

import ExploreCard from "./exploreCart";

const ExplorePage = () => {
  const getAnimationProps = () => {
    return {
      whileTap: {
        scale: 0.85,
      },
    };
  };

  const getAnimationProps2 = () => {
    return {
      whileTap: {
        rotate: -18, // Rotate to 348 degrees
      },
    };
  };

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        allowSlidePrev={false}
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

        <motion.div
          animate={{ bottom: "150px" }}
          className="backdrop-blur-md flex justify-center footerswipcard before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
        >
          <motion.div className="card" {...getAnimationProps2()}>
            <NotLikeImoji />
          </motion.div>

          <motion.div className="card" {...getAnimationProps()}>
            <HeartEyesImoji />
          </motion.div>
        </motion.div>
      </Swiper>
    </div>
  );
};

export default ExplorePage;
