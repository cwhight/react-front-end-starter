import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './SideNavBar.scss'
import '../../core/core.scss'
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  return (
    <div className={"sideNavBar full-hidden"}>
      <Menu>
        <Link to="/">Home</Link>
        <a href="">Donate</a>
        <Link to="/campaigns">Campaigns</Link>
        <a href="">About Us</a>
      </Menu>
    </div>
  )
}

export default SideNavBar;
