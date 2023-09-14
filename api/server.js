const express = require("express");
const server = express();

const nbaRouter = require("./NBA/nba-router");
server.use(express.json());
server.use("/playerlist", nbaRouter);

module.exports = server;
