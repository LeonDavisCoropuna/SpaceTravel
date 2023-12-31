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
        <img src="\src\assets\SAC_logo.original.svg" alt="Image: Logo" className="logo" width={150} height={150}style={{filter:"invert(100%)", borderRadius:"5px"}}/>
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
              <Link to="/destination">
                <span className="nav__item-number">01</span> Destination </Link>
              
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