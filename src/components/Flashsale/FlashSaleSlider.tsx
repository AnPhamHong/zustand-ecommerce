// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import imgFL1 from "../../assets/flashsale_1.png";
import imgFL2 from "../../assets/flashsale_2.png";
import imgFL3 from "../../assets/flashsale_3.png";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgFL1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFL2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFL3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFL1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFL2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFL3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
