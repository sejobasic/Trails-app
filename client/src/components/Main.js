import React, { useState, useEffect }from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TrailPage from './TrailPage'


function Main() {
    const [trails, setTrails] = useState([]);

    // gets all
    useEffect(() => {
      fetch("/trails")
        .then((resp) => resp.json())
        .then(trails => setTrails(trails))
        // .then(console.log(trails));
      // .then((items) => console.log(items));
    }, []);

    const trailPageRoutes = trails.map(trail => {
      const city = trail.city.split(' ').join('');
      const state = trail.state
      const name = trail.name.split(' ').join('');

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
          path='/'
          element={<Home trails={trails}/>}
        />
        {trailPageRoutes}
      </Routes>
    </div>
)
}

export default Main