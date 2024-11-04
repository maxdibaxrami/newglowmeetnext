import {Image} from "@nextui-org/react";
import { useSwiper } from "swiper/react";

const UserModalImage = (props) => {
    
    const swiper = useSwiper();

    return <Image onClick={e => swiper.slideNext() } {...props} />
}

export default UserModalImage