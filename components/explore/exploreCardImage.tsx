import {Image} from "@nextui-org/react";
import { useSwiper } from "swiper/react";

const ExploreCardImage = (props) => {
    
    const swiper = useSwiper();

    return <Image onClick={e => swiper.slideNext() } {...props} />
}

export default ExploreCardImage