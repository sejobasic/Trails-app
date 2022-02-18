import React, { useState, useEffect }from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TrailPage from './TrailPage'
import FavoritesPage from './FavoritesPage'


function Main({ user }) {
    const [trails, setTrails] = useState([]);

    // gets all
    useEffect(() => {
      fetch("/trails")
        .then((resp) => resp.json())
        .then(trails => setTrails(trails))
        // .then(console.log(trails));
      // .then((items) => console.log(items));
    }, []);

    const regex = (str) => {
      return(
        str.replace(/[^a-z0-9\s-]/ig,'')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()
      )
    }

    const trailPageRoutes = trails.map(trail => {
      const city = regex(trail.city)
      const state = regex(trail.state)
      const name = regex(trail.name)

      return (
        <Route
          key={trail.id}
          path={`/trails/${state}/${city}/${name}`}
          element={<TrailPage trailId={trail.id}/>}
        />
      )
    })

  return (
    <div>
      <Routes>
        <Route
          path='/favorites'
          element={<FavoritesPage user={user} regex={regex}/>}
        />
        <Route
          path='/'
          element={<Home trails={trails} regex={regex}/>}
        />
        {trailPageRoutes}
      </Routes>
    </div>
)
}

export default Main