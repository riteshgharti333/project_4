import { Link } from "react-router-dom";
import "./Footer.scss";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <Link className="footer-link">Home</Link>
          <Link className="footer-link">About Us</Link>
          <Link className="footer-link">Contact Us</Link>
        </div>

        <div className="footer-center">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-icons">
            <FaFacebook className="footer-icon" />
            <FaYoutube className="footer-icon" />

            <FaInstagram className="footer-icon" />
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-services">
            <Link>Service 1</Link>
            <Link>Service 2</Link>
            <Link>Service 3</Link>
            <Link>Service 5</Link>
            <Link>Service 5</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
        Kilinya Construction all rights reserved Devloped and Design by&nbsp;
          <a
            href="https://www.Wingstarnarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="star-link"
          >
            Star Marketing
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
