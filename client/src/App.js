import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
// import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      <main>
      </main>
    </>
  );
}

export default App;
