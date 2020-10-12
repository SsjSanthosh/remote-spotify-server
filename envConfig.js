const env = require("dotenv");
env.config();
module.exports = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};
