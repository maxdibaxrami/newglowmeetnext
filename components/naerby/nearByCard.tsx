import { Card, CardFooter, Image, Badge } from "@nextui-org/react";

const NearByCard = ({ data, onCardClick, num }) => {
  return (
    <Badge
      disableOutline
      className="background-drop--bluebase text-white"
      color="primary"
      content="New"
      isInvisible={num % 2 === 0 ? true : false}
      size="sm"
      style={{ top: "14%", right: "20%" }}
      variant="shadow"
    >
      <Card
        isFooterBlurred
        isPressable
        className="border-none"
        radius="lg"
        onPress={() => onCardClick(data)}
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          loading="lazy"
          src={data.avatar}
          style={{ height: "100%", width: "100%" }}
        />

        <CardFooter className="justify-between background-drop--bluebase border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white text-handller">{`${data.name} ${data.age}`}</p>
        </CardFooter>
      </Card>
    </Badge>
  );
};

export default NearByCard;
