const axios = require("axios");
const qs = require("qs");

const token_url = "https://accounts.spotify.com/api/token";
const get_token = (id, secret) => {
  const headers = {
    Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const grant_type = qs.stringify({
    grant_type: "client_credentials",
  });
  return axios.post(token_url, grant_type, {
    headers: headers,
  });
};

module.exports = { get_token };
