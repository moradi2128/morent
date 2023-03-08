// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styled from 'styled-components'
import { Navigation } from "swiper";

import { adsData } from "../../dummy"
import AdsItem from './AdsItem'

const Ads = () => {
  return (
    <Wrapper>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {
          adsData.map((ads, index) => {
            return <SwiperSlide key={index}>
              <AdsItem ads={ads} key={ads.id} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </Wrapper>
  )
}

export default Ads

const Wrapper = styled.div`
padding:32px 0;
overflow:hidden;
`