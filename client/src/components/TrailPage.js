import React, { useEffect, useState } from 'react'
import { Button, Col, Card, Row, Container, Form, Image } from 'react-bootstrap';
import Review from './Review'
import TrailCards from './TrailCards'
import ReviewCard from './ReviewCard'
import { Rating } from 'react-simple-star-rating'
import '../App.css'


function TrailPage({ trailId }) {
  const [trail, setTrail] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const [reviewErrors, setReviewErrors] = useState([]);
  const [rating, setRating] = useState(0)
  const [form, setForm] = useState({
    summary: '',
    text: '',
    rating: 0
  })


  const handleRating = (rate) => {
    setRating(rate)
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
    }).then((r) => {
      if (r.ok) {
        r.json().then(newReview => {
          setReviews([...reviews, newReview]);
          setErrors([]);
        });
      } else {
        r.json().then(err => {
          setErrors(err.errors);
        });
      }
    })
  }


  // function handleDelete(id) {
  //   fetch(`/reviews/${id}`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setReviews((reviews) =>
  //       reviews.filter((review) => review.id !== id)
  //       );
  //     } else {
  //       r.json().then(err => {
  //         setReviewErrors(err.errors);
  //       })
  //     }
  //   });
  // }




if (!loaded) {
  return <div>loading...</div>
}

const mapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAnKa-88F4rgDA_-8giFeehPgxKsEQSPzk&q=${trail.name},${trail.city},${trail.state}`

  return (
    
    <>
    <div>
      {/* <TrailCards trail={trail}/> */}
      {/* <ReviewCard trail={trail}/> */}
      {/* <Container className="trail-card-container">
        <Card className="bg-dark text-white">
          <Card.Img className="image-review" src={trail.image_url} alt="Card image" />
          <Card.ImgOverlay  >
            <Card.Title id="page-card">{trail.name}</Card.Title>
            <Card.Text id="page-card">{trail.city}, {trail.state}</Card.Text>
            <Card.Text id="page-card">
            {trail.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container> */}
    <Card >
      <Image
      className="trail-image"
      src={trail.image_url}
      rounded={true}
       />
       <Card.ImgOverlay  >
            <Card.Title id="page-card">{trail.name}</Card.Title>
            <Card.Text id="page-card">{trail.city}, {trail.state}</Card.Text>
            <Card.Text id="page-card">
            {trail.description}
            </Card.Text>
          </Card.ImgOverlay>
    </Card>



      <iframe src={mapURL} width="100%" height="300" style={{border:0}} allowfullscreen></iframe>


      {reviews.map(review => {
        return <Review key={review.id} review={review} setReviews={setReviews}/>
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
        {errors ?
          errors.map(e => {
          return (<p className='errors' key={e}>{e}</p>)
          }) :
          null
        }
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