import React from 'react'
import Swiper from 'react-native-swiper'
import SwiperView from '../../../components/SwiperView'
import { Image1, Image2, Image3 } from '../../../constants/images'

const slideText = {
  slideOne: ['Hello, this is', 'Book Worms', 'Read books designed to entertain you and answer simple questions after finishing...'],
  slideTwo: ['What you can do at', 'Book Worms', 'Get points as you progress and share your progress with family and friends'],
  slideThree: ['Sign In', 'Book Worms', 'Start your journey here']
}

const Onboarding = (): JSX.Element => {
  return (
    <Swiper
      loop={false}
      // autoplay={true}
      // autoplayTimeout={10}
    >
      <SwiperView src={Image1} textArray={slideText.slideOne} />
      <SwiperView src={Image2} textArray={slideText.slideTwo}/>
      <SwiperView src={Image3} textArray={slideText.slideThree}/>
    </Swiper>
  )
}

export default Onboarding
