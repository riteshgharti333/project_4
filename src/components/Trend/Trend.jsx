import "./Trend.scss";
import { useState, useEffect, useRef } from "react";
import { trends } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";

const Trend = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const swiperRef = useRef(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      setShowNavigation(
        swiperInstance.slides.length > swiperInstance.params.slidesPerView
      );
    }
  }, [selectedOption]);

  return (
    <div className="trend">
      <div className="trend-top">
        <h1>Latest Trends in House Plans and Home Designs</h1>
        <p>
          Stay updated with the latest trends in house plans and home designs.
          Our expert insights and innovative ideas will inspire you to create a
          home that reflects your style and meets your needs.
        </p>
      </div>

      <div className="trend-container">
        {/* Tabs */}
        <div className="trend-container-top">
          {trends.map((item, index) => (
            <span
              key={index}
              className={`${selectedOption === index ? "active" : ""}`}
              onClick={() => handleOptionClick(index)}
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="trend-container-section">
          <div className="trend-container-cards">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={4}
              navigation={showNavigation}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => {
                setShowNavigation(
                  swiper.slides.length > swiper.params.slidesPerView
                );
              }}
            >
              {trends[selectedOption].trendsCard.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="trend-container-card">
                    <img src={item.img} alt="Trend" />
                    <div className="trend-container-card-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        
          <div className="trend-section-button">
          <button>See All</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
