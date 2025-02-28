import "./Leading.scss";

import team_img from "../../assets/images/team.jpg";
import home_icon from "../../assets/images/home.webp";

const Leading = () => {
  return (
    <div className="leading">
      <div className="leading-banner">
        <img src={team_img} alt="" />
      </div>
      <div className="leading-desc">
        <div className="leading-desc-cards">
          <div className="leading-desc-card">
            <img src={home_icon} alt="" />
            <h1>35000+</h1>
            <p>Projects Completed</p>
          </div>
          <div className="leading-desc-card">
            <img src={home_icon} alt="" />
            <h1>35000+</h1>
            <p>Projects Completed</p>
          </div>

          <div className="leading-desc-card">
            <img src={home_icon} alt="" />
            <h1>35000+</h1>
            <p>Projects Completed</p>
          </div>

          <div className="leading-desc-card">
            <img src={home_icon} alt="" />
            <h1>35000+</h1>
            <p>Projects Completed</p>
          </div>
        </div>
        <div className="leading-desc-right">
          <h1>
            Leading The Online Architectural & Home Design Revolution Since
            2015.
          </h1>
          <p>
            Leading The Online Architectural & Home Design Revolution Since
            2015.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leading;
