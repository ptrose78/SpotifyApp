// Track.js
import React from 'react';

function Track({ trackData, isInPlaylist, onAddToPlaylist, onRemoveFromPlaylist }) {
   return (
    <>
    <div>
      <h3>{trackData.name}</h3>
      <p>{trackData.artist}</p>
      <p>{trackData.album}</p>
    </div>
     
     {isInPlaylist ? (
       <button onClick={() => onRemoveFromPlaylist(trackData)}>-</button>
     ) : (
       <button onClick={() => onAddToPlaylist(trackData)}>+</button>
     )}
    </>
  );
}

export default Track;