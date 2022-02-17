import React from 'react'
import TrailCards from './TrailCards'
import { Button, Col, Card, Row, Container, Carousel } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home({ trails }) {


  
  return (
    <div>
        <Carousel className="carousel-container" >
          <Carousel.Item className="img-overlay">
            <img
              className="d-block w-100"
              src="https://cdn.postindependent.com/wp-content/uploads/sites/6/2016/06/RifleArch-RCT-062614-2-1-1240x930.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Rifle Arch Trail</h3>
              <p>Rifle, Colorado </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="img-overlay">
            <img
              className="d-block w-100"
              src="https://2.bp.blogspot.com/-Yu_udbyPrPA/T7a1MbksOUI/AAAAAAAAJdo/7keEtyCMrqM/s1600/Rifle%2B446.JPG"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Rifle Falls Coyote to Bobcat Trails</h3>
              <p>Silt, Colorado</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="img-overlay">
            <img
              className="d-block w-100"
              src="https://www.imagesfromcolorado.com/images/xl/Grand-Mesa-Scenic-Byway-7-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Grand Mesa Scenic Byway</h3>
              <p>Mesa Lakes, Colorado</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      
      {trails.map((trail) => {
        return <TrailCards key={trail.id} trail={trail} />
      })}
    </div>
  )
}

export default Home