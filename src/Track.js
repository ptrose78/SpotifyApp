// Track.js
import React from 'react';

function Track({ trackData }) {
  return (
    <div>
      <h3>{trackData.title}</h3>
      <p>{trackData.artist}</p>
      {/* Additional track information */}
    </div>
  );
}

export default Track;