// Track.js
import React from 'react';

function Track({ trackData, onAddToPlaylist, onRemoveFromPlaylist, isInPlaylist }) {

    return (
    <>
    <div className='track'>
      <h3>{trackData.name}</h3>
      <p>{trackData.artist}</p>
      <p>{trackData.album}</p>
    
     { isInPlaylist ? (
       <button onClick={() => {console.log('Removing from playlist:'); onRemoveFromPlaylist(trackData)}}>-</button>
     ) : (
       <button onClick={() => {console.log('Adding to playlist:'); onAddToPlaylist(trackData)}}>+</button>
     )}
     </div>
    </>
  );
}

export default Track;