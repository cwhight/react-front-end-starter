import React from 'react';
import landingImage from '../../../public/img/priscilla-du-preez-aPa843frIzI-unsplash.jpg';
import Button from '../components/Button';
import CampaignCard, { CampaignCardProps } from '../components/CampaignCard';
import './CampaignBanner.scss'
import '../../core/banner.scss'
import prof1 from '../../../public/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import prof2 from '../../../public/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import prof3 from '../../../public/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import Carousel from '../components/Carousel';

const CampaignBanner = () => {
  // const slides: CampaignCardProps[] = [
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg', name: "Name" },
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611591253/demo/joseph-gonzalez-iFgRcqHznqg-unsplash_cn4syd.jpg', name: "Name" },
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg', name: "Name" },
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg', name: "Name" },
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611591253/demo/joseph-gonzalez-iFgRcqHznqg-unsplash_cn4syd.jpg', name: "Name" },
  //   {imageUrl: 'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg', name: "Name" }
  // ]

  return (
      <div className={"campaignBanner banner"}>
        <div className="container">
          <Carousel auto={true}/>
          {/*<div className="row justify-content-between align-items-center mb-3">*/}
          {/*  /!*<Carousel numSlides={6} slides={slides} />*!/*/}
          {/*  <div className="d-flex col-12 col-md-6 col-lg-4 justify-content-center">*/}
          {/*    <CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg'}/>*/}
          {/*  </div>*/}
          {/*  <div className="d-flex col-12 col-md-6 col-lg-4 justify-content-center">*/}
          {/*    <CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591253/demo/joseph-gonzalez-iFgRcqHznqg-unsplash_cn4syd.jpg'}/>*/}
          {/*  </div>*/}
          {/*  <div className="d-flex col-12 col-md-6 col-lg-4 justify-content-center">*/}
          {/*    <CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg'}/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
          <div className={"col-12 text-center mt-3"}>
            <Button text={"Make a Donation"} className={"donate"} />
            <Button text={"See all our Campaigns"} className={"secondary"} route={"/campaigns"} />
          </div>
      </div>
    )
}

export default CampaignBanner;
