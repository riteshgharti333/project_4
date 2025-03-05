import "./ServicePage.scss";

import team_img from "../../assets/images/team.jpg";
import { service3, service4, services, services2 } from "../../assets/data";
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";

const ServicePage = () => {
  return (
    <div className="servicePage">
      <div className="servicePage-banner">
        <img src={team_img} alt="" />
        <h1>Services</h1>
      </div>

      <div className="service-content1">
        <div className="service-content-card1">
          <div className="card1-desc">
            <p>
              At <span>Kilaniya Building Construction & Design</span>, we
              deliver end-to-end solutions that bridge vision and reality. With
              decades of expertise and a commitment to innovation, our services
              are designed to meet the evolving needs of residential,
              commercial, and engineering projects. Here’s how we bring
              excellence to every stage:
            </p>
          </div>
          <img src={team_img} alt="" />
        </div>
      </div>

      <div className="services">
        <div className="service1-content">
          <div className="service1-content-top">
            <h1>Comprehensive Planning</h1>
            <p>
              Every successful project begins with meticulous planning. Our team
              ensures seamless execution from the first blueprint to the final
              handover.
            </p>
          </div>

          <div className="service1-content-cards">
            {services.map((item, index) => (
              <div className="service1-content-card" key={index}>
                <div className="service1-content-card-icon">
                  <item.icon className="service-icon" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service2-content">
          <div className="service2-content-top">
            <h1>REC Designing & Construction</h1>
            <p>
              Specializing in
              <span>Residential, Engineering, and Commercial (REC) </span>
              projects, we merge creativity with technical precision to deliver
              spaces that inspire.
            </p>
          </div>

          <div className="service2-content-cards">
            {services2.map((item, index) => (
              <div className="service2-content-card" key={index}>
                <h2>{item.title}</h2>
                <ul>
                  {item.desc.map((item, index) => (
                    <li key={index}>
                      {" "}
                      <GoDotFill className="dot-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="service3-content">
          <div className="service3-content-top">
            <h1>Project Management</h1>
            <p>
              We oversee every detail to ensure timelines, budgets, and quality
              standards are met.{" "}
            </p>
          </div>
          <div className="service3-content-cards">
            {service3.map((item, index) => (
              <div className="service3-content-card" key={index}>
                <h3>
                  <item.icon className="service3-icon" /> {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="service4-content">
          <div className="service4-content-top">
            <h1>Why Choose Our Services?</h1>
          </div>
          <div className="service4-content-cards">
            {service4.map((item, index) => (
              <div className="service4-content-card" key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="service5-content">
          <div className="service5-content-top">
          <h1>Let’s Build Tomorrow, Together</h1>
          <p>Whether you’re envisioning a dream home, a commercial landmark, or critical infrastructure, Kilaniya combines expertise, passion, and integrity to turn aspirations into enduring realities.  
          </p>
          </div>

          <h3>

          Building Trust Since Generations.  
          </h3>

          <p>Contact us today to discuss your project!</p>

          <button>
           <IoCall /> +91 12345678
          </button>
     

        </div>
      </div>
    </div>
  );
};

export default ServicePage;
