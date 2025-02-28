import "./Design.scss";
import { useState, useRef } from "react";
import { trends } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const Design = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const swiperRef = useRef(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="design">
      <div className="design-top">
        <h1>Commercial Design</h1>
        <p>
          Discover our range of commercial design services, tailored to meet the
          unique needs of businesses and commercial spaces. Our expertise
          ensures functional and aesthetically pleasing designs
        </p>
      </div>

      <div className="design-container">
        {/* Tabs */}
        <div className="design-container-top">
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
        <div className="design-container-section">
          <div className="design-container-cards">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {trends[selectedOption].trendsCard.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="design-container-card">
                    <img src={item.img} alt="Trend" />
                    <div className="design-container-card-desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="design-section-button">
            <button>See All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
