import React from "react";
import Button from "../components/Button";
import "../styles/Header.css";

function Header() {
  return (
    <div className='container header'>
      <p>Innovation</p>
      <ul className='container headerSections'>
        <li>About us</li>
        <li>Thrust Areas</li>
        <li>Ecosystem Partners</li>
        <li>Accelerators</li>
        <li>News & Events</li>
        <Button text="Apply now" />
      </ul>
    </div>
  );
}

export default Header;
