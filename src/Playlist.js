import React, { useState } from 'react';
import Track from './Track';
import Spotify from './Spotify'; 

function Playlist({playlistTracks, onRemoveFromPlaylist, onSavePlaylist, isInPlaylist}) {
  const [playlistName, setPlaylistName] = useState('');
  const trackURIs = playlistTracks.map(track => track.uri);

  const handleSaveToSpotify = async () => {
    const accessToken = Spotify.getAccessToken();
    console.log(accessToken)
    const success = await Spotify.savePlaylist(playlistName, trackURIs, accessToken);
  };  

  return (
    <div className='playlist'>
      <h3 className='playlistName'>Playlist Name</h3>
      <input type="text" onChange={(e)=>setPlaylistName(e.target.value)} />
      <div>
      {playlistTracks.map((track) => (
        <Track key={track.id} trackData={track} onRemoveFromPlaylist={onRemoveFromPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
      </div>
      <button className='spotifyButton' onClick={handleSaveToSpotify}>Save To Spotify</button>
    </div>
  );
}

export default Playlist;