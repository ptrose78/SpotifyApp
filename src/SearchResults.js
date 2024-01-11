// SearchResults.js
import React, { useState } from 'react';
import Tracklist from './Tracklist';
import Playlist from './Playlist';


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

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleAddToPlaylist = (track) => {
    setPlaylistTracks([...playlistTracks, track]);
  };
  
  const handleRemoveFromPlaylist = (track) => {    
    const updatedTracks = playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
    setPlaylistTracks(updatedTracks);
  };

  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAddToPlaylist={handleAddToPlaylist} isInPlaylist={false} />
      <Playlist playlistTracks={playlistTracks} onRemoveFromPlaylist={handleRemoveFromPlaylist} isInPlaylist={true}/>
    </div>
  );
}
export default SearchResults;