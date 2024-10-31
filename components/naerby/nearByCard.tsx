import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";

const NearByCard = ({ data, onCardClick, num }) => {
  return (
    <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
        onPress={() => onCardClick(data)}
        isPressable
        >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src={data.avatar}
          style={{height:"100%", width:"100%"}}  
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80 text-handller">{`${data.name} ${data.age}`}</p>
        </CardFooter>
    </Card>
  );
};

export default NearByCard;

