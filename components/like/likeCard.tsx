import { Card, Image } from "@nextui-org/react";

import {
  HeartEyesImoji,
  NotLikeImoji,
  ChatIconImoji,
} from "../icons/likedIcon";

const LikeCard = ({ data, onCardClick }) => {
  return (
    <div className={"relative mb-8"}>
      <Card
        isFooterBlurred
        isPressable
        className="border-none relative"
        radius="lg"
        style={{ width: "100%", height: "100%",backgroundColor: "transparent" }}
        onPress={() => onCardClick(data)}
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          loading="lazy"
          src={data.mainImage}
          style={{ width: "100%", height: "100%" }}
        />
      </Card>

      <div
        className="flex items-center background-drop--bluebase backdrop-blur-sm	 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large shadow-small z-10"
        style={{
          height: "50px",
          bottom: "-25px",
          borderRadius: "54px",
          justifyContent: "space-between",
          width: "calc(100% - 5%)",
          marginLeft:"2.5%"
        }}
      >
        <HeartEyesImoji />
        <ChatIconImoji />
        <NotLikeImoji />
      </div>
    </div>
  );
};

export default LikeCard;
