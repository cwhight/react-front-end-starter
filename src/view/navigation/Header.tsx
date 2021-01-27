import React, { useState } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentScrollPos, setCurrentScrollPos] = useState(window.pageYOffset);

  // Hide or show the menu.
  const handleScroll = () => {
    const newScrollPos = window.pageYOffset;
    const visible = newScrollPos < currentScrollPos || newScrollPos < 350;

    setIsVisible(visible);
    setCurrentScrollPos(newScrollPos);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`mobile-hidden header ${isVisible ? "" : "hidden"}`}>
      <div className={"w-90 d-flex justify-content-between align-items-center"}>
        <h1><Link to="/home" />brand</h1>
        <Button text={"Donate"} className={"donate"}/>
      </div>
    </div>
  )
}

export default Header;
