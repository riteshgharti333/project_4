import { useState } from "react";
import "./HomeBanner.scss";
import { FaChevronDown } from "react-icons/fa"; // Import the arrow icon
import banner from "../../assets/images/banner.jpg";
import svg_icon from "../../assets/images/icon.svg";

const HomeBanner = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="homeBanner">
      <div className="homeBanner-img">
        <img src={banner} alt="" />
      </div>

      <div className="homeBanner-desc">
        <h1>अब घर बनेगा आसानी से</h1>

        <div className="homeBanner-desc-item">
          <div className="homeBanner-desc-item-cards">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`homeBanner-desc-item-card ${
                  selectedCard === index ? "active" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <img src={svg_icon} alt="" />
                <p>2D Layout Plan</p>
              </div>
            ))}
          </div>
        </div>

        <div className="homeBanner-desc-item-inputs">
          <input type="number" placeholder="Depth" />
          <input type="number" placeholder="Width" />

          {/* Custom Select with Arrow Icon */}
          <div className="custom-select">
            <select>
              <option>Floor</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>

          <input type="text" placeholder="Building Area" />

          {/* Custom Select with Arrow Icon */}
          <div className="custom-select">
            <select>
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>

          <button>Calculate Price</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
