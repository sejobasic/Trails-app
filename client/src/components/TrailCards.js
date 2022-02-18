import React from 'react'
import { Button, Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TrailCards({trail, regex}) {
  const city = regex(trail.city)
  const state = regex(trail.state)
  const name = regex(trail.name)

return (
    <Card 
    className='animated-card'
    as={Link} 
    to={`/trails/${state}/${city}/${name}`} 
    style={{ 
      width: '90%', 
      height: '15.5rem', 
      textDecoration: 'none' 
      }}>
      <Card.Img style={{
          width: '100%', 
          height: '8rem', 
          objectFit: 'cover'
        }}
      variant="top" src={trail.image_url} 
      />
      <Card.Body>
        <Card.Title 
        style={{
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis'
          }}>{trail.name}
        </Card.Title>
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