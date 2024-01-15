// Spotify.js

const Spotify = {
  // Method to get the user's access token from the URL
  getAccessToken: function() {
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear parameters from the URL to avoid issues with expired access tokens
      window.setTimeout(() => (window.location.href = '/'), expiresIn * 1000);

      // Set the access token and expiration time in your app
      return accessToken;
    } else {
      // Redirect the user to the Spotify authorization URL
      const redirectUri = 'http://localhost:3000'; // Update with your app's redirect URI
      const scope = 'user-read-private user-read-email'; // Add necessary scopes
      const clientId = 'a1f1dc4006e044ff8b7a53654549925a'; // Replace with your Spotify client ID

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
  }
};

export default Spotify;
