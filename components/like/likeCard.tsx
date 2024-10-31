import { Card, CardFooter, Image } from "@nextui-org/react";
import {HeartEyesImoji, NotLikeImoji, ChatIconImoji} from '../icons/likedIcon'

const LikeCard = ({ data, onCardClick }) => {
  return (
    <Card onPress={() => onCardClick(data)} isPressable isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={data.mainImage}
      />

        <CardFooter style={{height:"55px"}} className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <HeartEyesImoji/>
          <ChatIconImoji/>
          <NotLikeImoji/>
        </CardFooter>
    </Card>
  );
};

export default LikeCard;
