import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import landingImage from '../../../public/img/roman-kraft-0EVKn3-5JSU-unsplash.jpg';
import Button from '../components/Button';
import '../../core/banner.scss'
import '../../core/core.scss'
import './AboutUsBanner.scss'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import SocialButtons from '../components/SocialButtons';


const AboutUsBanner = () => {
  return (
      <div className={"aboutUsBanner banner"}>
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="text-center">
              <h1 className={"pb-3"}>How It Works</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <FontAwesomeIcon  icon={faEllipsisH} className={"orange"}/>
            <div className="text-center py-3">
              <h2 className={"blue pb-3"}>Where Does Your Money Go?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default AboutUsBanner;
