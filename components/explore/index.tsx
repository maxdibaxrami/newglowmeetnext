import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nextui-org/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";
import { EffectCreative } from "swiper/modules";
import ExploreFilter from "./exploreFilter";
import ExploreCard from "./exploreCart";
import { MoreIcon, BlockAndReport, OptionInExplore,CloseIcon } from "../icons/exploreIcons";

import { motion } from "framer-motion"

const ExplorePage = () => {
  const [topMenuOpen,setTopMenuOpen] = useState(false)

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
