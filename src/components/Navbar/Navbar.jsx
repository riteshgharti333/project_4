import { Link } from "react-router-dom";
import "./Navbar.scss";

import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

import logo from "../../assets/images/logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/services"}>
            <li>
              Services
            </li>
          </Link>
          <Link to={"/about-us"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="navbar-right-btns">
          <button>Consult Online Now</button>
          <button>News</button>
        </div>

        <div className="mobile-menu">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
