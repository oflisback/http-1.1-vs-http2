const express = require("express");
const cors = require("cors");
const nocache = require("nocache");
const https = require("https");
const { readFileSync } = require("fs");

const app = express();
app.use(cors());
app.use(nocache());

app.get("/ping", (_, res) => {
  res.send("pong!");
});

app.get("/delay", (_, res) => {
  setTimeout(() => res.send("42"), 5000);
});

const credentials = {
  key: readFileSync(__dirname + "/server.key"),
  cert: readFileSync(__dirname + "/server.cert"),
};

const httpsServer = https.createServer(credentials, app);

const port = 3011;
httpsServer.listen(port, () => {
  console.log(`HTTP 1.1 server listening on port ${port}`);
});
