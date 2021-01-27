import React from 'react';
import './CampaignCard.scss'
import Button from './Button';

export interface CampaignCardProps {
  imageUrl: string;
  name: string
}

const CampaignCard = (props: CampaignCardProps) => {
    const {imageUrl, name} = props
    return (
        <div className="property-card">
          <a href="#">
            <div className="property-image" style={{ backgroundImage: `url(${imageUrl})`}}>
              <div className="property-image-title">
              </div>
            </div>
          </a>
          <div className="property-description">
            <div>
              <h5> {name} </h5>
              <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
            </div>
            <div className={"d-flex flex-column"}>
              <a href="" className={"link  pb-3"}>Read more</a>
              <Button text={"Donate"} className={"donate"}/>
            </div>
          </div>
        </div>
    );

}

export default CampaignCard;
