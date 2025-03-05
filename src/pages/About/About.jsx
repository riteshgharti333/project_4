import "./About.scss";

import team_img from "../../assets/images/team.jpg";

import svg1_icon from "../../assets/svgIcon/svg1.png";
import svg2_icon from "../../assets/svgIcon/svg2.svg";
import svg3_icon from "../../assets/svgIcon/svg3.svg";
import svg4_icon from "../../assets/svgIcon/svg4.svg";
import svg5_icon from "../../assets/svgIcon/svg5.svg";


const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src={team_img} alt="" />
        <h1>About Us</h1>
      </div>

      <div className="about-content1">
        <div className="about-content-card1">
          <img src={team_img} alt="" />
          <div className="card1-desc">
            <h1>About Kilaniya Building Construction & Design</h1>
            <p>
              At <span>Kilaniya Building Construction & Design</span>, we are
              more than builders—we are custodians of a legacy. For generations,
              our family-driven enterprise has stood as a pillar of trust,
              integrity, and excellence in the construction industry. Rooted in
              time-honored values yet embracing modern innovation, we craft
              spaces that harmonize functionality, aesthetics, and durability.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content-card2">
          <div className="card2-desc">
            <h1>Our Story</h1>
            <p>
              Since our inception, we have been guided by a simple mission: to
              transform visions into reality. With decades of expertise passed
              down through generations, we’ve honed the art of blending
              traditional craftsmanship with cutting-edge technology. Our
              journey is defined by unwavering commitment—to our clients, our
              community, and the timeless structures we create.{" "}
            </p>
          </div>
          <img src={team_img} alt="" />
        </div>
      </div>

      <div className="about-content3">
        <div className="about-content-card3">
          <div className="card3-desc">
            <h1>What We Offer</h1>
            <div className="card3-desc-item">
              <h3>Comprehensive Planning</h3>
              <p>
                From conceptualization to regulatory approvals, we lay the
                groundwork for success with strategic, detail-oriented planning.
              </p>
            </div>

            <div className="card3-desc-item">
              <h3>Designing & Construction</h3>
              <p>
                Specializing in REC (Residential, Engineering, and Commercial)
                projects, we deliver end-to-end solutions tailored to your
                unique needs. Every design is a balance of creativity and
                practicality, while our construction expertise ensures flawless
                execution.
              </p>
            </div>
          </div>
          <img src={team_img} alt="" />
        </div>
      </div>

      <div className="about-content4">
        <h1>Why Partner With Us?</h1>

        <div className="about-content4-cards">
          <div className="about-content4-card">
            <img src={svg1_icon} alt="" />
            <h3>Generational Trust</h3>
            <p>
              {" "}
              A legacy spanning decades means reliability you can count on.
            </p>
          </div>

          <div className="about-content4-card">
            <img src={svg2_icon} alt="" />
            <h3>Holistic Expertise</h3>
            <p>
              Seamlessly integrating planning, design, and construction under
              one roof.
            </p>
          </div>

          <div className="about-content4-card">
            <img src={svg3_icon} alt="" />
            <h3>Quality First</h3>
            <p>
              Premium materials, skilled artisanship, and rigorous standards
              define every project.
            </p>
          </div>

          <div className="about-content4-card">
            <img src={svg4_icon} alt="" />
            <h3>Client-Centric Values</h3>
            <p>
              Transparent communication, personalized service, and a promise to
              exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content5">

        <div className="about-content5-desc">
        <p>
          At Kilaniya, we build more than structures—we build dreams,
          relationships, and landmarks that inspire future generations. Let us
          bring your vision to life, one brick at a time.{" "}
        </p>

        <h3>Building Trust <img src={svg5_icon} alt="" /> Since Generations</h3>
        </div>
       
      </div>
    </div>
  );
};

export default About;
