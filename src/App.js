import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './SearchResults';
import Spotify from './Spotify';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // Call the method to get the access token
    const token = Spotify.getAccessToken;

    if (token) {
      setAccessToken(token);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       <SearchResults></SearchResults>
      </header>
    </div>
  );
}

export default App;
