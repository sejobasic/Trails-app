import React from 'react'
import { Link } from 'react-router-dom'
import TrailCards from './TrailCards'
import MultiCarousel from './MultiCarousel';
import { Button, Col, Card, Row, Container, Carousel } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home({ trails }) {

  const carouselItems = trails.map(trail => {
    const city = trail.city.split(' ').join('');
    const state = trail.state
    const name = trail.name.split(' ').join('');

    return (
      <Carousel.Item key={trail.id} as={Link} to={`/trails/${state}/${city}/${name}`}>
        <img
          src={trail.image_url}
          alt={`${trail.name} Slide`}
        />
        <Carousel.Caption>
          <h3>{trail.name}</h3>
          <p>{trail.city}, {trail.state}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  // const trailCards = trails.map((trail) => {
  //   return <TrailCards key={trail.id} trail={trail} />
  // })
  
  return (
    <div>
      <Carousel className="carousel-container" >
        {carouselItems}
      </Carousel>

      <Container style={{paddingTop: '5rem'}}>
      <h2>Local Favorites</h2>
      <MultiCarousel trails={trails}/>
      </Container>
    </div>
  )
}

export default Home