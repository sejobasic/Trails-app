import React, {useState} from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Review({ review, setReviews }) {
  const [errors, setErrors] = useState();
  const user = review.user

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setReviews((reviews) =>
        reviews.filter((review) => review.id !== id)
        );
      } else {
        r.json().then(err => {
          setErrors(err.errors);
        })
      }
    });
  }

  return (
    
    <Container className="review-container">
    <Card className="card" style={{width: '80%'}}>
    <Card.Header as="h5">{user.username} 
    </Card.Header>

    <Card.Body>
      <Card.Title>{review.summary}</Card.Title>
      <Card.Text>
        {review.text}
      </Card.Text>
      {review.rating}
      <Button id='delete-2' size="sm" onClick={() => handleDelete(review.id)}>Remove Comment</Button> 
      {errors ?
        errors.map(e => {
        return (<p className='errors' key={e}>{e}</p>)
        }) :
        null
      }
    </Card.Body>
    </Card>
  </Container>
  )
}

export default Review