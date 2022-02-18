import React, { useEffect, useState } from 'react'
import { Button, Col, Card, Row, Container, Form } from 'react-bootstrap';
import Review from './Review'
import TrailCards from './TrailCards'
import ReviewCard from './ReviewCard'
import { Rating } from 'react-simple-star-rating'
import '../App.css'


function TrailPage({ trailId }) {
  const [trail, setTrail] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [rating, setRating] = useState(0)
  const [form, setForm] = useState({
    summary: '',
    text: '',
    rating: 3
  })


  const handleRating = (rate: number) => {
    setRating(rate)
    console.log(rate)
    setForm({
      ...form, 
       rating: rate / 20
    })
  }


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

  const handleOnChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
    setRating(rating)
  }

  // const handleRating = (e) => {
  //   setRating(rating)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      summary: form.summary,
      text: form.text,
      rating: form.rating,
      trail_id: trail.id
    }
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
    })
    .then(r => r.json())
    .then(newReview => {
      setReviews([...reviews, newReview]);
    })
  }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setReviews((reviews) =>
        reviews.filter((review) => review.id !== id)
        );
      }
    });
  }


if (!loaded) {
  return <div>loading...</div>
}
  return (
    <>
    <div>
      {/* <TrailCards trail={trail}/> */}
      {/* <ReviewCard trail={trail}/> */}
      <Container className="card-container">
        <Card className="bg-dark text-white">
          <Card.Img className="image-review" src={trail.image_url} alt="Card image" />
          <Card.ImgOverlay className="overlay" >
            <Card.Title id="page-card">{trail.name}</Card.Title>
            <Card.Text id="page-card">{trail.city}, {trail.state}</Card.Text>
            <Card.Text id="page-card">
            {trail.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>


      {reviews.map(review => {
        return <Review key={review.id} review={review} handleDelete={handleDelete} trail={trail}/>
      })}

    <Container className="card-container">
      <Form 
        style={
          {
            padding: '2rem', 
            width: '80%', 
            boxShadow: 'none', 
            border: 'solid', 
            borderColor: 'lightgray', 
            borderRadius: '5px'
          }}>
        <Form.Group className="mb-3" controlId="formSummary">
          <Form.Label><h3>Write a Review</h3></Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReview">
          <Form.Control 
            as="textarea" 
            rows={5} 
            type="review" 
            name="text" 
            placeholder="Write your review" 
            value={form.text} 
            onChange={e => handleOnChange(e)} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Rating 
          onClick={handleRating} 
          ratingValue={rating} 
          initialValue={0}
          fillColor={"#483d8b"}
          type="number" 
          name="rating" 
          value={form.rating} 
          onChange={e => handleOnChange(e)} 
        />
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit" 
          onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
    </>
  )
}

export default TrailPage