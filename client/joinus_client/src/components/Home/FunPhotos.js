import React, { useCallback, useEffect } from "react";
import bubbles from '../../images/29.png'
import './funPhoto.scss'
import horn from '../../images/Idea.png'
import meet from '../../images/meet.png'
import signup from '../../images/signup.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function FunPhoto(props) {

  useEffect(() => {
    Aos.init(({ duration: 2000 }))
  }, [])

  return (
    <div className="animated-images">
      <img alt="fun" src={bubbles} className='bubbles-image'></img>
      <img alt="funfun" src={horn} className='horn-image'></img>
      <img alt="fun" src={meet} className='meet-image' data-aos='fade-up'></img>
      <img alt="fun" src={signup} className='signup-image' data-aos='flip-right'></img>
    </div>
  )
}