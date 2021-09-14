const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3333/api",
});

module.exports = api;
