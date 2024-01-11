import React from 'react';
import Track from './Track'; 

function Tracklist({tracks, onAddToPlaylist, isInPlaylist, onRemoveFromPlaylist}) {
    
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} trackData={track} 
        onAddToPlaylist={onAddToPlaylist} isInPlaylist={isInPlaylist}
        onRemoveFromPlaylist={onRemoveFromPlaylist}/>
      ))}
    </div>
  );
}

export default Tracklist;