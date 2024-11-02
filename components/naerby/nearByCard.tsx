import { Card, CardFooter, Image, Badge } from "@nextui-org/react";
import { VerifyIcon } from "../icons/profileIcon";
import { CircleSvg } from "../icons/NearByMeIcons";
const NearByCard = ({ data, onCardClick, num }) => {
  return (
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
          <CardFooter className=" background-drop--bluebase border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className=" w-full">
                <div className="flex justify-between items-center">
                  <p style={{textAlign:"start"}} className="flex items-center text-tiny text-white text-handller">
                    {`${data.name.split(" ")[0]} ${data.age}`}
                   {num % 2 ===0 && <CircleSvg/>} 

                  </p>
                  <VerifyIcon stroke="#FFF"/>
                </div>
              </div>
          </CardFooter>
       

      </Card>
 
  );
};

export default NearByCard;
