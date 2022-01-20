import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Css
import HeaderCss from "./Header.module.scss";
// Assets
import Logo from "../../Assets/Img/Logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
// Componenets
import Button from "../Button";

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className={HeaderCss.header}>
      <div className="container">
        <div className={HeaderCss.header_menu}>
          {openBurger ? <div className={HeaderCss.bg_color_blur}></div> : ""}
          <div className={HeaderCss.header_single_box}>
            <div className={HeaderCss.header_logo_width}>
              <img src={Logo} alt="" />
            </div>
          </div>
          <nav className={`${HeaderCss.header_single_box} ${HeaderCss.nav}`}>
            <ul>
              <li>
                <NavLink activeClassName="activeClassName" to="/pathname">
                  restaurant
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeClassName" to="/pathname">
                  partnership
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeClassName" to="/pathname">
                  help
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={HeaderCss.header_single_box}>
            <div className={HeaderCss.header_btns}>
              <Button
                text="Restaurant Owner?"
                bgColor="#f5f5f5"
                color="#0D1A2A"
                icon=""
              />
              <Button
                icon={<FaUserAlt />}
                text=""
                bgColor="#0d1a2a"
                color="#fff"
              />
              <div className={HeaderCss.burger_menu}>
                <HiMenuAlt4
                  className={`${openBurger ? `${HeaderCss.none}` : ""}`}
                  onClick={() => setOpenBurger(!openBurger)}
                />
                <nav
                  className={`${HeaderCss.burger_nav} ${
                    openBurger ? `${HeaderCss.fade_in}` : ""
                  }`}
                >
                  <IoCloseOutline
                    className={`${HeaderCss.close_burger} `}
                    onClick={() => setOpenBurger(!openBurger)}
                  />

                  <ul>
                    <li>
                      <NavLink to="/pathname" activeClassName="activeClassName">
                        Restaurants
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pathname" activeClassName="activeClassName">
                        Partnership
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pathname" activeClassName="activeClassName">
                        Help
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/pathname" activeClassName="activeClassName">
                        Restaurant Owner?
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
