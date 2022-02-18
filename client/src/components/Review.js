import React, {useState} from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Review({ review, trail, handleDelete }) {
  const user = review.user
  const [deleteReview, setDeleteReview] = useState([]);


  // function handleDelete(id) {
  //   fetch(`/reviews/${id}`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setDeleteReview((deleteReview) =>
  //       deleteReview.filter((rev) => rev.id !== id)
  //       );
  //     }
  //   });
  // }

  return (
    
    <Container className="review-container">
    <Card className="card" style={{width: '80%'}}>
    <Card.Header as="h5">{user.username} 
    {/* <Button id='delete' size="sm" onClick={() => handleDelete(review.id)}>Remove Comment</Button>  */}
    </Card.Header>

    <Card.Body>
    {/* <Card.Img variant="top" src={trail.image_url} style={{width: '50%'}}/>   */}
      <Card.Title>{review.summary}</Card.Title>
      <Card.Text>
        {review.text}
      </Card.Text>
      <Rating
      allowHover={false}
      ratingValue={review.rating * 20}
      fillColor={"#483d8b"}
       />
      <Button id='delete-2' size="sm" onClick={() => handleDelete(review.id)}>Remove Comment</Button> 
      {/* <Button as={Link} to={`/trails/${state}/${city}/${name}`} variant="primary">View Trail</Button> */}
    </Card.Body>
    </Card>
  </Container>
  )
}

export default Review