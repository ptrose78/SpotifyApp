import React from 'react';
import Track from './Track'; 

function Playlist({playlistTracks, onRemoveFromPlaylist, isInPlaylist}) {
    
  return (
    <div>
      {playlistTracks.map((track) => (
        <Track key={track.id} trackData={track} onRemoveFromPlaylist={onRemoveFromPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
    </div>
  );
}

export default Playlist;