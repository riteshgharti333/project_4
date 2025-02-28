import { useState } from "react";
import "./Review.scss";
import { FaStar, FaUser } from "react-icons/fa";
import { reviews } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle specific review expansion
    }));
  };

  return (
    <div className="review">
      <div className="review-top">
        <h1>Hear From Our Satisfied Homeowners</h1>
        <p>
          Read testimonials from our satisfied homeowners. Our clients'
          experiences highlight our dedication to delivering exceptional house
          plans and designs.
        </p>
      </div>

      <div className="review-cards">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
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
            1200: { slidesPerView: 5 },

          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="review-card-top">
                  <FaUser className="userIcon" />
                  <div className="review-card-top-desc">
                    <p>{item.name}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <div className={`review-desc ${expandedReviews[index] ? "expanded" : ""}`}>
                  <p>{item.desc}</p>

                  <button className="read-more-btn" onClick={() => toggleReview(index)}>
                    {expandedReviews[index] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
