import React from 'react';
import Track from './Track'; 

function Tracklist({tracks, onAddToPlaylist, isInPlaylist}) {
    
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} trackData={track} 
        onAddToPlaylist={onAddToPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
    </div>
  );
}

export default Tracklist;