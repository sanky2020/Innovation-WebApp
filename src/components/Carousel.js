import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import '../styles/Carousel.css'

function Carousel() {
    var settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
    
      };
  return (
  <div className="carousel">
    <Slider {...settings}>
      <div className='card-wrapper'>
        <div className='img-container1 img-container'>
        </div>
        <h3>Founder Focused.</h3>
        <p>Founder Focused We seek entrepreneurs with inventiveness, tenacity and passion, who can create what has yet to be imagined.</p>
      </div>
      
      <div className='card-wrapper'>
        <div className='img-container2 img-container'>
        </div>
        <h3>Deep Technologies.</h3>
        <p>Founder Focused We seek entrepreneurs with inventiveness, tenacity and passion, who can create what has yet to be imagined.</p>
      </div>
      
      <div className='card-wrapper'>
        <div className='img-container3 img-container'>
        </div>
        <h3>Paid Proof of Concept.</h3>
        <p>We give entrepreneurs access to our technology, expertise and networks, helping them build the global businesses of tomorrow.</p>
      </div>
      
    </Slider>
    </div>
  )
}

export default Carousel