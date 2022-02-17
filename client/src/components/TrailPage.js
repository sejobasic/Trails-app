import React, { useEffect, useState } from 'react'
import Review from './Review'
import TrailCards from './TrailCards'

function TrailPage({ trailId }) {
  const [trail, setTrail] = useState({});
  const [reviews, setReviews] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/trails/${trailId}`)
    .then(r => r.json())
    .then (trail => {
      setTrail(trail)
      setReviews(trail.reviews)
      setLoaded(true)
    })
  }, [])

if (!loaded) {
  return <div>loading...</div>
}
  return (
    <div>
      <TrailCards trail={trail}/>
      
      {reviews.map(review => {
        return <Review review={review}/>
      })}
    </div>

  )
}

export default TrailPage