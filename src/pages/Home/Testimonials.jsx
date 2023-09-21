import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuestionCircle } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What our client say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
              />
              <div className="flex items-center justify-center mt-4 text-4xl">
                <FaQuestionCircle />
                <FaQuestionCircle />
              </div>
              <p className="py-4">{review?.details}</p>
              <h2 className="text-2xl text-amber-600 uppercase">
                {review?.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
