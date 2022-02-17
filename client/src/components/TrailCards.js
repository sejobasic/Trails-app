import React, {useState, useEffect} from 'react'
import TrailPage from './TrailPage'
import { Button, Col, Card, Row, Container } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TrailCards({trail}) {
    

return (
  <Container className="card-container">
    <Card className="card" style={{width: '80%'}}>
    <Card.Header as="h5">{trail.name}</Card.Header>
    <Card.Body>
    <Card.Img variant="top" src={trail.image_url} style={{width: '50%'}}/>  
      <Card.Title>{trail.city}, {trail.state}</Card.Title>
      <Card.Text>
        {trail.description}
      </Card.Text>
      <Button variant="primary">View Trail</Button>
    </Card.Body>
    </Card>
  </Container>
  )
}

export default TrailCards