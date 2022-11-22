import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Styled from "./style";
import Image01 from "../../assets/carousel011.jpeg";
import Image02 from "../../assets/carousel02.jpeg";
import Image03 from "../../assets/carousel03.jpeg";
import LogoSm from "../../assets/logo-sm.png";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Component = () => {
  return (
    <Styled>
      <div className="Carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={LogoSm} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image01} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image02} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image03} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Styled>
  );
};

export default Component;
