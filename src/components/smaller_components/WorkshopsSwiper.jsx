import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import Workshop from "./Workshop";


function WorkshopsSwiper({ workshops }) {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={false}
            grabCursor={true}
            className="swiper-wrapper-custom swiper-wrapper swiper-wrapper-custom"
            pagination={{
                clickable: true,
            }}

        >
            {
                workshops.map((workshop, i) =>
                    <SwiperSlide key={i}>
                        <Workshop
                            title={workshop.title}
                            description={workshop.description}
                            time={workshop.time}
                            date={workshop.date}
                            iconURL={workshop.iconURL}
                            i={i}
                        />
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
}

export default WorkshopsSwiper;
