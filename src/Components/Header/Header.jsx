import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Css
import HeaderCss from "./Header.module.scss";
// Assets
import Logo from "../../Assets/Img/Logo.svg";

import { FaUserAlt } from "react-icons/fa";
// Componenets
import Button from "../Button";

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <div className="container">
        <div className={HeaderCss.header_menu}>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
