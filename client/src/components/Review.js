import React from 'react'
import { Card, Container } from 'react-bootstrap'

function Review({ review, trail }) {
  const user = review.user

  return (
    <Container className="review-container">
    <Card className="card" style={{width: '80%'}}>
    <Card.Header as="h5">{user.username}</Card.Header>
    <Card.Body>
    {/* <Card.Img variant="top" src={trail.image_url} style={{width: '50%'}}/>   */}
      <Card.Title>{review.summary}</Card.Title>
      <Card.Text>
        {review.text}
      </Card.Text>
      {review.rating}
      {/* <Button as={Link} to={`/trails/${state}/${city}/${name}`} variant="primary">View Trail</Button> */}
    </Card.Body>
    </Card>
  </Container>
  )
}

export default Review