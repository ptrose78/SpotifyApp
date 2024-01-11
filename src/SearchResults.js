// SearchResults.js
import React, { useState } from 'react';
import Tracklist from './Tracklist';


function SearchResults({ }) {

    const searchResults = [
        {
          id: 1,
          name: 'Song 1',
          artist: 'Artist A',
          album: 'Album X'
        },
        {
          id: 2,
          name: 'Song 2',
          artist: 'Artist B',
          album: 'Album Y'
        },
        {
          id: 3,
          name: 'Song 3',
          artist: 'Artist A',
          album: 'Album Z'
        }
      ];  

  const [playlist, setPlaylist] = useState([]);

  const handleAddToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };
  const handleRemoveFromPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAddToPlaylist={handleAddToPlaylist} isInPlaylist={false} />
    </div>
  );
}
export default SearchResults;