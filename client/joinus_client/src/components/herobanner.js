import React from "react";
import ReactSwitch from 'react-switch'
import { Container } from "@mui/system";
import './herobanner.scss'


const Herobanner = function() {
  return (
    <Container className="homepage-herobanner--main">
      <h1 className="homepage-herobanner--title">Come and Join Us!</h1>
    <div className="homepage-herobanner--text-photo">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis sollicitudin enim eu dapibus. Donec efficitur, eros lobortis tristique ornare, tellus tellus venenatis neque, non cursus ligula sem sed ipsum. Phasellus efficitur purus vitae auctor pulvinar. Donec erat nunc, pellentesque nec aliquet sit amet, facilisis at sapien. Quisque commodo maximus metus a feugiat. Nullam turpis dolor, fringilla nec neque a, pellentesque varius odio. Pellentesque sit amet porttitor lacus, non vulputate enim. Pellentesque sed elementum diam, at egestas mi. Nunc sit amet metus vel massa molestie egestas. Morbi non massa gravida, euismod ex ac, vestibulum nibh. Nulla lobortis, lacus et congue sagittis, sem risus ultricies justo, quis bibendum risus augue et est. Nunc consectetur, neque ut vehicula venenatis, eros lorem congue ipsum, non tincidunt tellus diam vel dui. Suspendisse tempus pharetra nisl, non eleifend ante tempus sed. Aliquam erat volutpat. Etiam vitae ultrices risus, eget aliquam ex. Phasellus odio nunc, laoreet non accumsan sit amet, maximus at justo.
      </p>
    <img src="https://dummyimage.com/600x400/21c442/ffffff"></img>
    </div>
    
    </Container>
  )
}

export default Herobanner