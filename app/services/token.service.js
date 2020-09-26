const axios = require("axios").default;
const qs = require("querystring");

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}




const getToken = async() => {
  let token;
  const promise = await axios
      .post(
          "https://accounts.spotify.com/api/token",
          qs.stringify({
              grant_type: "client_credentials",
              client_id: "8ed0f675fa0c47509bd74b46f4ca1ede",
              client_secret: "1ad3d73c11c14aafa75ee00267ca5fab",
          }),
          config
      )
  token = promise.data;
  return token.access_token;
}

module.exports = getToken;