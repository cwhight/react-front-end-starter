import React from 'react';
import Helmet from 'react-helmet';
import AboutUsBanner from '../banner/AboutUsBanner';
import CampaignBanner from '../banner/CampaignBanner';
import LandingBanner from '../banner/LandingBanner';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Navigation from '../navigation/Navigation';
import '../components/Carousel.scss'
import '../../core/banner.scss'

const Campaign = () => {
  return (
    <div className="main">
      <Helmet>
      </Helmet>
      <Navigation />
      <div className={"carouselBanner banner d-flex flex-column align-items-center justify-content-around"}>
        <div className={"text-center w-md-50"}>
          <h1>Our Live Campaigns</h1>
          <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <Carousel auto={false}/>
        <Button text={"Donate to Our Communal Fund"} className={"secondary mt-3"} />
      </div>
      <AboutUsBanner />
    </div>
  )
}

export default Campaign;
