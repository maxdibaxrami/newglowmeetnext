import { Card, CardFooter, Image } from "@nextui-org/react";
import {HeartEyesImoji, NotLikeImoji} from '../icons/likedIcon'

const LikeCard = ({ data, onCardClick }) => {
  return (
    <Card onPress={() => onCardClick(data)} isPressable isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={data.mainImage}
      />
        <div style={{zIndex:10}} className="absolute bottom-1 left-1">
          <HeartEyesImoji/>
        </div>

        <div style={{zIndex:10}} className="absolute bottom-1 right-1">
          <NotLikeImoji/>
        </div>
  
    </Card>
  );
};

export default LikeCard;
