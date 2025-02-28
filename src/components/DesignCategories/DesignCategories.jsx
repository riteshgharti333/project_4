import "./DesignCategories.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { interCards } from "../../assets/data";

const DesignCategories = () => {
  return (
    <div className="designCategories">
      <h1>Interior Design Categories: From Concept to Completion</h1>
      <p className="designCategories-p">
        Explore our comprehensive interior design categories, covering every
        aspect of your home from concept to completion. Our designers work
        meticulously to bring your vision to life.
      </p>

      <div className="designCategories-cards">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={4}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {interCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="designCategories-card">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DesignCategories;
