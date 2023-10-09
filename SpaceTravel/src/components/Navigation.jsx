import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // function addActiveClassToLink() {
  //   const links = document.querySelectorAll('.nav__list li');
  
  //   links.forEach((link) => {
  //     link.addEventListener('click', function () {
  //       links.forEach((li) => li.classList.remove('active'));
  //       this.classList.add('active');
  //     });
  //   });
  // }

  // useEffect(() => {
  //   addActiveClassToLink();
  // }, []);
  return (
    <div>
      <a href="../index.html">
        <img src="../assets/shared/logo.svg" alt="Image: Logo" class="logo" />
      </a>
      <nav class="nav">
        <img src="../assets/shared/icon-close.svg" alt="Close navbar icon" class="close-nav" />
        <ul class="nav__list">
          <li class="active">
            <p class="nav-text">
              <Link to="/home">
                <span class="nav__item-number">00</span> Home </Link>
            </p>
          </li>
          <li>
            <p class="nav-text">
              <Link to="/destination">
                <span class="nav__item-number">01</span> Destination </Link>
            </p>
          </li>
          <li>
            <p class="nav-text">
              <Link to="/book">
                <span class="nav__item-number">02</span> Book </Link>
            </p>
          </li>
          <li>
            <p class="nav-text">
              <Link to="/about">
                <span class="nav__item-number">03</span> About </Link>
            </p>
          </li>
        </ul>
        <div class="nav__line opacity-25"></div>
      </nav>
      <div class="hamburger">
        <img src="../assets/shared/icon-hamburger.svg" alt="Image: icon hamburger" />
      </div>
    </div>
  );
}

export default Navigation;
