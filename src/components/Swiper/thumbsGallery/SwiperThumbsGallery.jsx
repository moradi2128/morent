import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import styled from "styled-components";

const SwiperThumbsGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper_one
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Thumbs]}
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
            </Swiper_one>
            <Swiper_two
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={24}
                slidesPerView={3}
                // freeMode={true}
                // watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>

            </Swiper_two>
        </>
    );
}
export default SwiperThumbsGallery


const Swiper_one = styled(Swiper)`
height:70%;
width: 100%;
margin: 32px 0;
& img {
border-radius: 10px;
width: 100%;
height: 100%;
object-fit: cover;
}
`
const Swiper_two = styled(Swiper)`
height: 15%;
box-sizing: border-box;
padding-top: 0px;
border-radius: 10px;
overflow: hidden;
&.swiper-slide {
     transform: all .3s ease;
width: 25%;
height: 100%;
opacity: 0.4;
}
& .swiper-slide-thumb-active {
transition: all .2s ease;
  opacity: 1;
  padding:5px;
  border:4px solid ${props => props.theme.primary};
  border-radius:15px;
}
& img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
`