import React from 'react'
import { Button, Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TrailCards({trail}) {
  const city = trail.city.split(' ').join('');
  const state = trail.state
  const name = trail.name.split(' ').join('');

return (
    <Card as={Link} to={`/trails/${state}/${city}/${name}`} style={{ width: '90%', height: '15rem', textDecoration: 'none' }}>
      <Card.Img style={{width: '100%', height: '7rem', objectFit: 'cover'}}variant="top" src={trail.image_url} />
      <Card.Body>
        <Card.Title style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{trail.name}</Card.Title>
        <Card.Text>
          {trail.city}, {trail.state}
        </Card.Text>
        <Card.Text>
          Rating: {trail.rating}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TrailCards