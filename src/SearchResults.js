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
          album: 'Album X',
          uri: 'spotify:track:1'
        },
        {
          id: 2,
          name: 'Song 2',
          artist: 'Artist B',
          album: 'Album Y',
          uri: 'spotify:track:2'
        },
        {
          id: 3,
          name: 'Song 3',
          artist: 'Artist A',
          album: 'Album Z',
          uri: 'spotify:track:3'
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

  const handleSavePlaylist = trackURIs => {
    console.log('Saving playlist to Spotify:', trackURIs);
  };

  return (
    <>
      <h2>Search Results</h2>
      <div className='container'>
      <Tracklist tracks={searchResults} onAddToPlaylist={handleAddToPlaylist} isInPlaylist={false} />
      <Playlist playlistTracks={playlistTracks} onRemoveFromPlaylist={handleRemoveFromPlaylist} onSavePlaylist={handleSavePlaylist} isInPlaylist={true}/>
    </div>
    </>
  );
}
export default SearchResults;