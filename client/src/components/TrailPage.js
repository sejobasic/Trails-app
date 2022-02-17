import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import Review from './Review'
import TrailCards from './TrailCards'

function TrailPage({ trailId }) {
  const [trail, setTrail] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState({
    summary: '',
    text: '',
    rating: 5
  })

  useEffect(() => {
    fetch(`/trails/${trailId}`)
    .then(r => r.json())
    .then (trail => {
      setTrail(trail)
      setReviews(trail.reviews)
      setLoaded(true)
    })
  }, [])

  const handleOnChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })
  }

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

if (!loaded) {
  return <div>loading...</div>
}
  return (
    <>
    <div>
      <TrailCards trail={trail}/>
      
      {reviews.map(review => {
        return <Review key={review.id} review={review}/>
      })}

    <Container className="card-container">
      <Form style={{padding: '2rem', width: '80%', boxShadow: 'none', border: 'solid', borderColor: 'lightgray', borderRadius: '5px'}}>
        <Form.Group className="mb-3" controlId="formSummary">
          <Form.Label><h3>Write a Review</h3></Form.Label>
          <Form.Control type="summary" name="summary" placeholder="Write a summary" value={form.summary} onChange={e => handleOnChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formReview">
          <Form.Control as="textarea" rows={5} type="review" name="text" placeholder="Write your review" value={form.text} onChange={e => handleOnChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Control type="number" name="rating" value={form.rating} onChange={e => handleOnChange(e)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </Container>
    </div>
    </>
  )
}

export default TrailPage