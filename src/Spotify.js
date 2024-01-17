// Spotify.js

const Spotify = {
  // Method to get the user's access token from the URL
  getAccessToken: function() {
    localStorage.removeItem('access_token');
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear parameters from the URL to avoid issues with expired access tokens
      window.setTimeout(() => (window.location.href = '/'), expiresIn * 1000);

      // Set the access token and expiration time in app
      console.log(accessToken)
      return accessToken;
    } else {
      // Redirect the user to the Spotify authorization URL
      const redirectUri = 'http://localhost:3000'; 
      const scope = 'playlist-modify-public playlist-modify-private user-read-private'; 
      const clientId = 'a1f1dc4006e044ff8b7a53654549925a';
      const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;

      console.log('Authorization URL:', authorizationUrl);
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
    }
  },
  searchTracks: function(query, accessToken) {
    return fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.tracks) {
          console.log(data.tracks)
          return data.tracks.items;
        } else {
          return [];
        }
      })
      .catch(error => {
        console.error('Error searching tracks:', error);
        return [];
      });
  },
  savePlaylist: async function (playlistName, trackURIs, accessToken) {
    try {
      // Step 1: Get user ID
      const userId = await this.getUserId(accessToken);

      // Step 2: Create a new playlist
      const playlistId = await this.createPlaylist(userId, playlistName, accessToken);

      // Step 3: Add tracks to the new playlist
      await this.addTracksToPlaylist(userId, playlistId, trackURIs, accessToken);

      console.log('Playlist saved successfully!');
      return true;
    } catch (error) {
      console.error('Error saving playlist:', error);
      return false;
    }
  },
 
  // Helper method to get user ID
  getUserId: async function (accessToken) {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to get user ID. Status: ${response.status}`);
      }
      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error('Error getting user ID:', error);
      throw error; // Propagate the error
    }
  },

  // Helper method to create a new playlist
  createPlaylist: async function (userId, playlistName, accessToken) {
    console.log(accessToken)
    console.log(userId)
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: playlistName,
        description: 'Custom playlist created with Jammming',
        public: true,
      }),
    });
    
    const data = await response.json();
    console.log(data)
    return data.id;
  },

  // Helper method to add tracks to a playlist
  addTracksToPlaylist: async function (userId, playlistId, trackURIs, accessToken) {
    await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: trackURIs,
      }),
    });
    console.log(trackURIs)
  }
};

export default Spotify;
