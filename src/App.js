import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './SearchResults';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <SearchResults></SearchResults>
      </header>
    </div>
  );
}

export default App;
