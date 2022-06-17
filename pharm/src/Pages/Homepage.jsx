import React from 'react'
import FooterStart from '../components/FooterStart'
import FooterMiddle from '../components/FooterMiddle'
import { DealsOfTheDay } from "../components/DealsOfTheDay";
import {useDispatch} from 'react-redux'
import {getData} from '../Redux/Products/Action'
import Upper from '../components/Upper'
import SwipeToSlide from './BrandSlider'
import { ControlledCarousel } from '../components/ControlledCrousel';

const Homepage = () => {
  return (
    <div>
     <ControlledCarousel/>
      <Upper/>
      <SwipeToSlide/>
      <DealsOfTheDay/>
      <FooterStart/>
      <FooterMiddle/>
    </div>
  )
}

export default Homepage
