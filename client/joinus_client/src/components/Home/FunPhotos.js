import React from "react";
import bubbles from '../../images/29.png'
import './funPhoto.scss'
import horn from '../../images/Idea.png'

export default function FunPhoto(props) {
  return (
    <div className="animated-images">
      <img alt="fun" src={bubbles} className='bubbles-image'></img>
      <img alt="funfun" src={horn} className='horn-image'></img>
    </div>
  )
}