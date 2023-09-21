import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide1.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div className="my-8">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-12 bg-slate-100"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-2xl text-red-700 -mt-20 ml-24">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-2xl text-red-700 -mt-20 ml-24">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-2xl text-red-700 -mt-20 ml-24">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-2xl text-red-700 -mt-20 ml-24">Desserts</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
