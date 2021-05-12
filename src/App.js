import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);

  // run code based on a gevin condition
  useEffect(() => {
    //  code
    const token = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log("I HAVE A TOKEN 👉 ", token);
  }, [])
  return (
    <div className="app">
      {
        <h1>I am logged in</h1>
      } : (
        <Login />
      )
    </div>
  );
}

export default App;
