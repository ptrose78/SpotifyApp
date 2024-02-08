import React from 'react';
import Track from './Track'; 

function Tracklist({tracks, onAddToPlaylist, isInPlaylist}) {
    
  return (
    <div className='tracklist'>
      <h3 className='tracklistHeading'>Tracklist</h3>
      
      <div className='listColumns'>
        <div class="column">
          <h3 className='song'>Song</h3>
        </div>
        <div class="column">
          <h3 className='album'>Album</h3>
        </div>
      </div>
      
      {tracks.map((track) => (
        <Track key={track.id} trackData={track} 
        onAddToPlaylist={onAddToPlaylist} isInPlaylist={isInPlaylist}/>
      ))}
    </div>
  );
}

export default Tracklist;