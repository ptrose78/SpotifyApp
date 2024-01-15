// SearchResults.js
import React, { useEffect, useState } from 'react';
import Tracklist from './Tracklist';
import Playlist from './Playlist';
import SearchBar from './SearchBar';
import Spotify from './Spotify';

function SearchResults({ }) {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Call the method to get the access token
    const token = Spotify.getAccessToken;
    console.log(token)
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Call the method to search for tracks
    console.log('Spotify module:', Spotify);
    Spotify.searchTracks(query, accessToken)
      .then((results) => {;
        console.log('Search results:', results);
        setSearchResults(results);
      })
      .catch(error => console.error('Error:', error));
  };


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
      <SearchBar onSearch={handleSearch} />
      <div className='container'>
      <Tracklist tracks={searchResults} onAddToPlaylist={handleAddToPlaylist} isInPlaylist={false} />
      <Playlist playlistTracks={playlistTracks} onRemoveFromPlaylist={handleRemoveFromPlaylist} onSavePlaylist={handleSavePlaylist} isInPlaylist={true}/>
    </div>
    </>
  );
}
export default SearchResults;