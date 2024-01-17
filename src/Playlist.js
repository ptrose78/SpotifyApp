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
      <input type="text" onChange={(e)=>setPlaylistName(e.target.value)} />
      <div>
      {playlistTracks.map((track) => (
        <Track key={track.id} trackData={track} onRemoveFromPlaylist={onRemoveFromPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
      </div>
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
    </div>
  );
}

export default Playlist;