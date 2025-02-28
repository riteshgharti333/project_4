import { projects } from "../../assets/data";
import "./Projects.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-top">
        <h1>Showcasing Our Pan-India Home Design Projects</h1>
        <p>
          Take a look at our home design projects across India. Our diverse
          portfolio showcases our ability to create unique and personalized
          house plans and designs for clients nationwide.
        </p>
      </div>

      <div className="projects-cards">
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="projects-card">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.desc} </p>
                <p>{item.smDesc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
