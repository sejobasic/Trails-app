import React, { useEffect, useState } from 'react'
import { Button, Col, Card, Row, Container } from 'react-bootstrap';
import Review from './Review'
import TrailCards from './TrailCards'
import ReviewCard from './ReviewCard'
import '../App.css'


function TrailPage({ trailId }) {
  const [trail, setTrail] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/trails/${trailId}`)
    .then(r => r.json())
    .then (trail => {
      setTrail(trail)
      console.log(trail)
      setReviews(trail.reviews)
      setLoaded(true)
    })
  }, [])

if (!loaded) {
  return <div>loading...</div>
}
  return (
    <div>
      {/* <TrailCards trail={trail}/> */}
      {/* <ReviewCard trail={trail}/> */}
      <Container className="card-container">
        <Card className="bg-dark text-white">
          <Card.Img className="image-review" src={trail.image_url} alt="Card image" />
          <Card.ImgOverlay className="overlay" >
            <Card.Title>{trail.name}</Card.Title>
            <Card.Text>{trail.city}, {trail.state}</Card.Text>
            <Card.Text>
            {trail.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>


      {reviews.map(review => {
        return <Review review={review} trail={trail}/>
      })}
    </div>

  )
}

export default TrailPage