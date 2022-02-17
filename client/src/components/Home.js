import React from 'react'
import TrailCards from './TrailCards'

function Home({ trails }) {
  
  return (
    <div>
      {trails.map((trail) => {
        return <TrailCards key={trail.id} trail={trail} />
      })}
    </div>
  )
}

export default Home