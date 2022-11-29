const cors = require("cors");
const express = require("express");
const http2Express = require("http2-express-bridge");
const http2 = require("http2");
const { readFileSync } = require("fs");
const app = http2Express(express);

app.use(cors());

app.get("/ping", (_, res) => {
  res.writeHead(200);
  res.end("Pong!");
});

app.get("/delay", (_, res) => {
  setTimeout(() => {
    res.writeHead(200);
    res.end("42");
  }, 5000);
});

const options = {
  key: readFileSync(__dirname + "/server.key"),
  cert: readFileSync(__dirname + "/server.cert"),
  allowHTTP1: false,
};

const server = http2.createSecureServer(options, app);
const port = 3020;
server.listen(port, () => {
  console.log(`HTTP 2.0 server listening on port ${port}`);
});
