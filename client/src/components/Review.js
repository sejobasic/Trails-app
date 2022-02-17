import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'

function Review({ review }) {
  const user = review.user
  
  return (
    <Container className="card-container">
    <Card className="card" style={{width: '80%'}}>
    <Card.Header as="h5">{user.username}</Card.Header>
    <Card.Body>
    {/* <Card.Img variant="top" src={trail.image_url} style={{width: '50%'}}/>   */}
      <Card.Title>Filler</Card.Title>
      <Card.Text>
        {review.text}
      </Card.Text>
      {/* <Button as={Link} to={`/trails/${state}/${city}/${name}`} variant="primary">View Trail</Button> */}
    </Card.Body>
    </Card>
  </Container>
  )
}

export default Review