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
import Image from "next/image";

const SwiperThumbsGallery = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { images } = props
    return (
        <>
            <Swiper_one
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                // loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Thumbs]}
            >
                {images.map((img, index) => {
                    return <SwiperSlide key={index}>
                        <Image {...img} />
                    </SwiperSlide>
                })}

            </Swiper_one>
            <Swiper_two
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={24}
                slidesPerView={3}
                // freeMode={true}
                // watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
            >
                {images.map((img, index) => {
                    return <SwiperSlide key={index}>
                        <Image {...img} />
                    </SwiperSlide>
                })}
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
object-fit: scale-down;
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
  object-fit: scale-down;
  border-radius: 10px;
}
`