import "./Service2.scss";
import service2_icon from "../../assets/images/service2.png";

const Service2 = () => {
  return (
    <div className="service2">
      <div className="service2-top">
        <div className="service2-top-left">
          <h2>Contractor & Workers</h2>
          <p>
            We have a dedicated team of contractors and workers who ensure the
            highest quality of work in every project. Our professionals are
            skilled and experienced in handling various aspects of construction
            and design.
          </p>
        </div>
        <button>Register & Contractor</button>
      </div>

      <div className="service2-cards">
        <div className="service2-card">
          <img src={service2_icon} alt="" s/>
          <p>Civil Contractor</p>
        </div>
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>{" "}
        <div className="service2-card">
          <img src={service2_icon} alt="" />
          <p>Civil Contractor</p>
        </div>
      </div>
    </div>
  );
};

export default Service2;
