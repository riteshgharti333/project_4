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
          <Link className="nav-link">
            <li onClick={() => handleDropdown("architecture")}>
              Architecture <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "architecture" && (
              <div className="dropdown-menu" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    <h4>By Size</h4>

                    <ul>
                      <li>25 x 50 House Plans</li>
                      <li>25 x 50 House Plans</li> <li>25 x 50 House Plans</li>
                      <li>25 x 50 House Plans</li> <li>25 x 50 House Plans</li>
                      <li>25 x 50 House Plans</li> <li>25 x 50 House Plans</li>
                    </ul>
                  </div>
                  <div className="dropdown-menu-item">
                    <h4>By Area</h4>

                    <ul>
                      <li>500 Sqft - 700 Sqft</li>
                      <li>500 Sqft - 700 Sqft</li> <li>500 Sqft - 700 Sqft</li>{" "}
                      <li>500 Sqft - 700 Sqft</li> <li>500 Sqft - 700 Sqft</li>{" "}
                      <li>500 Sqft - 700 Sqft</li> <li>500 Sqft - 700 Sqft</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    <h4>By Bedroom</h4>

                    <ul>
                      <li>1 BHK</li>
                      <li>2 BHK</li>
                      <li>3 BHK</li>
                      <li>4 BHK</li>
                      <li>5 BHK</li>
                      <li>6 BHK</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>
          <Link className="nav-link">
            <li onClick={() => handleDropdown("interior")}>
              Interior <IoMdArrowDropdown className="nav-down" />
            </li>
            {openDropdown === "interior" && (
              <div className="dropdown-menu" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}

                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                  <div className="dropdown-menu-item">
                    {/* <h4>By Area</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>

          <Link className="nav-link">
            <li onClick={() => handleDropdown("contractor")}>
              Contractor <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "contractor" && (
              <div className="dropdown-menu contract " ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>

                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>

          <Link className="nav-link">
            <li onClick={() => handleDropdown("design")}>
              Design Ideas <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "design" && (
              <div className="dropdown-menu design" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>

          <Link className="nav-link">
            <li onClick={() => handleDropdown("other")}>
              Other Services <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "other" && (
              <div className="dropdown-menu other" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>

          <Link className="nav-link">
            <li onClick={() => handleDropdown("resources")}>
              Resources <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "resources" && (
              <div className="dropdown-menu resources" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Link>

          <Link className="nav-link">
            <li onClick={() => handleDropdown("more")}>
              More <IoMdArrowDropdown className="nav-down" />
            </li>

            {openDropdown === "more" && (
              <div className="dropdown-menu more" ref={dropdownRef}>
                <div className="dropdown-menu-items">
                  <div className="dropdown-menu-item">
                    {/* <h4>By Size</h4> */}
                    <ul>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                      <li>Bedroom</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
