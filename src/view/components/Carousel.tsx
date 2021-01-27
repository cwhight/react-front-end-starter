import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useLayoutEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useWindowWidth } from '../../utils/UseWindowSize';
import CampaignCard, { CampaignCardProps } from './CampaignCard';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../core/button.scss'
import '../../core/core.scss'
import './Carousel.scss'

export interface CarouselProps {
  numSlides?: number;
  slides?: CampaignCardProps[];
  auto: boolean;
}

const Carousel = (props: CarouselProps) => {
     const {numSlides, slides, auto} = props

    const [screenWidth, setScreenWidth] = useState(window.outerWidth)

    const width = useWindowWidth();
    let visibleSlides: number;

    if (width > 820) {
      visibleSlides = 3
    } else {
      visibleSlides = 1
    }

    return (
      <div className="container">
        <CarouselProvider
          naturalSlideWidth={125}
          naturalSlideHeight={100}
          totalSlides={9}
          visibleSlides={visibleSlides}
          infinite={true}
          isPlaying={auto}
        >
          <div className="flex align-items-center">
              <ButtonBack className={"backButton mobile-hidden"}><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
              <Slider className={"sliderCustom"}>
                    <Slide index={1} innerClassName={"d-flex justify-content-around"}><CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg'}/></Slide>
                    <Slide index={2} innerClassName={"d-flex justify-content-around"}><CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591253/demo/joseph-gonzalez-iFgRcqHznqg-unsplash_cn4syd.jpg'}/></Slide>
                    <Slide index={3} innerClassName={"d-flex justify-content-around"}><CampaignCard name={"Name"} imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg'}/></Slide>
                    <Slide index={4} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={"https://res.cloudinary.com/cwhight/image/upload/v1611591281/demo/erik-lucatero-d2MSDujJl2g-unsplash_glncjb.jpg"} name={"Name"}/></Slide>
                    <Slide index={5} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg'} name={"Name"}/></Slide>
                    <Slide index={6} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg'} name={"Name"}/></Slide>
                    <Slide index={7} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591326/demo/carlos-lindner-DkSkgaPie8s-unsplash_vkhbyv.jpg'} name={"Name"}/></Slide>
                    <Slide index={8} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611590877/demo/hichem-dahmani-EhcwOfAn-mA-unsplash_pkkhpg.jpg'} name={"Name"}/></Slide>
                    <Slide index={9} innerClassName={"d-flex justify-content-around"}><CampaignCard imageUrl={'https://res.cloudinary.com/cwhight/image/upload/v1611591253/demo/joseph-gonzalez-iFgRcqHznqg-unsplash_cn4syd.jpg'} name={"Name"}/></Slide>
              </Slider>
              <ButtonNext className={"nextButton mobile-hidden"}><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
          </div>
          <div className={"d-flex mt-3"}>
            <ButtonBack className={"full-hidden"}><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
            <ButtonNext className={"full-hidden"}><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
          </div>

        </CarouselProvider>
      </div>
    );
}

export default Carousel;
