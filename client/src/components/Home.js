import React from 'react'
import { Link } from 'react-router-dom'
import TrailCards from './TrailCards'
import { Button, Col, Card, Row, Container, Carousel } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home({ trails }) {

  const mappedTrails = trails.map(trail => {
    const city = trail.city
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
  
  return (
    <div>
      <Carousel className="carousel-container" >
        {mappedTrails}
      </Carousel>

      
      {trails.map((trail) => {
        return <TrailCards key={trail.id} trail={trail} />
      })}
    </div>
  )
}

export default Home