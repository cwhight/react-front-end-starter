import React, { PureComponent, useState } from 'react';
import Helmet from 'react-helmet';
import '../../App.scss';

import '../../core/core.scss'
import AboutUsBanner from '../banner/AboutUsBanner';
import CampaignBanner from '../banner/CampaignBanner';
import Content from '../Content';
import Header from '../navigation/Header';
import LandingBanner from '../banner/LandingBanner';
import Navigation from '../navigation/Navigation';
import SideNavBar from '../navigation/SideNavBar';
// import './core/core-components.scss';

const Home = () => {
    return (
      <div className="main">
        <Helmet>
        </Helmet>
        <Navigation />
        <LandingBanner />
        <CampaignBanner />
        <AboutUsBanner />
      </div>
    );
}

export default Home;
