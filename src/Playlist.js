import React from 'react';
import Track from './Track'; 

function Playlist({playlistTracks, onRemoveFromPlaylist, onSavePlaylist, isInPlaylist}) {
  
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    onSavePlaylist(trackURIs);
  };  

  return (
    <div className='playlist'>
    <div >
      <h3>Playlist</h3>
      {playlistTracks.map((track) => (
        <Track key={track.id} trackData={track} onRemoveFromPlaylist={onRemoveFromPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
    </div>
    <button onClick={savePlaylist}>Save Playlist</button>
    </div>
  );
}

export default Playlist;