import React, { useState } from 'react';
import Track from './Track'; 

function Playlist({playlistTracks, onRemoveFromPlaylist, onSavePlaylist, isInPlaylist}) {
  const [playlistName, setPlaylistName] = useState('');

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    onSavePlaylist(trackURIs);
  };  

  return (
    <div className='playlist'>
      <form onSubmit={savePlaylist}>
      <input type="text" onChange={(e)=>setPlaylistName(e.target.value)} />
      <div>
      {playlistTracks.map((track) => (
        <Track key={track.id} trackData={track} onRemoveFromPlaylist={onRemoveFromPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
      </div>
      <button type="submit">Save Playlist</button>
      </form>
    </div>
  );
}

export default Playlist;