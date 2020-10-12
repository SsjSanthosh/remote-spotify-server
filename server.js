if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const { get_token } = require("./utils");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to get non-authorized access token. IE server to server communications (user not logged in)

app.get("/token", (req, response) => {
  //   const endpoint = req.body.endpoint;

  get_token(client_id, client_secret)
    .then((res) => {
      response.send(res.data);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("server live on", PORT));
