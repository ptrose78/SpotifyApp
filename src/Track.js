// Track.js
import React from 'react';

function Track({ trackData, onAddToPlaylist, onRemoveFromPlaylist, isInPlaylist }) {

    return (
    <>
    <div className='track'>
      <div class="column">
        <h3 className='song'>{trackData.name}</h3>
      </div>
      <div class="column">
        <h3 className='album'>{trackData.album.name}</h3>
      </div>

     { isInPlaylist ? (
       <button className='trackButtons' onClick={() => {console.log('Removing from playlist:'); onRemoveFromPlaylist(trackData)}}>-</button>
     ) : (
       <button className='trackButtons' onClick={() => {console.log('Adding to playlist:'); onAddToPlaylist(trackData)}}>+</button>
     )}
    </div>
    </>
  );
}

export default Track;