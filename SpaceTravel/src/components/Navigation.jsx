import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/book">Book</Link>
      </li>
      <li>
        <Link to="/destination">Destination</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default Navigation;
