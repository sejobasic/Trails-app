import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import TrailCards from './TrailCards'

const responsive = {
  // Screen size breakpoints
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};


function MultiCarousel({trails}) {
  const trailCards = trails.map((trail) => {
    return <TrailCards key={trail.id} trail={trail} />
  })

  return (
    <Carousel 
      responsive={responsive}
      autoPlay={false}
      autoPlaySpeed={50000}
      infinite={true}
      renderButtonGroupOutside={true}
      containerClass='carousel-container'
    >
      {trailCards}
    </Carousel>
  )
}

export default MultiCarousel