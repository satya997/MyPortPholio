import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.add("show");
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("show");
    }
  };

  const handleMenuClick = (section) => {
    setMenu(section); // Update active menu
    closeMenu(); // Close the sidebar
  };

  return (
    <div className="navbar">
      <div className="name">SP</div>

      {/* Hamburger icon to open the menu */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />

      {/* Sidebar menu */}
      <div ref={menuRef} className="nav-menu">
        <button className="back-btn" onClick={closeMenu}>
          &larr; Back
        </button>
        <li>
          <AnchorLink
            href="#home"
            onClick={() => handleMenuClick("home")}
            className="anchor-link"
          >
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            href="#about"
            onClick={() => handleMenuClick("about")}
            className="anchor-link"
          >
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            href="#services"
            onClick={() => handleMenuClick("services")}
            className="anchor-link"
          >
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            href="#work"
            onClick={() => handleMenuClick("work")}
            className="anchor-link"
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink
            href="#contact"
            onClick={() => handleMenuClick("contact")}
            className="anchor-link"
          >
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </div>
    </div>
  );
};

export default Navbar;
