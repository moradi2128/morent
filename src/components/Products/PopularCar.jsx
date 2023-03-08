import { productData } from 'dummy'
import React from 'react'
import CardCarItem from './CardCarItem'
import CardSkeleton from '../skeleton/CardSkeleton'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const PopularCar = (props) => {

    return (
        <>
            <Swiper
                // navigation={true}
                // modules={[Navigation]}
                slidesPerView={1.1}
                spaceBetween={15}
                breakpoints={{
                    640: {
                        spaceBetween: 15,
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
            >
                {productData.length == 0
                    ?
                    [1, 2, 3, 4].map(item => {
                        return <SwiperSlide key={item}><CardSkeleton /></SwiperSlide>
                    })
                    : productData.slice(0, 4).map(car => {
                        return <SwiperSlide key={car.id}>
                            <CardCarItem href={{ patchname: `/category/${car.slug}/${car.title}`, query: { slug: car.id } }} car={car} key={car.id} />
                        </SwiperSlide>
                    }
                    )}

            </Swiper>
        </>
    )
}

export default PopularCar
