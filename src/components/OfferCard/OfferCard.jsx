import { offerCards } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./OfferCard.scss";

const OfferCard = () => {
  return (
    <div className="offerCard">
      <Swiper
        modules={[Navigation, FreeMode]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        speed={800}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: {slidesPerView: 2},
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offerCards.map((item) => (
          <SwiperSlide key={item.img}>
            <div className="offerCard-item">
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCard;
