import { Card, CardFooter, Image } from "@nextui-org/react";

const LikeCard = ({ data }) => {
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        src={data.mainImage}
      />
      <CardFooter className="flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-start w-full text-tiny text-white/80">{`${data.name} ${data.age}`}</p>
        <p className="text-start w-full text-tiny text-white/80">
          {data.location}
        </p>
      </CardFooter>
    </Card>
  );
};

export default LikeCard;
