import React from 'react'
import { Link } from 'react-router-dom'
import TrailCards from './TrailCards'
import { Form, Button, Container, Carousel, Image } from 'react-bootstrap';
import logo1  from '../assets/logo4.png';
import trails1  from '../assets/trails1.jpg';
import SlickCarousel from './SlickCarousel';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home({ trails, regex }) {

  const carouselItems = trails.map(trail => {
    const city = regex(trail.city)
    const state = regex(trail.state)
    const name = regex(trail.name)

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

  const favoritedTrails = trails.filter(trail => trail.favorites > 0)
  
  return (
    
    <div>
      <Carousel className="carousel-container" >
        {carouselItems}
      </Carousel>
      <div className="searchbar" style={{position: 'absolute', top: '28rem', left: '43%', right: '35%',}}>
        <Form.Group>
          
          {/* <Form.Label style={{fontSize: '1rem'}}>Search for Trails</Form.Label> */}
          <Form.Control
           style={{height: '3rem', width: '65%', fontSize: '1.0rem', borderRadius: '25px', border: '1px solid'}} 
           type='search' placeholder='Search by city, state, or trail' 
           />
        </Form.Group>
      </div>

      <Container style={{paddingTop: '5rem'}}>
      <SlickCarousel trails={favoritedTrails} regex={regex}/>
      </Container>
      <Image 
      src={trails1}
      className="hero-image"
      > 
      </Image>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About Us</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-google-plus"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span> Street name and number</span> City, Country</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> (+00) 0000 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="#"> office@company.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
        <div className="footer-logo">
            <img src={logo1}/>
        </div>
          <p className="menu">
            <a href="#">Home |</a>
            <a href="#">About |</a>
            <a href="#">Contact</a>
          </p>
          <p className="name"> Trails &copy; 2022</p>
        </div>
      </footer>
    </div>
  )
}

export default Home