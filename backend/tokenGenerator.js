const env = require('dotenv').config();
const axios = require('axios');
const queryString = require('querystring');

(async () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET; // Replace with your client secret
  const redirect_uri = 'http://localhost:3000/callback';
  const code = process.env.CALLBACK_CODE; // The code you received as a URL parameter
  const tokenUrl = 'https://accounts.spotify.com/api/token';

  // Dynamically import node-fetch
  const fetch = (await import('node-fetch')).default;

  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret
  };

  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Full response", data);
    console.log('Access Token:', data.access_token);
    console.log('Refresh Token:', data.refresh_token);
    // Store these tokens securely for making API requests
  })
  .catch(error => {
    console.error('Error exchanging code for tokens:', error);
  });
})();
