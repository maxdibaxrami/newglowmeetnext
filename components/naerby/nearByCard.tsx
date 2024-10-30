import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";

const NearByCard = ({ data, onCardClick, num }) => {
  return (
    <Card
      key={data.id}
      isPressable
      style={num % 2 ===0?{transform:"translate(0px, -4rem)"}:{}}
      shadow="sm"
      className="m-1"
      onPress={() => onCardClick(data)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={data.avatar}
          className="object-cover "
          radius="lg"
          style={{height:"100%", width:"100%"}}          
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
