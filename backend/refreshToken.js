const refreshToken = process.env.REFRESH_TOKEN; // Replace with your actual refresh token

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
  },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })
})
.then(response => response.json())
.then(data => {
  const newAccessToken = data.access_token;
  console.log("New access token:", newAccessToken);
  // Use the new access token for subsequent API requests
})
.catch(error => {
  console.error("Error refreshing the access token:", error);
});