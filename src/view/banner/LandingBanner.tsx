import React from 'react';
import landingImage from '../../../public/img/roman-kraft-0EVKn3-5JSU-unsplash.jpg';
import './LandingBanner.scss'
import '../../core/banner.scss'
import '../../core/core.scss'

import Button from '../components/Button';

const LandingBanner = () => {
  return (
    <div className={"banner landingBanner"}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 justify-content-start">
            <h1>Lorem Ipsum</h1>
            <p className={"landingText"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text={"Make a Donation"} className={"donate"} />
          </div>
          {/*<div className="col-md-8 d-none d-md-flex justify-content-md-end">*/}
          {/*  <img className={"landingImage"} src={landingImage}/>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  )
}


export default LandingBanner
