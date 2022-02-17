import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import TrailCards from "./components/TrailCards";
import Footer from "./components/Footer";
import Main from "./components/Main";
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
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
