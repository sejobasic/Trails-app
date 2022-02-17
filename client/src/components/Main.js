import React, { useState, useEffect }from 'react'
import TrailCards from './TrailCards'

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


  return (
    <div>
    {trails.map((trail) => {
    return <TrailCards key={trail.id} trail={trail} />
    })}
    </div>
)
}

export default Main