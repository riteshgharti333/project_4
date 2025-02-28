import "./Service.scss";

import service_icon from "../../assets/images/service1.png";

import { FaCheck } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="service">
      <div className="service-top">
        <h1>Your One-Stop Destination for Home Plans and Designs</h1>
        <p>
          MakeMyHouse is your ultimate destination for all your home plans and
          design needs. From initial consultation to the final execution, we
          provide end-to-end solutions for your dream home.
        </p>
      </div>

      <div className="service-cards">
      <div className="service-card">
          <img src={service_icon} alt="" />
          <p>Buy & Sell Plot</p>

          <ul>
            <li>
              <FaCheck className="check-icon" />
              <span>Easy Registration On plot Khareedo</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span> Geo Location-Based Plot Search</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Thousand Of Verified Sellers</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>60+ Cities Available</span>
            </li>
          </ul>
        </div>
        <div className="service-card">
          <img src={service_icon} alt="" />
          <p>Buy & Sell Plot</p>

          <ul>
            <li>
              <FaCheck className="check-icon" />
              <span>Easy Registration On plot Khareedo</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span> Geo Location-Based Plot Search</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Thousand Of Verified Sellers</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>60+ Cities Available</span>
            </li>
          </ul>
        </div>
        <div className="service-card">
          <img src={service_icon} alt="" />
          <p>Buy & Sell Plot</p>

          <ul>
            <li>
              <FaCheck className="check-icon" />
              <span>Easy Registration On plot Khareedo</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span> Geo Location-Based Plot Search</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Thousand Of Verified Sellers</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>60+ Cities Available</span>
            </li>
          </ul>
        </div><div className="service-card">
          <img src={service_icon} alt="" />
          <p>Buy & Sell Plot</p>

          <ul>
            <li>
              <FaCheck className="check-icon" />
              <span>Easy Registration On plot Khareedo</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span> Geo Location-Based Plot Search</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Thousand Of Verified Sellers</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>60+ Cities Available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
