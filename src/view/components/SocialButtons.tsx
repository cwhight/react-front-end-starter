import React from 'react';
import './SocialButtons.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Button from './Button';

const SocialButtons = () => {
  return (
              <div className="d-flex col-12 col-md-6 col-lg-4 justify-content-center">
                <div className="social-card">
                  <a href="#">
                    <div className="social-image">
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                  </a>
                  <div className="social-description">

                  </div>
                </div>
              </div>
  )
}

export default SocialButtons;
