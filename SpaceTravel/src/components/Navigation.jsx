import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };
  
  const [isActive,setIsActive] = useState(0);
  const handleClick = (e,index) => {
    e.preventDefault();
    setIsActive(index);
  }
  return (
    <div>
      <Link href="/home">
        <img src="../assets/shared/logo.svg" alt="Image: Logo" className="logo" />
      </Link>
      <nav className="nav">
        <img src="../assets/shared/icon-close.svg" alt="Close navbar icon" className="close-nav" />
        <ul className="nav__list">
          <li className={`${isActive === 1 ? "active" : ""}`} onClick={(e) => handleClick(e,1)}>
            <p className="nav-text">
              <Link to="/home">
                <span className="nav__item-number">00</span> Home </Link>
            </p>
          </li>
          <li className={`${isActive === 2 ? "active" : ""}`} onClick={(e) => handleClick(e,2)} 
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="nav-text">
              <a href="#">
                <span className="nav__item-number">01</span> Destination </a>
              <ul className={`sub-menu ${isSubMenuVisible[2] ? "visible" : ""}`}>
                <li>
                  <Link to="/destination/mercury">
                    <span className="nav__item-number">01  </span> Mercury 
                  </Link>
                </li>
                <li>
                  <Link to="/destination/venus">
                    <span className="nav__item-number">02  </span> Mars
                  </Link>
                </li>
              </ul>
            </p>
          </li>
          <li className={`${isActive === 3 ? "active" : ""}`} onClick={(e) => handleClick(e,3)}>
            <p className="nav-text">
              <Link to="/book">
                <span className="nav__item-number">02</span> Book </Link>
            </p>
          </li>
          <li className={`${isActive === 4 ? "active" : ""}`} onClick={(e) => handleClick(e,4)}>
            <p className="nav-text">
              <Link to="/about">
                <span className="nav__item-number">03</span> About </Link>
            </p>
          </li>
        </ul>
        <div className="nav__line opacity-25"></div>
      </nav>
      <div className="hamburger">
        <img src="../assets/shared/icon-hamburger.svg" alt="Image: icon hamburger" />
      </div>
    </div>
  );
}

export default Navigation;