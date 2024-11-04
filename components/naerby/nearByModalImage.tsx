import {Image} from "@nextui-org/react";
import { useSwiper } from "swiper/react";

const NearByModalImage = (props) => {
    
    const swiper = useSwiper();

    return <Image onClick={e => swiper.slideNext() } {...props} />
}

export default NearByModalImage