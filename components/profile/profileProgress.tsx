import {CircularProgress, Card, CardFooter, Image, Button} from "@nextui-org/react";
import { ProfilePlue } from "../icons/profileIcon";

const ProfileProgress = () => {
  return (
    <Card
        isFooterBlurred
        radius="lg"
        className="border-none flex items-center justify-between ai"
    >
        <CircularProgress
        size="lg"
        value={44}
        color="primary"
        formatOptions={{ style: "percent" }}
        showValueLabel={true}
        label={
            <Button color="primary" startContent={<ProfilePlue/>}>
                complete
            </Button>
        }
        className="m-4"
        classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            track: "color-sss",
        }}
        strokeWidth={4}
        />
    </Card>
  );
}

export default ProfileProgress



