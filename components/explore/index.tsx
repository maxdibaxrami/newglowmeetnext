import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
import { useState } from "react";

import { HeartEyesImoji, NotLikeImoji } from "../icons/exploreIcons";

import MatchModal from "./matchModal";
import ExploreCard from "./exploreCart";

const ExplorePage = () => {

  const swiper = useSwiper();

  const [activeSlider, setActiveSlider] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <div className="relative">
      <Swiper
        allowSlidePrev={false}
        className="mySwiper2 mt-4"
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
        lazy={true}
        modules={[EffectCreative]}
        noSwiping={false}
        onActiveIndexChange={(e) => setActiveSlider(e.activeIndex)}
      >
        {mockProfiles.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <ExploreCard profileData={value} />
            </SwiperSlide>
          );
        })}

          <motion.div
            className="card background-drop--bluebase p-1 footerswipcard border-1 fixed"
            animate={{ bottom: "70px", zIndex:50, right:"52%",scale:1 }}
            style={{right:"52%",scale:0.7}}
            transition={{ type: "tween" }}
            {...getAnimationProps2()}
          >
            <NotLikeImoji dataId={activeSlider} />
          </motion.div>


          <motion.div
            className="card background-drop--bluebase p-1 footerswipcard border-1 fixed"
            transition={{ type: "tween" }}
            style={{left:"55%",scale:0.7}}
            animate={{ bottom: "70px", zIndex:50 ,left:"52%",scale:1 }}

            {...getAnimationProps()}
          >
            <HeartEyesImoji
              closeModal={closeModal}
              dataId={activeSlider}
              openModal={openModal}
            />
          </motion.div>

      </Swiper>

      <MatchModal
        isOpen={isModalOpen}
        modalData={mockProfiles[activeSlider]}
        onClose={closeModal}
      />
    </div>
  );
};

export default ExplorePage;

const mockProfiles = [
  {
    id: 1,
    name: "Mahdi Bahrami",
    age: 24,
    location: "Moscow, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    workAndEducation: "Sechinov University, Programmer",
    whyHere: "Just chat",
    aboutMe: "Aspiring programmer and coffee enthusiast.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "183 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Coding", "Photography", "Hiking", "Gaming"],
    mainImage: "https://i.pravatar.cc/300?u=1",
    secondImage: "https://i.pravatar.cc/300?u=2",
    thirdImage: "https://i.pravatar.cc/300?u=3",
  },
  {
    id: 2,
    name: "Olga Ivanova",
    age: 22,
    location: "St. Petersburg, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258115e29026702d",
    workAndEducation: "SPbU, Graphic Designer",
    whyHere: "To meet new friends",
    aboutMe: "Passionate about design and travel.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "170 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Bi",
    interests: ["Design", "Travel", "Art"],
    mainImage: "https://i.pravatar.cc/300?u=4",
    secondImage: "https://i.pravatar.cc/300?u=5",
    thirdImage: "https://i.pravatar.cc/300?u=6",
  },
  {
    id: 3,
    name: "Alexey Petrov",
    age: 27,
    location: "Novosibirsk, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258116e29026702d",
    workAndEducation: "Novosibirsk State University, Software Engineer",
    whyHere: "Looking for cool people",
    aboutMe: "Tech enthusiast and music lover.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "178 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Music", "Technology", "Sports"],
    mainImage: "https://i.pravatar.cc/300?u=7",
    secondImage: "https://i.pravatar.cc/300?u=8",
    thirdImage: "https://i.pravatar.cc/300?u=9",
  },
  {
    id: 4,
    name: "Diana Smirnova",
    age: 23,
    location: "Moscow, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258117e29026702d",
    workAndEducation: "MSU, Marketing Student",
    whyHere: "Just looking to chat",
    aboutMe: "Love marketing and fun conversations.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "165 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Marketing", "Cooking", "Yoga"],
    mainImage: "https://i.pravatar.cc/300?u=10",
    secondImage: "https://i.pravatar.cc/300?u=11",
    thirdImage: "https://i.pravatar.cc/300?u=12",
  },
  {
    id: 5,
    name: "Igor Ivanov",
    age: 25,
    location: "Kazan, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258118e29026702d",
    workAndEducation: "Kazan Federal University, Data Analyst",
    whyHere: "For fun chats",
    aboutMe: "Data lover and soccer fan.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "180 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Data Science", "Soccer", "Traveling"],
    mainImage: "https://i.pravatar.cc/300?u=13",
    secondImage: "https://i.pravatar.cc/300?u=14",
    thirdImage: "https://i.pravatar.cc/300?u=15",
  },
  {
    id: 6,
    name: "Yulia Petrova",
    age: 21,
    location: "Yekaterinburg, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258119e29026702d",
    workAndEducation: "UrFU, Biologist",
    whyHere: "Looking for new friends",
    aboutMe: "Nature enthusiast and curious mind.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "160 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Biology", "Hiking", "Gardening"],
    mainImage: "https://i.pravatar.cc/300?u=16",
    secondImage: "https://i.pravatar.cc/300?u=17",
    thirdImage: "https://i.pravatar.cc/300?u=18",
  },
  {
    id: 7,
    name: "Sergey Sokolov",
    age: 26,
    location: "Nizhny Novgorod, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258120e29026702d",
    workAndEducation: "NNGU, Network Engineer",
    whyHere: "To connect with others",
    aboutMe: "Techie and gaming aficionado.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "175 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Networking", "Gaming", "Traveling"],
    mainImage: "https://i.pravatar.cc/300?u=19",
    secondImage: "https://i.pravatar.cc/300?u=20",
    thirdImage: "https://i.pravatar.cc/300?u=21",
  },
  {
    id: 8,
    name: "Elena Fedorova",
    age: 24,
    location: "Chelyabinsk, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258121e29026702d",
    workAndEducation: "ChSPU, Teacher",
    whyHere: "Just for conversations",
    aboutMe: "Love books and teaching.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "172 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Education", "Reading", "Cooking"],
    mainImage: "https://i.pravatar.cc/300?u=22",
    secondImage: "https://i.pravatar.cc/300?u=23",
    thirdImage: "https://i.pravatar.cc/300?u=24",
  },
  {
    id: 9,
    name: "Viktor Volkov",
    age: 28,
    location: "Samara, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258122e29026702d",
    workAndEducation: "SSU, Civil Engineer",
    whyHere: "Looking for interesting people",
    aboutMe: "Engineering geek and sports lover.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "185 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Engineering", "Sports", "Photography"],
    mainImage: "https://i.pravatar.cc/300?u=25",
    secondImage: "https://i.pravatar.cc/300?u=26",
    thirdImage: "https://i.pravatar.cc/300?u=27",
  },
  {
    id: 10,
    name: "Anna Vasilyeva",
    age: 25,
    location: "Voronezh, Russia",
    avatar: "https://i.pravatar.cc/150?u=a04258123e29026702d",
    workAndEducation: "Voronezh State University, Journalist",
    whyHere: "To meet new people",
    aboutMe: "Love writing and exploring.",
    lookingFor: "Friendship",
    relationStatus: "Single",
    height: "168 cm",
    kids: "None",
    language: "Russian, English",
    sexuality: "Straight",
    interests: ["Journalism", "Travel", "Writing"],
    mainImage: "https://i.pravatar.cc/300?u=28",
    secondImage: "https://i.pravatar.cc/300?u=29",
    thirdImage: "https://i.pravatar.cc/300?u=30",
  },
];
