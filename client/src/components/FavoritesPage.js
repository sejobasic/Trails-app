import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import TrailCards from './TrailCards'

function FavoritesPage({ user }) {
  const [trails, setTrails] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/favorites")
    .then((resp) => resp.json())
    .then(trails => {
      setTrails(trails)
      setLoaded(true)
      console.log(trails)
    })
  }, [])

  if (!loaded) {
    return <div>loading...</div>
  }

  return (
    <Container>
    <h3>{user.username}'s Favorite Trails</h3>
      {trails.map(trail => {
        return (
          <TrailCards key={trail.id} trail={trail}/>
        )
      })}
    </Container>
  )
}

export default FavoritesPage