import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";

const NearByCard = ({ data, onCardClick }) => {
  return (
    <Card
      key={data.id}
      isPressable
      shadow="sm"
      onPress={() => onCardClick(data)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={data.avatar}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={data.avatar}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small backdrop-blur-2xl	 justify-between flex flex-col	items-start	justify-start	">
        <b
          className="text-handller text-start	"
          style={{ whiteSpace: "nowrap" }}
        >{`${data.name} ${data.age}`}</b>
        <p
          className="text-default-500 text-handller text-start	"
          style={{ whiteSpace: "nowrap" }}
        >
          {data.location}
        </p>
      </CardFooter>
    </Card>
  );
};

export default NearByCard;
