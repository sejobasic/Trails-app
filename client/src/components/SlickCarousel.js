import React from 'react'

import Slider from "react-slick";
import TrailCards from './TrailCards';


function SlickCarousel({ trails, regex }) {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const trailCards = trails.map((trail) => {
    return <TrailCards key={trail.id} trail={trail} regex={regex} />
  })

  return (
    <div>
      <h2 style={{paddingLeft: '1rem'}}>Local Favorites</h2>
      <Slider {...settings}>
        {trailCards}
      </Slider>
    </div>
  );
}

export default SlickCarousel