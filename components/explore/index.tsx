import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import { HeartEyesImoji, NotLikeImoji } from "../icons/exploreIcons";

import ExploreCard from "./exploreCart";
import {motion} from 'framer-motion'

const ExplorePage = () => {


const getAnimationProps =() =>{
  return {
    whileTap: {
      scale: 0.85,
    }
  };
}

const getAnimationProps2 =() =>{
  return {
    whileTap: {
      rotate: -18, // Rotate to 348 degrees
    },
  };
}

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        className="mySwiper2"
        allowSlidePrev={false}
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
            className="backdrop-blur-md flex justify-center footerswipcard before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
            animate={{ bottom: "150px" }} 
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
